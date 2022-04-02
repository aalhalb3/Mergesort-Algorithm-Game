import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import FuilurePageMenu from "../FailurePageMenu";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { mergeSort, resetLives, resetSteps } from "../../App";
import $ from "jquery";
import { MergeSortMenu, emailEntered, changeLevel, getLevel } from "../../App";
import LevelFive from "./LevelFive";
import axios from "axios";

function LevelFour(){
    const[array, setArray] = useState(makeArray(20, 1, 50))
    let tempArray = [];
    let tempArray2 = [];
    let tempArray3 = [];
    let tempArray4 = [];
    let tempArray5 = [];
    let tempArray6 = [];
    let tempArray7 = [];
    let tempArray8 = [];
    changeLevel(4)

    useEffect(()=>{
        $("#stepTwo").hide()
        $("#stepThree").hide()
        $("#stepFour").hide()
        $("#stepFive").hide()
        $("#stepSix").hide()
        $("#stepSeven").hide()
        $("#stepEight").hide()
        $("#stepNine").hide()
        $("#stepTen").hide()
        $("#nextBtn").hide()
    }, []) 
    
    //Display timer
    const [timerStart, setTimerStart] = useState(false);
    let Timer = require('../Timer');

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
    
        ReactDOM.render(<LevelFive/>, document.getElementById("root"))
    
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
    function setTempArray5(changeToArray){
        tempArray5=mergeSort(changeToArray)
    }
    function setTempArray6(changeToArray){
        tempArray6=mergeSort(changeToArray)
    }
    function setTempArray7(changeToArray){
        tempArray7=mergeSort(changeToArray)
    }
    function setTempArray8(changeToArray){
        tempArray8=mergeSort(changeToArray)
    }
    return(
        <div>
        <div>
            <p id="timer" style={{float:"left", padding:"50px"}}>00:00:00</p>
            <p id="lives" style={{float:"right", padding:"50px"}}>Lives: 3</p>
        </div>
        <table style={{marginLeft:"25%"}}><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table><tbody>{ReactDOM.render(
            <tr class="center">
            <DropBox key={"1"} scoreMultiplier={2} divideVal={array[0]} id="1"/>
            <DropBox key={"2"} scoreMultiplier={2} divideVal={array[1]} id="2"/>
            <DropBox key={"3"} scoreMultiplier={2} divideVal={array[2]} id="3"/>
            <DropBox key={"4"} scoreMultiplier={2} divideVal={array[3]} id="4"/>
            <DropBox key={"5"} scoreMultiplier={2} divideVal={array[4]} id="5"/>
            <DropBox key={"6"} scoreMultiplier={2} divideVal={array[5]} id="6"/>
            <DropBox key={"7"} scoreMultiplier={2} divideVal={array[6]} id="7"/>
            <DropBox key={"8"} scoreMultiplier={2} divideVal={array[7]} id="8"/>
            <DropBox key={"9"} scoreMultiplier={2} divideVal={array[8]} id="9"/>
            <DropBox key={"10"} scoreMultiplier={2} divideVal={array[9]} id="10"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"11"} scoreMultiplier={2} divideVal={array[10]} id="11"/>
            <DropBox key={"12"} scoreMultiplier={2} divideVal={array[11]} id="12"/>
            <DropBox key={"13"} scoreMultiplier={2} divideVal={array[12]} id="13"/>
            <DropBox key={"14"} scoreMultiplier={2} divideVal={array[13]} id="14"/>
            <DropBox key={"15"} scoreMultiplier={2} divideVal={array[14]} id="15"/>
            <DropBox key={"16"} scoreMultiplier={2} divideVal={array[15]} id="16"/>
            <DropBox key={"17"} scoreMultiplier={2} divideVal={array[16]} id="17"/>
            <DropBox key={"18"} scoreMultiplier={2} divideVal={array[17]} id="18"/>
            <DropBox key={"19"} scoreMultiplier={2} divideVal={array[18]} id="19"/>
            <DropBox key={"20"} scoreMultiplier={2} divideVal={array[19]} id="20"/>
            </tr>
        , document.getElementById("stepOne"))}
        {
        ReactDOM.render(<tr>
            <DropBox key={"21"} scoreMultiplier={2} divideVal={array[0]} id="21"/>
            <DropBox key={"22"} scoreMultiplier={2} divideVal={array[1]} id="22"/>
            <DropBox key={"23"} scoreMultiplier={2} divideVal={array[2]} id="23"/>
            <DropBox key={"24"} scoreMultiplier={2} divideVal={array[3]} id="24"/>
            <DropBox key={"25"} scoreMultiplier={2} divideVal={array[4]} id="25"/>
            &nbsp;
            &nbsp;
            <DropBox key={"26"} scoreMultiplier={2} divideVal={array[5]} id="26"/>
            <DropBox key={"27"} scoreMultiplier={2} divideVal={array[6]} id="27"/>
            <DropBox key={"28"} scoreMultiplier={2} divideVal={array[7]} id="28"/>
            <DropBox key={"29"} scoreMultiplier={2} divideVal={array[8]} id="29"/>
            <DropBox key={"30"} scoreMultiplier={2} divideVal={array[9]} id="30"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"31"} scoreMultiplier={2} divideVal={array[10]} id="31"/>
            <DropBox key={"32"} scoreMultiplier={2} divideVal={array[11]} id="32"/>
            <DropBox key={"33"} scoreMultiplier={2} divideVal={array[12]} id="33"/>
            <DropBox key={"34"} scoreMultiplier={2} divideVal={array[13]} id="34"/>
            <DropBox key={"35"} scoreMultiplier={2} divideVal={array[14]} id="35"/>
            &nbsp;
            &nbsp;
            <DropBox key={"36"} scoreMultiplier={2} divideVal={array[15]} id="36"/>
            <DropBox key={"37"} scoreMultiplier={2} divideVal={array[16]} id="37"/> 
            <DropBox key={"38"} scoreMultiplier={2} divideVal={array[17]} id="38"/>
            <DropBox key={"39"} scoreMultiplier={2} divideVal={array[18]} id="39"/>
            <DropBox key={"40"} scoreMultiplier={2} divideVal={array[19]} id="40"/>
            </tr>, document.getElementById("stepTwo"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"41"} scoreMultiplier={2} divideVal={array[0]} id="41"/>
            <DropBox key={"42"} scoreMultiplier={2} divideVal={array[1]} id="42"/>
            <DropBox key={"43"} scoreMultiplier={2} divideVal={array[2]} id="43"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"44"} scoreMultiplier={2} divideVal={array[3]} id="44"/>
            <DropBox key={"45"} scoreMultiplier={2} divideVal={array[4]} id="45"/> 
            &nbsp;
            &nbsp;         
            <DropBox key={"46"} scoreMultiplier={2} divideVal={array[5]} id="46"/>
            <DropBox key={"47"} scoreMultiplier={2} divideVal={array[6]} id="47"/>
            <DropBox key={"48"} scoreMultiplier={2} divideVal={array[7]} id="48"/>
            &nbsp;
            &nbsp;
            <DropBox key={"49"} scoreMultiplier={2} divideVal={array[8]} id="49"/>
            <DropBox key={"50"} scoreMultiplier={2} divideVal={array[9]} id="50"/>
            &nbsp;
            &nbsp;
            <DropBox key={"51"} scoreMultiplier={2} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} scoreMultiplier={2} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} scoreMultiplier={2} divideVal={array[12]} id="53"/>
            &nbsp;
            &nbsp;
            <DropBox key={"54"} scoreMultiplier={2} divideVal={array[13]} id="54"/> 
            <DropBox key={"55"} scoreMultiplier={2} divideVal={array[14]} id="55"/>
            &nbsp;
            &nbsp;
            <DropBox key={"56"} scoreMultiplier={2} divideVal={array[15]} id="56"/>
            <DropBox key={"57"} scoreMultiplier={2} divideVal={array[16]} id="57"/>
            <DropBox key={"58"} scoreMultiplier={2} divideVal={array[17]} id="58"/>
            &nbsp;
            &nbsp;
            <DropBox key={"59"} scoreMultiplier={2} divideVal={array[18]} id="59"/>
            <DropBox key={"60"} scoreMultiplier={2} divideVal={array[19]} id="60"/>
            </tr>, document.getElementById("stepThree"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"61"} scoreMultiplier={2} divideVal={array[0]} id="61"/>
            <DropBox key={"62"} scoreMultiplier={2} divideVal={array[1]} id="62"/>
            &nbsp;
            &nbsp;
            <DropBox key={"63"} scoreMultiplier={2} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"64"} scoreMultiplier={2} divideVal={array[3]} id="64"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"65"} scoreMultiplier={2} divideVal={array[4]} id="65"/>
            &nbsp;
            &nbsp;
            <DropBox key={"66"} scoreMultiplier={2} divideVal={array[5]} id="66"/>
            <DropBox key={"67"} scoreMultiplier={2} divideVal={array[6]} id="67"/>
            &nbsp;
            &nbsp;
            <DropBox key={"68"} scoreMultiplier={2} divideVal={array[7]} id="68"/>
            &nbsp;
            &nbsp;
            <DropBox key={"69"} scoreMultiplier={2} divideVal={array[8]} id="69"/>
            &nbsp;
            &nbsp;
            <DropBox key={"70"} scoreMultiplier={2} divideVal={array[9]} id="70"/>
            &nbsp;
            &nbsp;
            <DropBox key={"71"} scoreMultiplier={2} divideVal={array[10]} id="71"/> 
            <DropBox key={"72"} scoreMultiplier={2} divideVal={array[11]} id="72"/>
            &nbsp;
            &nbsp;
            <DropBox key={"73"} scoreMultiplier={2} divideVal={array[12]} id="73"/>
            &nbsp;
            &nbsp;
            <DropBox key={"74"} scoreMultiplier={2} divideVal={array[13]} id="74"/>
            &nbsp;
            &nbsp;
            <DropBox key={"75"} scoreMultiplier={2} divideVal={array[14]} id="75"/>
            &nbsp;
            &nbsp;
            <DropBox key={"76"} scoreMultiplier={2} divideVal={array[15]} id="76"/>
            <DropBox key={"77"} scoreMultiplier={2} divideVal={array[16]} id="77"/>
            &nbsp;
            &nbsp;
            <DropBox key={"78"} scoreMultiplier={2} divideVal={array[17]} id="78"/>
            &nbsp;
            &nbsp;
            <DropBox key={"79"} scoreMultiplier={2} divideVal={array[18]} id="79"/>
            &nbsp;
            &nbsp;
            <DropBox key={"80"} scoreMultiplier={2} divideVal={array[19]} id="80"/>
            </tr>, document.getElementById("stepFour"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"81"} scoreMultiplier={2} divideVal={array[0]} id="81"/>
            &nbsp;
            &nbsp;
            <DropBox key={"82"} scoreMultiplier={2} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"83"} scoreMultiplier={2} divideVal={array[2]} id="83"/>
            &nbsp;
            &nbsp;
            <DropBox key={"84"} scoreMultiplier={2} divideVal={array[3]} id="84"/>
            &nbsp;
            &nbsp;
            <DropBox key={"85"} scoreMultiplier={2} divideVal={array[4]} id="85"/>
            &nbsp;
            &nbsp;
            <DropBox key={"86"} scoreMultiplier={2} divideVal={array[5]} id="86"/>
            &nbsp;
            &nbsp;
            <DropBox key={"87"} scoreMultiplier={2} divideVal={array[6]} id="87"/>
            &nbsp;
            &nbsp;
            <DropBox key={"88"} scoreMultiplier={2} divideVal={array[7]} id="88"/>
            &nbsp;
            &nbsp;
            <DropBox key={"89"} scoreMultiplier={2} divideVal={array[8]} id="89"/>
            &nbsp;
            &nbsp;
            <DropBox key={"90"} scoreMultiplier={2} divideVal={array[9]} id="90"/>
            &nbsp;
            &nbsp;
            <DropBox key={"91"} scoreMultiplier={2} divideVal={array[10]} id="91"/>
            &nbsp;
            &nbsp;
            <DropBox key={"92"} scoreMultiplier={2} divideVal={array[11]} id="92"/>
            &nbsp;
            &nbsp;
            <DropBox key={"93"} scoreMultiplier={2} divideVal={array[12]} id="93"/>
            &nbsp;
            &nbsp;
            <DropBox key={"94"} scoreMultiplier={2} divideVal={array[13]} id="94"/>
            &nbsp;
            &nbsp;
            <DropBox key={"95"} scoreMultiplier={2} divideVal={array[14]} id="95"/>
            &nbsp;
            &nbsp;
            <DropBox key={"96"} scoreMultiplier={2} divideVal={array[15]} id="96"/>
            &nbsp;
            &nbsp;
            <DropBox key={"97"} scoreMultiplier={2} divideVal={array[16]} id="97"/>
            &nbsp;
            &nbsp;
            <DropBox key={"98"} scoreMultiplier={2} divideVal={array[17]} id="98"/>
            &nbsp;
            &nbsp;
            <DropBox key={"99"} scoreMultiplier={2} divideVal={array[18]} id="99"/>
            &nbsp;
            &nbsp;
            <DropBox key={"100"} scoreMultiplier={2} divideVal={array[19]} id="100"/>
            </tr>, document.getElementById("stepFive"))
        }
        {setTempArray([array[0], array[1]])}
        {setTempArray2([array[5], array[6]])}
        {setTempArray3([array[10], array[11]])}
        {setTempArray4([array[15], array[16]])}
        {
            ReactDOM.render(<tr>
            <DropBox key={"101"} scoreMultiplier={2} divideVal={tempArray[0]} id="101"/>
            <DropBox key={"102"} scoreMultiplier={2} divideVal={tempArray[1]} id="102"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"103"} scoreMultiplier={2} divideVal={array[2]} id="103"/> 
            &nbsp;
            &nbsp;          
            <DropBox key={"104"} scoreMultiplier={2} divideVal={array[3]} id="104"/>
            &nbsp;
            &nbsp;
            <DropBox key={"105"} scoreMultiplier={2} divideVal={array[4]} id="105"/>
            &nbsp;
            &nbsp;
            <DropBox key={"106"} scoreMultiplier={2} divideVal={tempArray2[0]} id="106"/>
            <DropBox key={"107"} scoreMultiplier={2} divideVal={tempArray2[1]} id="107"/>
            &nbsp;
            &nbsp;
            <DropBox key={"108"} scoreMultiplier={2} divideVal={array[7]} id="108"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"109"} scoreMultiplier={2} divideVal={array[8]} id="109"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"110"} scoreMultiplier={2} divideVal={array[9]} id="110"/>
            &nbsp;
            &nbsp;
            <DropBox key={"111"} scoreMultiplier={2} divideVal={tempArray3[0]} id="111"/>
            <DropBox key={"112"} scoreMultiplier={2} divideVal={tempArray3[1]} id="112"/>
            &nbsp;
            &nbsp;
            <DropBox key={"113"} scoreMultiplier={2} divideVal={array[12]} id="113"/>
            &nbsp;
            &nbsp;
            <DropBox key={"114"} scoreMultiplier={2} divideVal={array[13]} id="114"/>
            &nbsp;
            &nbsp;
            <DropBox key={"115"} scoreMultiplier={2} divideVal={array[14]} id="115"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} scoreMultiplier={2} divideVal={tempArray4[0]} id="116"/>
            <DropBox key={"117"} scoreMultiplier={2} divideVal={tempArray4[1]} id="117"/>
            &nbsp;
            &nbsp;
            <DropBox key={"118"} scoreMultiplier={2} divideVal={array[17]} id="118"/>
            &nbsp;
            &nbsp;
            <DropBox key={"119"} scoreMultiplier={2} divideVal={array[18]} id="119"/>
            &nbsp;
            &nbsp;
            <DropBox key={"120"} scoreMultiplier={2} divideVal={array[19]} id="120"/>
            </tr>, document.getElementById("stepSix"))
        }
        {setTempArray([array[0], array[1], array[2]])}
        {setTempArray2([array[3], array[4]])}
        {setTempArray3([array[5], array[6], array[7]])}
        {setTempArray4([array[8], array[9]])}
        {setTempArray5([array[10], array[11], array[12]])}
        {setTempArray6([array[13], array[14]])}
        {setTempArray7([array[15], array[16], array[17]])}
        {setTempArray8([array[18], array[19]])}
        {
        ReactDOM.render(<tr>
            <DropBox key={"121"} scoreMultiplier={2} divideVal={tempArray[0]} id="121"/>
            <DropBox key={"122"} scoreMultiplier={2} divideVal={tempArray[1]} id="122"/>
            <DropBox key={"123"} scoreMultiplier={2} divideVal={tempArray[2]} id="123"/>
            &nbsp;
            &nbsp;
            <DropBox key={"124"} scoreMultiplier={2} divideVal={tempArray2[0]} id="124"/>
            <DropBox key={"125"} scoreMultiplier={2} divideVal={tempArray2[1]} id="125"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} scoreMultiplier={2} divideVal={tempArray3[0]} id="126"/>
            <DropBox key={"127"} scoreMultiplier={2} divideVal={tempArray3[1]} id="127"/>
            <DropBox key={"128"} scoreMultiplier={2} divideVal={tempArray3[2]} id="128"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"129"} scoreMultiplier={2} divideVal={tempArray4[0]} id="129"/>
            <DropBox key={"130"} scoreMultiplier={2} divideVal={tempArray4[1]} id="130"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"131"} scoreMultiplier={2} divideVal={tempArray5[0]} id="131"/>
            <DropBox key={"132"} scoreMultiplier={2} divideVal={tempArray5[1]} id="132"/>
            <DropBox key={"133"} scoreMultiplier={2} divideVal={tempArray5[2]} id="133"/>
            &nbsp;
            &nbsp;
            <DropBox key={"134"} scoreMultiplier={2} divideVal={tempArray6[0]} id="134"/>
            <DropBox key={"135"} scoreMultiplier={2} divideVal={tempArray6[1]} id="135"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} scoreMultiplier={2} divideVal={tempArray7[0]} id="136"/>
            <DropBox key={"137"} scoreMultiplier={2} divideVal={tempArray7[1]} id="137"/>
            <DropBox key={"138"} scoreMultiplier={2} divideVal={tempArray7[2]} id="138"/>
            &nbsp;
            &nbsp;
            <DropBox key={"139"} scoreMultiplier={2} divideVal={tempArray8[0]} id="139"/>
            <DropBox key={"140"} scoreMultiplier={2} divideVal={tempArray8[1]} id="140"/>
            </tr>, document.getElementById("stepSeven"))
        }
        {setTempArray([array[0], array[1], array[2], array[3], array[4]])}
        {setTempArray2([array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray3([array[10], array[11], array[12], array[13], array[14]])}
        {setTempArray4([array[15], array[16], array[17], array[18], array[19]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"141"} scoreMultiplier={2} divideVal={tempArray[0]} id="141"/>
            <DropBox key={"142"} scoreMultiplier={2} divideVal={tempArray[1]} id="142"/>
            <DropBox key={"143"} scoreMultiplier={2} divideVal={tempArray[2]} id="143"/>
            <DropBox key={"144"} scoreMultiplier={2} divideVal={tempArray[3]} id="144"/>
            <DropBox key={"145"} scoreMultiplier={2} divideVal={tempArray[4]} id="145"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"146"} scoreMultiplier={2} divideVal={tempArray2[0]} id="146"/>
            <DropBox key={"147"} scoreMultiplier={2} divideVal={tempArray2[1]} id="147"/>
            <DropBox key={"148"} scoreMultiplier={2} divideVal={tempArray2[2]} id="148"/>
            <DropBox key={"149"} scoreMultiplier={2} divideVal={tempArray2[3]} id="149"/>
            <DropBox key={"150"} scoreMultiplier={2} divideVal={tempArray2[4]} id="150"/>
            &nbsp;
            &nbsp;
            <DropBox key={"151"} scoreMultiplier={2} divideVal={tempArray3[0]} id="151"/>
            <DropBox key={"152"} scoreMultiplier={2} divideVal={tempArray3[1]} id="152"/>
            <DropBox key={"153"} scoreMultiplier={2} divideVal={tempArray3[2]} id="153"/>
            <DropBox key={"154"} scoreMultiplier={2} divideVal={tempArray3[3]} id="154"/>
            <DropBox key={"155"} scoreMultiplier={2} divideVal={tempArray3[4]} id="155"/>
            &nbsp;
            &nbsp;
            <DropBox key={"156"} scoreMultiplier={2} divideVal={tempArray4[0]} id="156"/>
            <DropBox key={"157"} scoreMultiplier={2} divideVal={tempArray4[1]} id="157"/>
            <DropBox key={"158"} scoreMultiplier={2} divideVal={tempArray4[2]} id="158"/>
            <DropBox key={"159"} scoreMultiplier={2} divideVal={tempArray4[3]} id="159"/>
            <DropBox key={"160"} scoreMultiplier={2} divideVal={tempArray4[4]} id="160"/>
            </tr>
        , document.getElementById("stepEight"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray2([array[10], array[11], array[12], array[13], array[14], array[15], array[16], array[17], array[18], array[19]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"161"} scoreMultiplier={2} divideVal={tempArray[0]} id="161"/>
            <DropBox key={"162"} scoreMultiplier={2} divideVal={tempArray[1]} id="162"/>
            <DropBox key={"163"} scoreMultiplier={2} divideVal={tempArray[2]} id="163"/>
            <DropBox key={"164"} scoreMultiplier={2} divideVal={tempArray[3]} id="164"/>
            <DropBox key={"165"} scoreMultiplier={2} divideVal={tempArray[4]} id="165"/> 
            <DropBox key={"166"} scoreMultiplier={2} divideVal={tempArray[5]} id="166"/>
            <DropBox key={"167"} scoreMultiplier={2} divideVal={tempArray[6]} id="167"/>
            <DropBox key={"168"} scoreMultiplier={2} divideVal={tempArray[7]} id="168"/>
            <DropBox key={"169"} scoreMultiplier={2} divideVal={tempArray[8]} id="169"/>
            <DropBox key={"170"} scoreMultiplier={2} divideVal={tempArray[9]} id="170"/>
            &nbsp;
            &nbsp;
            <DropBox key={"171"} scoreMultiplier={2} divideVal={tempArray2[0]} id="171"/>
            <DropBox key={"172"} scoreMultiplier={2} divideVal={tempArray2[1]} id="172"/>
            <DropBox key={"173"} scoreMultiplier={2} divideVal={tempArray2[2]} id="173"/>
            <DropBox key={"174"} scoreMultiplier={2} divideVal={tempArray2[3]} id="174"/>
            <DropBox key={"175"} scoreMultiplier={2} divideVal={tempArray2[4]} id="175"/>
            <DropBox key={"176"} scoreMultiplier={2} divideVal={tempArray2[5]} id="176"/>
            <DropBox key={"177"} scoreMultiplier={2} divideVal={tempArray2[6]} id="177"/>
            <DropBox key={"178"} scoreMultiplier={2} divideVal={tempArray2[7]} id="178"/>
            <DropBox key={"179"} scoreMultiplier={2} divideVal={tempArray2[8]} id="179"/>
            <DropBox key={"180"} scoreMultiplier={2} divideVal={tempArray2[9]} id="180"/>
            </tr>
        , document.getElementById("stepNine"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"181"} scoreMultiplier={2} divideVal={tempArray[0]} id="181"/>
            <DropBox key={"182"} scoreMultiplier={2} divideVal={tempArray[1]} id="182"/>
            <DropBox key={"183"} scoreMultiplier={2} divideVal={tempArray[2]} id="183"/>
            <DropBox key={"184"} scoreMultiplier={2} divideVal={tempArray[3]} id="184"/>
            <DropBox key={"185"} scoreMultiplier={2} divideVal={tempArray[4]} id="185"/> 
            <DropBox key={"186"} scoreMultiplier={2} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} scoreMultiplier={2} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} scoreMultiplier={2} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} scoreMultiplier={2} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} scoreMultiplier={2} divideVal={tempArray[9]} id="190"/>
            <DropBox key={"191"} scoreMultiplier={2} divideVal={tempArray[10]} id="191"/>
            <DropBox key={"192"} scoreMultiplier={2} divideVal={tempArray[11]} id="192"/>
            <DropBox key={"193"} scoreMultiplier={2} divideVal={tempArray[12]} id="193"/>
            <DropBox key={"194"} scoreMultiplier={2} divideVal={tempArray[13]} id="194"/>
            <DropBox key={"195"} scoreMultiplier={2} divideVal={tempArray[14]} id="195"/>
            <DropBox key={"196"} scoreMultiplier={2} divideVal={tempArray[15]} id="196"/>
            <DropBox key={"197"} scoreMultiplier={2} divideVal={tempArray[16]} id="197"/>
            <DropBox key={"198"} scoreMultiplier={2} divideVal={tempArray[17]} id="198"/>
            <DropBox key={"199"} scoreMultiplier={2} divideVal={tempArray[18]} id="199"/>
            <DropBox key={"200"} scoreMultiplier={2} divideVal={tempArray[19]} id="200"/>
            </tr>
        , document.getElementById("stepTen"))}
        </tbody>
        </table>
        <p id="feedback"></p>
        <button id="nextBtn" onClick={() => {resetSteps(); resetLives(); nextLevel();}}>Next Level</button>
        </div>
    )
}

export default LevelFour;