import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';

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

export const LandingPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const useShowOptions = () =>{
    setShowOptions(true);
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
          <Title>XlComp</Title>
      </div>
      <div className="styles.phrase">
          <Titleh4>¡Analiza tus archivos con un click!</Titleh4>
      </div>
      {!showOptions ? (
      <div className="styles.button">
        <ButtonO onClick={useShowOptions}>¡Vamos!</ButtonO>
      </div>
      ) : (
      
      <div className="styles.options">
        <ButtonO onClick={()=>useNavigation('compare')}>Compare</ButtonO>
        <ButtonC onClick={()=>useNavigation('construction')}>Function 2</ButtonC>
        <ButtonC className="styles.construction" onClick={()=>useNavigation('construction')}>Function 3</ButtonC>
        <ButtonC className="styles.construction" onClick={()=>useNavigation('construction')}>Function 4</ButtonC>
      </div>
      )}
    </Backgr>
  )
}
