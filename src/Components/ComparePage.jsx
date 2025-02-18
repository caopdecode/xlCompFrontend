import React, {useState} from 'react'
import './ComparePage.css'
import styled from 'styled-components'
import api from './services/api.js';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete'
import EditDIcon from '@mui/icons-material/Edit'

const Backgr = styled.div`
  width: 1000px;
  min-height: 650px;
  background-color: rgb(233, 207, 141);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  font-size: 20px;
  color: darkgreen;
  `;

const InfoCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 950px;
    height: 690;
    max-height: 100%
`;

const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 10px;
  `;

const Titleh4 = styled.h4`
  font-size: 20px;
  margin: 5px 0px;
`;

const TitleCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 950px;
    height: 40px;
`;

const UploadButton = styled.label`
  background-color: green;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin: 10px;
  transition: 0.5s;

  &:hover {
    background-color: rgb(0, 164, 0);
    transition: 0.5s;
  }
`;

const CompareButton = styled.button`
  background-color: #008CBA;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.5s;

  &:hover {
    background-color: #005f73;
    transition: 0.5s;
  }
`;

const ResultsDiv = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 950px;
  height: 200px;
  overflow: scroll;
`;

const Container = styled.div`
    display: flex;
    width: 950px;
    height: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const File = styled.input`
    background-color: green;
    display: none;
`;

const PDifferences = styled.p`
    width: 950px;
    heigh: 50px;
    margin: 10px;
    text-align: justify;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ActionBttCont = styled.div`
  width: 950px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const ActionButtons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radious: 10px;
    background-color: green;
    transition: 0.5s;
    margin: 10px;
    color: whitesmoke;
    
    
    
    &:hover {
    background-color: rgb(0,164,0);
    transition: 0.5s;
  }
`;

const DownloadButton = styled.button`
  width: 170px;
  height: 50px;
  border-radious: 10px;
  background-color: #008CBA;
  transition: 0.5s;
  margin-top: 10px;
  font-size: 14px;
  color: whitesmoke;

  &:hover{
    background-color: #005F73;
    transition 0.5s;
  }
`;

const ButtonCancel = styled.button`
    margin: 10px;
    transition: 0.5s;
    background-color: darkred;
    color: whitesmoke;
    width: 100px;
    height: 35px;
    font-size: 18px;
    display:flex;
    justify-content: center;
    align-items: center;

    &:hover{
    margin: 10px;
    transition: 0.5s;
    background-color: red;
    border: none;
  }
`;

const ButtonLanguage = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    width: 25px;
    height: 25px;
    transition: 0.5s;
    background-color: darkgrey;
    color: whitesmoke;

    &:hover{
    transition: 0.5s;
    background-color: grey;
    border: none;
  }
`;

const DivCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ComparePage = () => {
    const [File1, setFile1] = useState(null);
    const [File2, setFile2] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [differenceList, setDifferenceList] = useState([]);
    const [showdownloadButton, setShowDownloadButton] = useState(false);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };

    const translateDifference = (key) => {
      const parts = key.split(':');
      const translationKey = parts[1];
      console.log("Ha entrado en la función");
      console.log(parts);
  
      switch (translationKey) {
          case 'differentRows':
              return t('differentRows');
          case 'nullValueInRow':
              return t('nullValueInRow', { row: parts[2] });
          case 'difference':
              if (parts.length <=6) { // Validar que hay suficientes valores
                  return t('difference', {
                      nD: parts[0],
                      row: parts[2],
                      column: parts[3],
                      value1: parts[4],
                      value2: parts[5]
                  });
              }
              return key; // Retorna como está si el formato no es válido
          default:
              return key; // Retorna la clave original si no hay traducción
      }
  };

    const useFile1 = (event) =>{
        setFile1(event.target.files[0]);
    };

    const useFile2 = (event) =>{
        setFile2(event.target.files[0]);
    };

    const useNavigation = () =>{
        navigate('/');
    }

    const useCompare = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("File1", File1);
        formData.append("File2", File2);
        setShowResults(true);
        console.log(File1, File2);
    

    try{
      const response = await api.post('/api/actions/compare', formData,{
        headers: {"Content-Type": "multipart/form-data"},
      });
      setDifferenceList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const useEdit = (index) => {
    api.post(`/api/actions/update?Index=${index}`)
    .then(response =>{
      alert(t('fileUpdated'));
      console.log(response.data);
      setDifferenceList(response.data);
      setShowDownloadButton(true);
    })
    .catch(error =>{
      console.error(t('errorUpdate'), error);
      alert(t('errorUpdate'));
    });
  };

  const useDiscard = (index) => {
    api.post(`/api/actions/discard?Index=${index}`)
    .then(response => {
      alert(t('fileDiscarted'));
      console.log(response.data);
      console.log(index);
      setDifferenceList(response.data);
      setShowDownloadButton(true);
    })
    .catch(error => {
      console.error(t('errorDiscard'), error);
      alert(t('errorDiscard'));
    });
  };

 const useDownload = () =>{
    api.get('/api/actions/download', {responseType: 'blob'})
    .then(response =>{
      const url = window.URL.createObjectURL(new Blob ([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'archivo2_actualizado.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch(error => console.error(t('errorDownload'), error));
 }

  



  return (
    <Backgr>
        <InfoCont>
            <TitleCont>
                <Titleh4>{t('title')}</Titleh4>
                <DivCont>
                <ButtonCancel onClick={useNavigation}>{t('buttonHome')}</ButtonCancel>
                <ButtonLanguage onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
                {i18n.language === 'es' ? t('EN') : t('ES')}
          </ButtonLanguage>
          </DivCont>
            </TitleCont>
            <Container>
            <div className="functTitle">
                <Title>{t('compareTitle')}</Title>
            </div>
            <div className="description">
                <p>{t('descriptionFileUpload')}</p>
                <p>{t('noteDescription')}</p>
            </div>
            <div className="upload">
                <File type='file' id='file-uploadOne' onChange={useFile1}/>
                <UploadButton htmlFor='file-uploadOne'>{File1 ? t('file1Uploaded') : t('uploadFile1')}</UploadButton>
                <File type='file' id='file-uploadTwo' onChange={useFile2}/>
                <UploadButton htmlFor='file-uploadTwo'>{File2 ? t('file2Uploaded') : t('uploadFile2')}</UploadButton>
                {File1 && File2 && (
                    <CompareButton onClick={useCompare}>{t('buttonCompare')}</CompareButton>
                )}
            </div>
            {showResults && (
            <ResultsDiv>
                <h4>{t('compareResults')}</h4>
                {differenceList.map((differenceList, index)=> (
                <ActionBttCont key={index}>
                 <PDifferences>
                    {translateDifference(differenceList)}  
                    </PDifferences>
                    <ActionButtons onClick={() => useEdit(index+1)}><EditDIcon/></ActionButtons>
                    <ActionButtons onClick={() => useDiscard(index+1)}><DeleteIcon/></ActionButtons>
                    </ActionBttCont>
                ))}
            </ResultsDiv>
            )}
            {showdownloadButton && (
              <DownloadButton onClick={useDownload}>{t('downloadFile')}</DownloadButton>
            )}
            </Container>
        </InfoCont>
    </Backgr>
  )
}
