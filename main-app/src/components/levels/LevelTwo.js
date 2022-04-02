import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import { useState, useEffect } from "react";
import { mergeSort, resetSteps, emailEntered, changeLevel, getLevel, resetLives} from "../../App";
import $ from "jquery";
import ReactDOM from 'react-dom';
import LevelThree from "./LevelThree";
import axios from "axios";
let Timer = require('../Timer');


let score = 0;
function setScore(newScore){
    score = newScore;
}
function getScore(){
    return score;
}

function LevelTwo(){
    const[array, setArray] = useState(makeArray(10))
    let tempArray = [];
    let tempArray2 = [];
    let tempArray3 = [];
    let tempArray4 = []
    const [timerStart, setTimerStart] = useState(false);
    changeLevel(2)

    useEffect(()=>{
        $("#stepTwo").hide()
        $("#stepThree").hide()
        $("#stepFour").hide()
        $(document).ready(function(){
            for(let i = 41; i <= 100; i++){
                $(`#box${i}`).hide()
            }
        });
        
        $("#nextBtn").hide()
    }, []) 

    //Display timer
    if(timerStart == false){
        Timer.resetTimer();
        Timer.startTimer();
    
        setTimerStart(true);
    }

    let ip = require('../../axiosIP');

    function nextLevel(){
        //send to Backend code goes here
    
        axios({
          method: "POST",
          url: `${ip.getIP()}level-completion`,
          data: {
            completedLevel: getLevel(),
            email: emailEntered,
            completedTime: Timer.getTime()
          }
        })
      
        setScore(0);
        ReactDOM.render(<LevelThree />, document.getElementById('root'));
    
      }

    function setTempArray(changeToArray){
        tempArray = mergeSort(changeToArray);
    }
    function setTempArray2(changeToArray){
        tempArray2 = mergeSort(changeToArray);
    }
    function setTempArray3(changeToArray){
        tempArray3 = mergeSort(changeToArray);
    }
    function setTempArray4(changeToArray){
        tempArray4 = mergeSort(changeToArray);
    }

    return(
        <div>
        <div>
            <p id="timer" style={{float:"left", padding:"50px"}}>00:00:00</p>
            <p id="lives" style={{float:"right", padding:"50px"}}>Lives: 3</p>
        </div>
        <table style={{marginLeft:"35%"}}><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table><tbody>{ReactDOM.render(
            <tr>
            <DropBox key={"1"} divideVal={array[0]} withSteps={true} id="1"/>
            <DropBox key={"2"} divideVal={array[1]} withSteps={true} id="2"/>
            <DropBox key={"3"} divideVal={array[2]} withSteps={true} id="3"/>
            <DropBox key={"4"} divideVal={array[3]} withSteps={true} id="4"/>
            <DropBox key={"5"} divideVal={array[4]} withSteps={true} id="5"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"6"} divideVal={array[5]} withSteps={true} id="6"/>
            <DropBox key={"7"} divideVal={array[6]} withSteps={true} id="7"/>
            <DropBox key={"8"} divideVal={array[7]} withSteps={true} id="8"/>
            <DropBox key={"9"} divideVal={array[8]} withSteps={true} id="9"/>
            <DropBox key={"10"} divideVal={array[9]} withSteps={true} id="10"/>
            </tr>
        , document.getElementById("stepOne"))}
        {
        ReactDOM.render(<tr>
            &nbsp;
            &nbsp;
            <DropBox key={"11"} divideVal={array[0]} withSteps={true} id="11"/>
            <DropBox key={"12"} divideVal={array[1]} withSteps={true} id="12"/>
            <DropBox key={"13"} divideVal={array[2]} withSteps={true} id="13"/>
            &nbsp;
            &nbsp;
            <DropBox key={"14"} divideVal={array[3]} withSteps={true} id="14"/>
            <DropBox key={"15"} divideVal={array[4]} withSteps={true} id="15"/>
            &nbsp;
            &nbsp;
            &nbsp; 
            &nbsp;  
            <DropBox key={"16"} divideVal={array[5]} withSteps={true} id="16"/>
            <DropBox key={"17"} divideVal={array[6]} withSteps={true} id="17"/>
            <DropBox key={"18"} divideVal={array[7]} withSteps={true} id="18"/>
            &nbsp;
            &nbsp;
            <DropBox key={"19"} divideVal={array[8]} withSteps={true} id="19"/>
            <DropBox key={"20"} divideVal={array[9]} withSteps={true} id="20"/> 
            </tr>, document.getElementById("stepTwo"))
        }
        {
            ReactDOM.render(<tr>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DropBox key={"21"} divideVal={array[0]} withSteps={true} id="21"/>
            <DropBox key={"22"} divideVal={array[1]} withSteps={true} id="22"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"23"} divideVal={array[2]} withSteps={true} id="23"/> 
            &nbsp;
            &nbsp; 
            &nbsp;         
            <DropBox key={"24"} divideVal={array[3]} withSteps={true} id="24"/>
            &nbsp;
            &nbsp;
            <DropBox key={"25"} divideVal={array[4]} withSteps={true} id="25"/>
            &nbsp;
            &nbsp;
            &nbsp; 
            &nbsp; 
            <DropBox key={"26"} divideVal={array[5]} withSteps={true} id="26"/>
            <DropBox key={"27"} divideVal={array[6]} withSteps={true} id="27"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"28"} divideVal={array[7]} withSteps={true} id="28"/> 
            &nbsp;
            &nbsp;
            &nbsp; 
            <DropBox key={"29"} divideVal={array[8]} withSteps={true} id="29"/>
            &nbsp;
            &nbsp;
            <DropBox key={"30"} divideVal={array[9]} withSteps={true} id="30"/>
            </tr>, document.getElementById("stepThree"))
        }
        {
            ReactDOM.render(<tr>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DropBox key={"31"} divideVal={array[0]} withSteps={true} id="31"/>
            &nbsp;
            &nbsp;
            <DropBox key={"32"} divideVal={array[1]} withSteps={true} id="32"/>
            &nbsp;
            &nbsp; 
            &nbsp;
            <DropBox key={"33"} divideVal={array[2]} withSteps={true} id="33"/> 
            &nbsp;
            &nbsp;
            &nbsp; 
            <DropBox key={"34"} divideVal={array[3]} withSteps={true} id="34"/>
            &nbsp;
            &nbsp;
            <DropBox key={"35"} divideVal={array[4]} withSteps={true} id="35"/>
            &nbsp;
            &nbsp;
            &nbsp; 
            &nbsp; 
            <DropBox key={"36"} divideVal={array[5]} withSteps={true} id="36"/>
            &nbsp;
            &nbsp;
            <DropBox key={"37"} divideVal={array[6]} withSteps={true} id="37"/>
            &nbsp;
            &nbsp;
            <DropBox key={"38"} divideVal={array[7]} withSteps={true} id="38"/> 
            &nbsp;
            &nbsp;
            &nbsp; 
            <DropBox key={"39"} divideVal={array[8]} withSteps={true} id="39"/>
            &nbsp;
            &nbsp;
            <DropBox key={"40"} divideVal={array[9]} withSteps={true} id="40"/>
            </tr>, document.getElementById("stepFour"))
        }
        {setTempArray([array[0], array[1]])}
        {setTempArray2([array[5], array[6]])}
        {
            ReactDOM.render(<tr>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DropBox key={"41"} divideVal={tempArray[0]} withSteps={true} id="41"/>
            <DropBox key={"42"} divideVal={tempArray[1]} withSteps={true} id="42"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"43"} divideVal={array[2]} withSteps={true} id="43"/> 
            &nbsp;
            &nbsp;
            &nbsp;           
            <DropBox key={"44"} divideVal={array[3]} withSteps={true} id="44"/>
            &nbsp;
            &nbsp;
            <DropBox key={"45"} divideVal={array[4]} withSteps={true} id="45"/>
            &nbsp;
            &nbsp;
            &nbsp; 
            &nbsp; 
            <DropBox key={"46"} divideVal={tempArray2[0]} withSteps={true} id="46"/>
            <DropBox key={"47"} divideVal={tempArray2[1]} withSteps={true} id="47"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"48"} divideVal={array[7]} withSteps={true} id="48"/> 
            &nbsp;
            &nbsp;
            &nbsp; 
            <DropBox key={"49"} divideVal={array[8]} withSteps={true} id="49"/>
            &nbsp;
            &nbsp;
            <DropBox key={"50"} divideVal={array[9]} withSteps={true} id="50"/>
            </tr>, document.getElementById("stepFive"))
        }
        {setTempArray([array[0], array[1], array[2]])}
        {setTempArray2([array[3], array[4]])}
        {setTempArray3([array[5], array[6], array[7]])}
        {setTempArray4([array[8], array[9]])}
        {
        ReactDOM.render(<tr>
            &nbsp;
            &nbsp;
            <DropBox key={"51"} divideVal={tempArray[0]} withSteps={true} id="51"/>
            <DropBox key={"52"} divideVal={tempArray[1]} withSteps={true} id="52"/>
            <DropBox key={"53"} divideVal={tempArray[2]} withSteps={true} id="53"/>
            &nbsp;
            &nbsp;
            <DropBox key={"54"} divideVal={tempArray2[0]} withSteps={true} id="54"/>
            <DropBox key={"55"} divideVal={tempArray2[1]} withSteps={true} id="55"/>
            &nbsp;
            &nbsp; 
            &nbsp; 
            &nbsp; 
            <DropBox key={"56"} divideVal={tempArray3[0]} withSteps={true} id="56"/>
            <DropBox key={"57"} divideVal={tempArray3[1]} withSteps={true} id="57"/>
            <DropBox key={"58"} divideVal={tempArray3[2]} withSteps={true} id="58"/>
            &nbsp;
            &nbsp;
            <DropBox key={"59"} divideVal={tempArray4[0]} withSteps={true} id="59"/>
            <DropBox key={"60"} divideVal={tempArray4[1]} withSteps={true} id="60"/> 
            </tr>, document.getElementById("stepSix"))
        }
        {setTempArray([array[0], array[1], array[2], array[3], array[4]])}
        {setTempArray2([array[5], array[6], array[7], array[8], array[9]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"61"} divideVal={tempArray[0]} withSteps={true} id="61"/>
            <DropBox key={"62"} divideVal={tempArray[1]} withSteps={true} id="62"/>
            <DropBox key={"63"} divideVal={tempArray[2]} withSteps={true} id="63"/>
            <DropBox key={"64"} divideVal={tempArray[3]} withSteps={true} id="64"/>
            <DropBox key={"65"} divideVal={tempArray[4]} withSteps={true} id="65"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"66"} divideVal={tempArray2[0]} withSteps={true} id="66"/>
            <DropBox key={"67"} divideVal={tempArray2[1]} withSteps={true} id="67"/>
            <DropBox key={"68"} divideVal={tempArray2[2]} withSteps={true} id="68"/>
            <DropBox key={"69"} divideVal={tempArray2[3]} withSteps={true} id="69"/>
            <DropBox key={"70"} divideVal={tempArray2[4]} withSteps={true} id="70"/>
            </tr>
        , document.getElementById("stepSeven"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"71"} divideVal={tempArray[0]} withSteps={true} id="71"/>
            <DropBox key={"72"} divideVal={tempArray[1]} withSteps={true} id="72"/>
            <DropBox key={"73"} divideVal={tempArray[2]} withSteps={true} id="73"/>
            <DropBox key={"74"} divideVal={tempArray[3]} withSteps={true} id="74"/>
            <DropBox key={"75"} divideVal={tempArray[4]} withSteps={true} id="75"/> 
            <DropBox key={"76"} divideVal={tempArray[5]} withSteps={true} id="76"/>
            <DropBox key={"77"} divideVal={tempArray[6]} withSteps={true} id="77"/>
            <DropBox key={"78"} divideVal={tempArray[7]} withSteps={true} id="78"/>
            <DropBox key={"79"} divideVal={tempArray[8]} withSteps={true} id="79"/>
            <DropBox key={"80"} divideVal={tempArray[9]} withSteps={true} id="80"/>
            </tr>
        , document.getElementById("stepEight"))}
        </tbody>
        </table>
        <p id="feedback"></p>
        <p id="stepsTutorial">Split the Array as Evenly as Possible by dragging the numbers given in the corresponding empty box</p>
        <button id="nextBtn" onClick={()=> {resetSteps(); resetLives(); nextLevel(); }}>Next Level</button>
        </div>
    )
}



export {LevelTwo, setScore, getScore};