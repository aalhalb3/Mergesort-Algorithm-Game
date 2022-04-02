import ReactDOM from 'react-dom';
import {LevelTwo, setScore} from "./components/levels/LevelTwo";
import LevelOne from "./components/levels/LevelOne";
import LevelThree from "./components/levels/LevelThree";
import LevelFour from "./components/levels/LevelFour";
import LevelFive from "./components/levels/LevelFive";
import {useState, useEffect} from 'react';
import AdminPage from './components/AdminPage';
import { useImperativeHandle } from 'react';
import axios from 'axios';
import { stopTimer } from './components/Timer';
let ip = require('./axiosIP');


let draggedItem = null;
let emailEntered = null;

let userLevel = 0;
let lives = 3;
let currentLevel = 1;

let timeout
let timer_on = false

document.addEventListener('mousemove', runEvent)
document.addEventListener('keypress', runEvent)
document.addEventListener('mousedown', runEvent)

function runEvent(e){
  //e.preventDefault();
  console.log('EVENT TYPE: ' + e.type);
  stopTimeOutTimer();
  startTimeOutTimer();
}

function startTimeOutTimer(){
  if(!timer_on){
    timer_on = true
    timeout = setTimeout(timeOut, 500000)
  }
}

function stopTimeOutTimer(){
  clearTimeout(timeout);
  timer_on = false;
}

function timeOut(){
  alert("Your Session has Expired!");
  resetSteps();
  stopTimer();
  setScore(0);
  ReactDOM.render(<HomePage/>, document.getElementById('root'))

}

function deductLives(){
  lives--;
  return lives;
}
function resetLives(){
  lives = 3;
}
function getLives(){
  return lives;
}

function changeLevel(level){
  currentLevel = level;
  console.log(currentLevel);
  return currentLevel;
}

function getLevel(){
  return currentLevel;
}

function App() {
  return(
    <div>
      <HomePage />
    </div>
  )
}

function setDraggedItem(item){
  draggedItem = item;
}

function HomePage(){
  return(
    <div class = "center" style={{textAlign: 'center' , lineHeight: 2, fontSize: 50}}>
      ALGORITHM QUIZ<br/>
      <button onClick= {()=> {ReactDOM.render(<UserLogin/>, document.getElementById('root'))}}>User Login</button>
      <button onClick= {()=> {ReactDOM.render(<AdminLoginMenu/>, document.getElementById('root'))}}>Admin Login</button>
    </div>
  )
}

function UserLogin(){
  function onClick(){
    emailEntered = `${document.getElementById("email-field").value}`
    axios({
      method: "POST",
      url: `${ip.getIP()}user-login`,
      data: {
        email: emailEntered
      }
    }).then(res => {
      userLevel = res.data;
    });
    ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'));
  }

return(
<div class = "center">
<h1>User Login</h1>
<label for="email">Email: </label>
<input type="text" placeholder="Enter Email" name="email" id="email-field" class="login-form-field"/>
<br/>
<button onClick={onClick}>Login</button><br/>
<button onClick= {()=> {ReactDOM.render(<HomePage/>, document.getElementById('root'))}}>Back</button>
</div>)
}

function UserLoginMenu(){
  return(
  <div>
    <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Choose Algorithm</button>
  </div>)
}

function AdminLoginMenu(){
  //e.preventDefault()
  function onClick(){
    if(document.getElementsByName("userName")[0].value == "admin" && document.getElementsByName("password")[0].value == "123"){
      ReactDOM.render(<AdminPage/>, document.getElementById('root'))
    }else {
      document.getElementById("incorrect").innerText = "Incorrect User Name or Password"
    }
    
  }

  return(
    <div class = "center">
      <h1>Admin Login Page</h1>
      <form id="login-form" onSubmit={(event)=>{event.preventDefault(); onClick();}}>
        Enter UserName: <input name='userName' type={"text"}></input><br/>
        Enter Password: <input name='password' type={"password"}></input>
        <input type={"submit"}></input>
      </form>
      <button onClick= {()=> {ReactDOM.render(<HomePage/>, document.getElementById('root'))}}>Back</button>
      <p id='incorrect'></p>
    </div>
  )
}

