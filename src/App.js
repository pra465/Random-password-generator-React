import { useState } from 'react';
import './App.css';

function App() {

  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("")

  const generatePassword = () => {
    let passwordLength = 8;
    let newPassword = "";
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    for(var i = 0; i <= passwordLength; i++){
      let randomNumber = Math.floor(Math.random()*charSet.length);
       newPassword += charSet.substring(randomNumber, randomNumber+1);
    }
    return setPassword(newPassword);
  }

  const copyPassword = () => {
    let element = document.getElementsByClassName("password");
    setCopy(element.innerHTML)
    copy(copy);

  }
  return (
    <div className='app'>
      <div className='container'>
      <div className='header'>
        <p className='password'>{password}</p>
        <button onClick={copyPassword}>COPY</button>
      </div>
      <div className='filters'>
        <div>
        <input type="checkbox" id='small_latters'/>
        <label htmlFor="small_latters">Only small latters</label>
        </div>

        <div>
        <input type="checkbox" id='numbers'/>
        <label htmlFor="numbers">Only numbers</label>
        </div>

        <div>
        <input type="checkbox" id='capital_latters'/>
        <label htmlFor="capital_latters">Only capital latters</label>
        </div>

       <div>
       <input type="checkbox" id='special_character'/>
        <label htmlFor="special_character">No special character</label>
       </div>
      </div>

      <button className='password-btn' onClick={generatePassword}>Generate Password</button>
    </div>
    </div>
  );
}

export default App;
