import React, {useState} from 'react'
import './ComparePage.css'
import styled from 'styled-components'

const Backgr = styled.div`
  width: 1000px;
  height: 500px;
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
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 950px;
    height: 450px;
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
    justify-content: left;
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

  &:hover {
    background-color: #005f73;
  }
`;

const ResultsDiv = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Container = styled.div`
    display: flex;
    width: 950px;
    height: 350px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const File = styled.input`
    background-color: green;
    display: none;
`;

export const ComparePage = () => {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const useFile1 = (event) =>{
        setFile1(event.target.files[0]);
    };

    const useFile2 = (event) =>{
        setFile2(event.target.files[0]);
    };

    const useCompare = () =>{
        setShowResults(true);
    };



  return (
    <Backgr>
        <InfoCont>
            <TitleCont>
                <Titleh4>XlComp</Titleh4>
            </TitleCont>
            <Container>
            <div className="functTitle">
                <Title>Compare Files</Title>
            </div>
            <div className="description">
                <p>Upload two .xlsx files to know the differences between one file and other</p>
            </div>
            <div className="upload">
                <File type='file' id='file-uploadOne' onChange={useFile1}/>
                <UploadButton htmlFor='file-uploadOne'>{file1 ? "File One Uploaded" : "Upload File One"}</UploadButton>
                <File type='file' id='file-uploadTwo' onChange={useFile2}/>
                <UploadButton htmlFor='file-uploadTwo'>{file2 ? "File Two Uploaded" : "Upload File Two"}</UploadButton>
                {file1 && file2 && (
                    <CompareButton onClick={useCompare}>Compare</CompareButton>
                )}
            </div>
            {showResults && (
            <ResultsDiv>
                <h3>Compare Results:</h3>
            </ResultsDiv>
            )}
            </Container>
        </InfoCont>
    </Backgr>
  )
}