function ChooseAlgoMenu(){
  return(

    <div class = "center">
      <button onClick= {()=> {ReactDOM.render(<UserLogin/>, document.getElementById('root'))}}>Back</button>
      <h1>Choose Algorithm</h1>
      <button onClick= {()=> {ReactDOM.render(<MergeSortMenu/>, document.getElementById('root'))}}>Merge Sort</button>
    </div>
  )
}

function MergeSortMenu(){
  switch(userLevel) {
    case 1:
      return(
        <div class = "center">
          <h1>Choose Level</h1>
          <button onClick= {()=> {ReactDOM.render(<LevelOne/>, document.getElementById('root'))}}>Level One</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Back</button>
        </div>
      )
    case 2:
      return(
        <div class = "center">
          <h1>Choose Level</h1>
          <button onClick= {()=> {ReactDOM.render(<LevelOne/>, document.getElementById('root'))}}>Level One</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelTwo/>, document.getElementById('root'))}}>Level Two</button>
          <br/>
          <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Back</button>
        </div>
      )
    case 3:
      return(
        <div class = "center">
          <h1>Choose Level</h1>
          <button onClick= {()=> {ReactDOM.render(<LevelOne/>, document.getElementById('root'))}}>Level One</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelTwo/>, document.getElementById('root'))}}>Level Two</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelThree/>, document.getElementById('root'))}}>Level Three</button>
          <br/>
          <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Back</button>
        </div>
      )
    case 4:
      return(
        <div class = "center">
          <h1>Choose Level</h1>
          <button onClick= {()=> {ReactDOM.render(<LevelOne/>, document.getElementById('root'))}}>Level One</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelTwo/>, document.getElementById('root'))}}>Level Two</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelThree/>, document.getElementById('root'))}}>Level Three</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelFour/>, document.getElementById('root'))}}>Level Four</button>
          <br/>
          <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Back</button>
        </div>
      )
    case 5:
      return(
        <div class = "center">
          <h1>Choose Level</h1>
          <button onClick= {()=> {ReactDOM.render(<LevelOne/>, document.getElementById('root'))}}>Level One</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelTwo/>, document.getElementById('root'))}}>Level Two</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelThree/>, document.getElementById('root'))}}>Level Three</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelFour/>, document.getElementById('root'))}}>Level Four</button>
          <br />
          <button onClick= {()=> {ReactDOM.render(<LevelFive/>, document.getElementById('root'))}}>Level Five</button>
          <br/>
          <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Back</button>
        </div>
      )
  }
}

function mergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

//function for merging on left and right
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function resetSteps(){
  ReactDOM.render(<></>, document.getElementById("stepOne"));
  ReactDOM.render(<></>, document.getElementById("stepTwo"));
  ReactDOM.render(<></>, document.getElementById("stepThree"));
  ReactDOM.render(<></>, document.getElementById("stepFour"));
  ReactDOM.render(<></>, document.getElementById("stepFive"));
  ReactDOM.render(<></>, document.getElementById("stepSix"));
  ReactDOM.render(<></>, document.getElementById("stepSeven"));
  ReactDOM.render(<></>, document.getElementById("stepEight"));
  ReactDOM.render(<></>, document.getElementById("stepNine"));
  ReactDOM.render(<></>, document.getElementById("stepTen"));
  ReactDOM.render(<></>, document.getElementById("stepEleven"));
  ReactDOM.render(<></>, document.getElementById("stepTwelve"));
}

export {App, draggedItem, setDraggedItem, MergeSortMenu, ChooseAlgoMenu, HomePage, UserLoginMenu, UserLogin, mergeSort, resetSteps, emailEntered, getLives, deductLives, resetLives, changeLevel, getLevel}
