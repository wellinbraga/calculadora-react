import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [resultNumber, setResultNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setResultNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const soma = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(soma));
      setFirstNumber('0');
      setOperation('+');
    };
  };

    const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const soma = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(soma));
      setFirstNumber('0');
      setOperation('-');
    };
  };

    const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const soma = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(soma));
      setFirstNumber('0');
      setOperation('/');
    };
  };

    const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const soma = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(soma));
      setFirstNumber('0');
      setOperation('*');
    };
  };

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== 0 ){
      switch(operation){
        case '+' : handleSumNumbers();
        break;
        case '-' : handleMinusNumbers();
        break;
        case '*' : handleMultiplyNumbers();
        break;
        case '/' : handleDivideNumbers();
        break;
      default: break;
      }

      setOperation('');
      setFirstNumber('0');
      
    } 
  };  

  return (
    <Container>
        <Content>
          <Input value={currentNumber}/>
            <Row>
            <Button label="" onClick={handleOnClear}/>
            <Button label="" onClick={handleOnClear}/>
            <Button label="C" onClick={ handleOnClear}/>
            <Button label=" " onClick={handleOnClear}/>
          </Row>          
            <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="*" onClick={handleMultiplyNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="/" onClick={handleDivideNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="," onClick={() => handleAddNumber('.')}/>
            <Button label="+" onClick={handleSumNumbers}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        </Content> 
    </Container>
  );
}

export default App;
