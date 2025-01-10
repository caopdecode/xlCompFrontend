import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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

const Title = styled.h1`
  font-size: 90px;
  margin-bottom: 10px;
  `;

const Titleh4 = styled.h4`
  font-size: 20px;
  margin: 10px 0px;
`;

const ButtonO = styled.button`
    margin: 10px;
    transition: 0.5s;
    background-color: green;
    color: whitesmoke;

    &:hover{
    margin: 10px;
    transition: 0.5s;
    background-color: rgb(0, 164, 0);
    border: none; 
    }
`;

const ButtonC = styled.button`
    margin: 10px;
    transition: 0.5s;
    background-color: darkgray;
    color: whitesmoke;

    &:hover{
    margin: 10px;
    transition: 0.5s;
    background-color: grey;
    border: none;
  }
`;

const ButtonCancel = styled.button`
    margin: 10px;
    transition: 0.5s;
    background-color: darkred;
    color: whitesmoke;

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
  flex-direction: column;
`;

export const LandingPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const useShowOptions = () =>{
    setShowOptions(true);
  }

  const dontShowOptions = () =>{
    setShowOptions(false);
  }

  const useNavigation = (action) =>{
    if(action === 'compare'){
      navigate('/compare');
    } else{
      alert("Función en desarrollo");
    }
  }

  return (
    <Backgr>
      <div className="styles.title">
          <Title>{t('title')}</Title>
      </div>
      <div className="styles.phrase">
          <Titleh4>{t('phrase')}</Titleh4>
      </div>
      {!showOptions ? (
      <DivCont className="styles.button">
        <ButtonO onClick={useShowOptions}>{t('buttonGo')}</ButtonO>
        <DivCont className="styles.language-toggle">
          <ButtonLanguage onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
            {i18n.language === 'es' ? t('EN') : t('ES')}
          </ButtonLanguage>
        </DivCont>
      </DivCont>
      ) : (
      
      <div className="styles.options">
        <ButtonO onClick={()=>useNavigation('compare')}>{t('buttonCompare')}</ButtonO>
        <ButtonC onClick={()=>useNavigation('construction')}>{t('buttonFunc2')}</ButtonC>
        <ButtonC className="styles.construction" onClick={()=>useNavigation('construction')}>{t('buttonFunc3')}</ButtonC>
        <ButtonC className="styles.construction" onClick={()=>useNavigation('construction')}>{t('buttonFunc4')}</ButtonC>
        <div>
        <ButtonCancel onClick={dontShowOptions}>{t('buttonCancel')}</ButtonCancel>
        </div>
      </div>
      
      )}
    </Backgr>
  )
}
