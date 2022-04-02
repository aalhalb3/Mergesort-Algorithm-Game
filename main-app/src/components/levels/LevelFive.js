import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import FuilurePageMenu from "../FailurePageMenu";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { mergeSort, resetLives, resetSteps } from "../../App";
import $ from "jquery";
import { MergeSortMenu, HomePage, emailEntered, changeLevel, getLevel  } from "../../App";
import axios from "axios";

function LevelFive(){
    const currentLevel = 5;
    changeLevel(5);
    
    const[array, setArray] = useState(makeArray(50, 1, 100))
    let tempArray = [];
    let tempArray2 = [];
    let tempArray3 = [];
    let tempArray4 = [];
    let tempArray5 = [];
    let tempArray6 = [];
    let tempArray7 = [];
    let tempArray8 = [];
    let tempArray9 = [];
    let tempArray10 = [];
    let tempArray11 = [];
    let tempArray12 = [];
    let tempArray13 = [];
    let tempArray14 = [];
    let tempArray15 = [];
    let tempArray16 = [];
    let tempArray17 = [];
    let tempArray18 = [];
    let tempArray19 = [];
    let tempArray20 = [];

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
        $("#stepEleven").hide()
        $("#stepTwelve").hide()
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
    
        ReactDOM.render(<HomePage/>, document.getElementById("root"))
    
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
    function setTempArray9(changeToArray){
        tempArray9=mergeSort(changeToArray)
    }
    function setTempArray10(changeToArray){
        tempArray10=mergeSort(changeToArray)
    }
    function setTempArray11(changeToArray){
        tempArray11=mergeSort(changeToArray)
    }
    function setTempArray12(changeToArray){
        tempArray12=mergeSort(changeToArray)
    }
    function setTempArray13(changeToArray){
        tempArray13=mergeSort(changeToArray)
    }
    function setTempArray14(changeToArray){
        tempArray14=mergeSort(changeToArray)
    }
    function setTempArray15(changeToArray){
        tempArray15=mergeSort(changeToArray)
    }
    function setTempArray16(changeToArray){
        tempArray16=mergeSort(changeToArray)
    }
    function setTempArray17(changeToArray){
        tempArray17=mergeSort(changeToArray)
    }
    function setTempArray18(changeToArray){
        tempArray18=mergeSort(changeToArray)
    }
    function setTempArray19(changeToArray){
        tempArray19=mergeSort(changeToArray)
    }
    function setTempArray20(changeToArray){
        tempArray20=mergeSort(changeToArray)
    }
    /*for(let i=0; i<array.length; i++){
        <DropBox key={"i+1"} scoreMultiplier={5} divideVal={array[i]} id="i+1"/>
    }*/
    return(
        <div>
        <span>
            <p id="timer" style={{marginRight:"95%"}}></p>
            <p id="lives" style={{marginRight:"95%"}} >Lives: 3</p>
        </span>
        <table style={{marginLeft:"32%"}}><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table><tbody>{ReactDOM.render(
            <tr>
            <script></script>
            <DropBox key={"1"} scoreMultiplier={5} divideVal={array[0]} id="1"/>
            <DropBox key={"2"} scoreMultiplier={5} divideVal={array[1]} id="2"/>
            <DropBox key={"3"} scoreMultiplier={5} divideVal={array[2]} id="3"/>
            <DropBox key={"4"} scoreMultiplier={5} divideVal={array[3]} id="4"/>
            <DropBox key={"5"} scoreMultiplier={5} divideVal={array[4]} id="5"/>
            <DropBox key={"6"} scoreMultiplier={5} divideVal={array[5]} id="6"/>
            <DropBox key={"7"} scoreMultiplier={5} divideVal={array[6]} id="7"/>
            <DropBox key={"8"} scoreMultiplier={5} divideVal={array[7]} id="8"/>
            <DropBox key={"9"} scoreMultiplier={5} divideVal={array[8]} id="9"/>
            <DropBox key={"10"} scoreMultiplier={5} divideVal={array[9]} id="10"/>
            <DropBox key={"11"} scoreMultiplier={5} divideVal={array[10]} id="11"/>
            <DropBox key={"12"} scoreMultiplier={5} divideVal={array[11]} id="12"/>
            <DropBox key={"13"} scoreMultiplier={5} divideVal={array[12]} id="13"/>
            <DropBox key={"14"} scoreMultiplier={5} divideVal={array[13]} id="14"/>
            <DropBox key={"15"} scoreMultiplier={5} divideVal={array[14]} id="15"/>
            <DropBox key={"16"} scoreMultiplier={5} divideVal={array[15]} id="16"/>
            <DropBox key={"17"} scoreMultiplier={5} divideVal={array[16]} id="17"/>
            <DropBox key={"18"} scoreMultiplier={5} divideVal={array[17]} id="18"/>
            <DropBox key={"19"} scoreMultiplier={5} divideVal={array[18]} id="19"/>
            <DropBox key={"20"} scoreMultiplier={5} divideVal={array[19]} id="20"/>
            <DropBox key={"21"} scoreMultiplier={5} divideVal={array[20]} id="21"/>
            <DropBox key={"22"} scoreMultiplier={5} divideVal={array[21]} id="22"/>
            <DropBox key={"23"} scoreMultiplier={5} divideVal={array[22]} id="23"/>
            <DropBox key={"24"} scoreMultiplier={5} divideVal={array[23]} id="24"/>
            <DropBox key={"25"} scoreMultiplier={5} divideVal={array[24]} id="25"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"26"} scoreMultiplier={5} divideVal={array[25]} id="26"/>
            <DropBox key={"27"} scoreMultiplier={5} divideVal={array[26]} id="27"/>
            <DropBox key={"28"} scoreMultiplier={5} divideVal={array[27]} id="28"/>
            <DropBox key={"29"} scoreMultiplier={5} divideVal={array[28]} id="29"/>
            <DropBox key={"30"} scoreMultiplier={5} divideVal={array[29]} id="30"/>
            <DropBox key={"31"} scoreMultiplier={5} divideVal={array[30]} id="31"/>
            <DropBox key={"32"} scoreMultiplier={5} divideVal={array[31]} id="32"/>
            <DropBox key={"33"} scoreMultiplier={5} divideVal={array[32]} id="33"/>
            <DropBox key={"34"} scoreMultiplier={5} divideVal={array[33]} id="34"/>
            <DropBox key={"35"} scoreMultiplier={5} divideVal={array[34]} id="35"/>
            <DropBox key={"36"} scoreMultiplier={5} divideVal={array[35]} id="36"/>
            <DropBox key={"37"} scoreMultiplier={5} divideVal={array[36]} id="37"/>
            <DropBox key={"38"} scoreMultiplier={5} divideVal={array[37]} id="38"/>
            <DropBox key={"39"} scoreMultiplier={5} divideVal={array[38]} id="39"/>
            <DropBox key={"40"} scoreMultiplier={5} divideVal={array[39]} id="40"/>
            <DropBox key={"41"} scoreMultiplier={5} divideVal={array[40]} id="41"/>
            <DropBox key={"42"} scoreMultiplier={5} divideVal={array[41]} id="42"/>
            <DropBox key={"43"} scoreMultiplier={5} divideVal={array[42]} id="43"/>
            <DropBox key={"44"} scoreMultiplier={5} divideVal={array[43]} id="44"/>
            <DropBox key={"45"} scoreMultiplier={5} divideVal={array[44]} id="45"/>
            <DropBox key={"46"} scoreMultiplier={5} divideVal={array[45]} id="46"/>
            <DropBox key={"47"} scoreMultiplier={5} divideVal={array[46]} id="47"/>
            <DropBox key={"48"} scoreMultiplier={5} divideVal={array[47]} id="48"/>
            <DropBox key={"49"} scoreMultiplier={5} divideVal={array[48]} id="49"/>
            <DropBox key={"50"} scoreMultiplier={5} divideVal={array[49]} id="50"/>
            </tr>
        , document.getElementById("stepOne"))}
        {
        ReactDOM.render(<tr>
            <DropBox key={"51"} scoreMultiplier={5} divideVal={array[0]} id="51"/>
            <DropBox key={"52"} scoreMultiplier={5} divideVal={array[1]} id="52"/>
            <DropBox key={"53"} scoreMultiplier={5} divideVal={array[2]} id="53"/>
            <DropBox key={"54"} scoreMultiplier={5} divideVal={array[3]} id="54"/>
            <DropBox key={"55"} scoreMultiplier={5} divideVal={array[4]} id="55"/>
            <DropBox key={"56"} scoreMultiplier={5} divideVal={array[5]} id="56"/>
            <DropBox key={"57"} scoreMultiplier={5} divideVal={array[6]} id="57"/>
            <DropBox key={"58"} scoreMultiplier={5} divideVal={array[7]} id="58"/>
            <DropBox key={"59"} scoreMultiplier={5} divideVal={array[8]} id="59"/>
            <DropBox key={"60"} scoreMultiplier={5} divideVal={array[9]} id="60"/>
            &nbsp;
            &nbsp;
            <DropBox key={"61"} scoreMultiplier={5} divideVal={array[10]} id="61"/>
            <DropBox key={"62"} scoreMultiplier={5} divideVal={array[11]} id="62"/>
            <DropBox key={"63"} scoreMultiplier={5} divideVal={array[12]} id="63"/>
            <DropBox key={"64"} scoreMultiplier={5} divideVal={array[13]} id="64"/>
            <DropBox key={"65"} scoreMultiplier={5} divideVal={array[14]} id="65"/>
            <DropBox key={"66"} scoreMultiplier={5} divideVal={array[15]} id="66"/>
            <DropBox key={"67"} scoreMultiplier={5} divideVal={array[16]} id="67"/>
            <DropBox key={"68"} scoreMultiplier={5} divideVal={array[17]} id="68"/>
            <DropBox key={"69"} scoreMultiplier={5} divideVal={array[18]} id="69"/>
            <DropBox key={"70"} scoreMultiplier={5} divideVal={array[19]} id="70"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"71"} scoreMultiplier={5} divideVal={array[20]} id="71"/>
            <DropBox key={"72"} scoreMultiplier={5} divideVal={array[21]} id="72"/>
            <DropBox key={"73"} scoreMultiplier={5} divideVal={array[22]} id="73"/>
            <DropBox key={"74"} scoreMultiplier={5} divideVal={array[23]} id="74"/>
            <DropBox key={"75"} scoreMultiplier={5} divideVal={array[24]} id="75"/>
            <DropBox key={"76"} scoreMultiplier={5} divideVal={array[25]} id="76"/>
            <DropBox key={"77"} scoreMultiplier={5} divideVal={array[26]} id="77"/>
            <DropBox key={"78"} scoreMultiplier={5} divideVal={array[27]} id="78"/>
            <DropBox key={"79"} scoreMultiplier={5} divideVal={array[28]} id="79"/>
            <DropBox key={"80"} scoreMultiplier={5} divideVal={array[29]} id="80"/>
            &nbsp;
            &nbsp;
            <DropBox key={"81"} scoreMultiplier={5} divideVal={array[30]} id="81"/>
            <DropBox key={"82"} scoreMultiplier={5} divideVal={array[31]} id="82"/> 
            <DropBox key={"83"} scoreMultiplier={5} divideVal={array[32]} id="83"/>
            <DropBox key={"84"} scoreMultiplier={5} divideVal={array[33]} id="84"/>
            <DropBox key={"85"} scoreMultiplier={5} divideVal={array[34]} id="85"/>
            <DropBox key={"86"} scoreMultiplier={5} divideVal={array[35]} id="86"/>
            <DropBox key={"87"} scoreMultiplier={5} divideVal={array[36]} id="87"/>
            <DropBox key={"88"} scoreMultiplier={5} divideVal={array[37]} id="88"/>
            <DropBox key={"89"} scoreMultiplier={5} divideVal={array[38]} id="89"/>
            <DropBox key={"90"} scoreMultiplier={5} divideVal={array[39]} id="90"/>
            &nbsp;
            &nbsp;
            <DropBox key={"91"} scoreMultiplier={5} divideVal={array[40]} id="91"/>
            <DropBox key={"92"} scoreMultiplier={5} divideVal={array[41]} id="92"/> 
            <DropBox key={"93"} scoreMultiplier={5} divideVal={array[42]} id="93"/>
            <DropBox key={"94"} scoreMultiplier={5} divideVal={array[43]} id="94"/>
            <DropBox key={"95"} scoreMultiplier={5} divideVal={array[44]} id="95"/>
            <DropBox key={"96"} scoreMultiplier={5} divideVal={array[45]} id="96"/>
            <DropBox key={"97"} scoreMultiplier={5} divideVal={array[46]} id="97"/>
            <DropBox key={"98"} scoreMultiplier={5} divideVal={array[47]} id="98"/>
            <DropBox key={"99"} scoreMultiplier={5} divideVal={array[48]} id="99"/>
            <DropBox key={"100"} scoreMultiplier={5} divideVal={array[49]} id="100"/>
            </tr>, document.getElementById("stepTwo"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"101"} scoreMultiplier={5} divideVal={array[0]} id="101"/>
            <DropBox key={"102"} scoreMultiplier={5} divideVal={array[1]} id="102"/>
            <DropBox key={"103"} scoreMultiplier={5} divideVal={array[2]} id="103"/>
            <DropBox key={"104"} scoreMultiplier={5} divideVal={array[3]} id="104"/>
            <DropBox key={"105"} scoreMultiplier={5} divideVal={array[4]} id="105"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"106"} scoreMultiplier={5} divideVal={array[5]} id="106"/>
            <DropBox key={"107"} scoreMultiplier={5} divideVal={array[6]} id="107"/>
            <DropBox key={"108"} scoreMultiplier={5} divideVal={array[7]} id="108"/>
            <DropBox key={"109"} scoreMultiplier={5} divideVal={array[8]} id="109"/>  
            <DropBox key={"110"} scoreMultiplier={5} divideVal={array[9]} id="110"/> 
            &nbsp;
            &nbsp;         
            <DropBox key={"111"} scoreMultiplier={5} divideVal={array[10]} id="111"/>
            <DropBox key={"112"} scoreMultiplier={5} divideVal={array[11]} id="112"/>
            <DropBox key={"113"} scoreMultiplier={5} divideVal={array[12]} id="113"/>
            <DropBox key={"114"} scoreMultiplier={5} divideVal={array[13]} id="114"/>
            <DropBox key={"115"} scoreMultiplier={5} divideVal={array[14]} id="115"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} scoreMultiplier={5} divideVal={array[15]} id="116"/>
            <DropBox key={"117"} scoreMultiplier={5} divideVal={array[16]} id="117"/>
            <DropBox key={"118"} scoreMultiplier={5} divideVal={array[17]} id="118"/>
            <DropBox key={"119"} scoreMultiplier={5} divideVal={array[18]} id="119"/>  
            <DropBox key={"120"} scoreMultiplier={5} divideVal={array[19]} id="120"/>
            &nbsp;
            &nbsp;
            <DropBox key={"121"} scoreMultiplier={5} divideVal={array[20]} id="121"/>
            <DropBox key={"122"} scoreMultiplier={5} divideVal={array[21]} id="122"/>  
            <DropBox key={"123"} scoreMultiplier={5} divideVal={array[22]} id="123"/>
            <DropBox key={"124"} scoreMultiplier={5} divideVal={array[23]} id="124"/> 
            <DropBox key={"125"} scoreMultiplier={5} divideVal={array[24]} id="125"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} scoreMultiplier={5} divideVal={array[25]} id="126"/> 
            <DropBox key={"127"} scoreMultiplier={5} divideVal={array[26]} id="127"/>
            <DropBox key={"128"} scoreMultiplier={5} divideVal={array[27]} id="128"/>
            <DropBox key={"129"} scoreMultiplier={5} divideVal={array[28]} id="129"/>  
            <DropBox key={"130"} scoreMultiplier={5} divideVal={array[29]} id="130"/>
            &nbsp;
            &nbsp;
            <DropBox key={"131"} scoreMultiplier={5} divideVal={array[30]} id="131"/>
            <DropBox key={"132"} scoreMultiplier={5} divideVal={array[31]} id="132"/>
            <DropBox key={"133"} scoreMultiplier={5} divideVal={array[32]} id="133"/>
            <DropBox key={"134"} scoreMultiplier={5} divideVal={array[33]} id="134"/>
            <DropBox key={"135"} scoreMultiplier={5} divideVal={array[34]} id="135"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} scoreMultiplier={5} divideVal={array[35]} id="136"/>
            <DropBox key={"137"} scoreMultiplier={5} divideVal={array[36]} id="137"/>
            <DropBox key={"138"} scoreMultiplier={5} divideVal={array[37]} id="138"/>
            <DropBox key={"139"} scoreMultiplier={5} divideVal={array[38]} id="139"/>  
            <DropBox key={"140"} scoreMultiplier={5} divideVal={array[39]} id="140"/>
            &nbsp;
            &nbsp;
            <DropBox key={"141"} scoreMultiplier={5} divideVal={array[40]} id="141"/>
            <DropBox key={"142"} scoreMultiplier={5} divideVal={array[41]} id="142"/>
            <DropBox key={"143"} scoreMultiplier={5} divideVal={array[42]} id="143"/>
            <DropBox key={"144"} scoreMultiplier={5} divideVal={array[43]} id="144"/>  
            <DropBox key={"145"} scoreMultiplier={5} divideVal={array[44]} id="145"/>
            &nbsp;
            &nbsp;
            <DropBox key={"146"} scoreMultiplier={5} divideVal={array[45]} id="146"/>
            <DropBox key={"147"} scoreMultiplier={5} divideVal={array[46]} id="147"/>
            <DropBox key={"148"} scoreMultiplier={5} divideVal={array[47]} id="148"/>
            <DropBox key={"149"} scoreMultiplier={5} divideVal={array[48]} id="149"/>  
            <DropBox key={"150"} scoreMultiplier={5} divideVal={array[49]} id="150"/>
            </tr>, document.getElementById("stepThree"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"151"} scoreMultiplier={5} divideVal={array[0]} id="151"/>
            <DropBox key={"152"} scoreMultiplier={5} divideVal={array[1]} id="152"/>
            <DropBox key={"153"} scoreMultiplier={5} divideVal={array[2]} id="153"/>
            &nbsp;
            &nbsp;
            <DropBox key={"154"} scoreMultiplier={5} divideVal={array[3]} id="154"/>
            <DropBox key={"155"} scoreMultiplier={5} divideVal={array[4]} id="155"/>
            &nbsp;
            &nbsp;
            <DropBox key={"156"} scoreMultiplier={5} divideVal={array[5]} id="156"/> 
            <DropBox key={"157"} scoreMultiplier={5} divideVal={array[6]} id="157"/>
            <DropBox key={"158"} scoreMultiplier={5} divideVal={array[7]} id="158"/>
            &nbsp;
            &nbsp;
            <DropBox key={"159"} scoreMultiplier={5} divideVal={array[8]} id="159"/>
            <DropBox key={"160"} scoreMultiplier={5} divideVal={array[9]} id="160"/>
            &nbsp;
            &nbsp;
            <DropBox key={"161"} scoreMultiplier={5} divideVal={array[10]} id="161"/>
            <DropBox key={"162"} scoreMultiplier={5} divideVal={array[11]} id="162"/>
            <DropBox key={"163"} scoreMultiplier={5} divideVal={array[12]} id="163"/>
            &nbsp;
            &nbsp;
            <DropBox key={"164"} scoreMultiplier={5} divideVal={array[13]} id="164"/>
            <DropBox key={"165"} scoreMultiplier={5} divideVal={array[14]} id="165"/>
            &nbsp;
            &nbsp;
            <DropBox key={"166"} scoreMultiplier={5} divideVal={array[15]} id="166"/>
            <DropBox key={"167"} scoreMultiplier={5} divideVal={array[16]} id="167"/>
            <DropBox key={"168"} scoreMultiplier={5} divideVal={array[17]} id="168"/>
            &nbsp;
            &nbsp;
            <DropBox key={"169"} scoreMultiplier={5} divideVal={array[18]} id="169"/>
            <DropBox key={"170"} scoreMultiplier={5} divideVal={array[19]} id="170"/>
            &nbsp;
            &nbsp;
            <DropBox key={"171"} scoreMultiplier={5} divideVal={array[20]} id="171"/> 
            <DropBox key={"172"} scoreMultiplier={5} divideVal={array[21]} id="172"/>
            <DropBox key={"173"} scoreMultiplier={5} divideVal={array[22]} id="173"/>
            &nbsp;
            &nbsp;
            <DropBox key={"174"} scoreMultiplier={5} divideVal={array[23]} id="174"/>
            <DropBox key={"175"} scoreMultiplier={5} divideVal={array[24]} id="175"/>
            &nbsp;
            &nbsp;
            <DropBox key={"176"} scoreMultiplier={5} divideVal={array[25]} id="176"/>
            <DropBox key={"177"} scoreMultiplier={5} divideVal={array[26]} id="177"/>
            <DropBox key={"178"} scoreMultiplier={5} divideVal={array[27]} id="178"/>
            &nbsp;
            &nbsp;
            <DropBox key={"179"} scoreMultiplier={5} divideVal={array[28]} id="179"/>
            <DropBox key={"180"} scoreMultiplier={5} divideVal={array[29]} id="180"/>
            &nbsp;
            &nbsp;
            <DropBox key={"181"} scoreMultiplier={5} divideVal={array[30]} id="181"/>
            <DropBox key={"182"} scoreMultiplier={5} divideVal={array[31]} id="182"/>
            <DropBox key={"183"} scoreMultiplier={5} divideVal={array[32]} id="183"/>
            &nbsp;
            &nbsp;
            <DropBox key={"184"} scoreMultiplier={5} divideVal={array[33]} id="184"/>
            <DropBox key={"185"} scoreMultiplier={5} divideVal={array[34]} id="185"/>
            &nbsp;
            &nbsp;
            <DropBox key={"186"} scoreMultiplier={5} divideVal={array[35]} id="186"/>
            <DropBox key={"187"} scoreMultiplier={5} divideVal={array[36]} id="187"/>
            <DropBox key={"188"} scoreMultiplier={5} divideVal={array[37]} id="188"/>
            &nbsp;
            &nbsp;
            <DropBox key={"189"} scoreMultiplier={5} divideVal={array[38]} id="189"/>
            <DropBox key={"190"} scoreMultiplier={5} divideVal={array[39]} id="190"/>
            &nbsp;
            &nbsp;
            <DropBox key={"191"} scoreMultiplier={5} divideVal={array[40]} id="191"/>
            <DropBox key={"192"} scoreMultiplier={5} divideVal={array[41]} id="192"/>
            <DropBox key={"193"} scoreMultiplier={5} divideVal={array[42]} id="193"/>
            &nbsp;
            &nbsp;
            <DropBox key={"194"} scoreMultiplier={5} divideVal={array[43]} id="194"/>
            <DropBox key={"195"} scoreMultiplier={5} divideVal={array[44]} id="195"/>
            &nbsp;
            &nbsp;
            <DropBox key={"196"} scoreMultiplier={5} divideVal={array[45]} id="196"/>
            <DropBox key={"197"} scoreMultiplier={5} divideVal={array[46]} id="197"/>
            <DropBox key={"198"} scoreMultiplier={5} divideVal={array[47]} id="198"/>
            &nbsp;
            &nbsp;
            <DropBox key={"199"} scoreMultiplier={5} divideVal={array[48]} id="199"/>
            <DropBox key={"200"} scoreMultiplier={5} divideVal={array[49]} id="200"/>
            </tr>, document.getElementById("stepFour"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"201"} scoreMultiplier={5} divideVal={array[0]} id="201"/>
            <DropBox key={"202"} scoreMultiplier={5} divideVal={array[1]} id="202"/>
            &nbsp;
            &nbsp;
            <DropBox key={"203"} scoreMultiplier={5} divideVal={array[2]} id="203"/>
            &nbsp;
            &nbsp;
            <DropBox key={"204"} scoreMultiplier={5} divideVal={array[3]} id="204"/>
            &nbsp;
            &nbsp;
            <DropBox key={"205"} scoreMultiplier={5} divideVal={array[4]} id="205"/>
            &nbsp;
            &nbsp;
            <DropBox key={"206"} scoreMultiplier={5} divideVal={array[5]} id="206"/>
            <DropBox key={"207"} scoreMultiplier={5} divideVal={array[6]} id="207"/>
            &nbsp;
            &nbsp;
            <DropBox key={"208"} scoreMultiplier={5} divideVal={array[7]} id="208"/>
            &nbsp;
            &nbsp;
            <DropBox key={"209"} scoreMultiplier={5} divideVal={array[8]} id="209"/>
            &nbsp;
            &nbsp;
            <DropBox key={"210"} scoreMultiplier={5} divideVal={array[9]} id="210"/>
            &nbsp;
            &nbsp;
            <DropBox key={"211"} scoreMultiplier={5} divideVal={array[10]} id="211"/>
            <DropBox key={"212"} scoreMultiplier={5} divideVal={array[11]} id="212"/>
            &nbsp;
            &nbsp;
            <DropBox key={"213"} scoreMultiplier={5} divideVal={array[12]} id="213"/>
            &nbsp;
            &nbsp;
            <DropBox key={"214"} scoreMultiplier={5} divideVal={array[13]} id="214"/>
            &nbsp;
            &nbsp;
            <DropBox key={"215"} scoreMultiplier={5} divideVal={array[14]} id="215"/>
            &nbsp;
            &nbsp;
            <DropBox key={"216"} scoreMultiplier={5} divideVal={array[15]} id="216"/>
            <DropBox key={"217"} scoreMultiplier={5} divideVal={array[16]} id="217"/>
            &nbsp;
            &nbsp;
            <DropBox key={"218"} scoreMultiplier={5} divideVal={array[17]} id="218"/>
            &nbsp;
            &nbsp;
            <DropBox key={"219"} scoreMultiplier={5} divideVal={array[18]} id="219"/>
            &nbsp;
            &nbsp;
            <DropBox key={"220"} scoreMultiplier={5} divideVal={array[19]} id="220"/>
            &nbsp;
            &nbsp;
            <DropBox key={"221"} scoreMultiplier={5} divideVal={array[20]} id="221"/>
            <DropBox key={"222"} scoreMultiplier={5} divideVal={array[21]} id="222"/>
            &nbsp;
            &nbsp;
            <DropBox key={"223"} scoreMultiplier={5} divideVal={array[22]} id="223"/>
            &nbsp;
            &nbsp;
            <DropBox key={"224"} scoreMultiplier={5} divideVal={array[23]} id="224"/>
            &nbsp;
            &nbsp;
            <DropBox key={"225"} scoreMultiplier={5} divideVal={array[24]} id="225"/>
            &nbsp;
            &nbsp;
            <DropBox key={"226"} scoreMultiplier={5} divideVal={array[25]} id="226"/>
            <DropBox key={"227"} scoreMultiplier={5} divideVal={array[26]} id="227"/>
            &nbsp;
            &nbsp;
            <DropBox key={"228"} scoreMultiplier={5} divideVal={array[27]} id="228"/>
            &nbsp;
            &nbsp;
            <DropBox key={"229"} scoreMultiplier={5} divideVal={array[28]} id="229"/>
            &nbsp;
            &nbsp;
            <DropBox key={"230"} scoreMultiplier={5} divideVal={array[29]} id="230"/>
            &nbsp;
            &nbsp;
            <DropBox key={"231"} scoreMultiplier={5} divideVal={array[30]} id="231"/>
            <DropBox key={"232"} scoreMultiplier={5} divideVal={array[31]} id="232"/>
            &nbsp;
            &nbsp;
            <DropBox key={"233"} scoreMultiplier={5} divideVal={array[32]} id="233"/>
            &nbsp;
            &nbsp;
            <DropBox key={"234"} scoreMultiplier={5} divideVal={array[33]} id="234"/>
            &nbsp;
            &nbsp;
            <DropBox key={"235"} scoreMultiplier={5} divideVal={array[34]} id="235"/>
            &nbsp;
            &nbsp;
            <DropBox key={"236"} scoreMultiplier={5} divideVal={array[35]} id="236"/>
            <DropBox key={"237"} scoreMultiplier={5} divideVal={array[36]} id="237"/>
            &nbsp;
            &nbsp;
            <DropBox key={"238"} scoreMultiplier={5} divideVal={array[37]} id="238"/>
            &nbsp;
            &nbsp;
            <DropBox key={"239"} scoreMultiplier={5} divideVal={array[38]} id="239"/>
            &nbsp;
            &nbsp;
            <DropBox key={"240"} scoreMultiplier={5} divideVal={array[39]} id="240"/>
            &nbsp;
            &nbsp;
            <DropBox key={"241"} scoreMultiplier={5} divideVal={array[40]} id="241"/>
            <DropBox key={"242"} scoreMultiplier={5} divideVal={array[41]} id="242"/>
            &nbsp;
            &nbsp;
            <DropBox key={"243"} scoreMultiplier={5} divideVal={array[42]} id="243"/>
            &nbsp;
            &nbsp;
            <DropBox key={"244"} scoreMultiplier={5} divideVal={array[43]} id="244"/>
            &nbsp;
            &nbsp;
            <DropBox key={"245"} scoreMultiplier={5} divideVal={array[44]} id="245"/>
            &nbsp;
            &nbsp;
            <DropBox key={"246"} scoreMultiplier={5} divideVal={array[45]} id="246"/>
            <DropBox key={"247"} scoreMultiplier={5} divideVal={array[46]} id="247"/>
            &nbsp;
            &nbsp;
            <DropBox key={"248"} scoreMultiplier={5} divideVal={array[47]} id="248"/>
            &nbsp;
            &nbsp;
            <DropBox key={"249"} scoreMultiplier={5} divideVal={array[48]} id="249"/>
            &nbsp;
            &nbsp;
            <DropBox key={"250"} scoreMultiplier={5} divideVal={array[49]} id="250"/>
            </tr>, document.getElementById("stepFive"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"251"} scoreMultiplier={5} divideVal={array[0]} id="251"/>
            &nbsp;
            &nbsp;
            <DropBox key={"252"} scoreMultiplier={5} divideVal={array[1]} id="252"/> 
            &nbsp;
            &nbsp;          
            <DropBox key={"253"} scoreMultiplier={5} divideVal={array[2]} id="253"/>
            &nbsp;
            &nbsp;
            <DropBox key={"254"} scoreMultiplier={5} divideVal={array[3]} id="254"/>
            &nbsp;
            &nbsp;
            <DropBox key={"255"} scoreMultiplier={5} divideVal={array[4]} id="255"/>
            &nbsp;
            &nbsp;
            <DropBox key={"256"} scoreMultiplier={5} divideVal={array[5]} id="256"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"257"} scoreMultiplier={5} divideVal={array[6]} id="257"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"258"} scoreMultiplier={5} divideVal={array[7]} id="258"/>
            &nbsp;
            &nbsp;
            <DropBox key={"259"} scoreMultiplier={5} divideVal={array[8]} id="259"/>
            &nbsp;
            &nbsp;
            <DropBox key={"260"} scoreMultiplier={5} divideVal={array[9]} id="260"/>
            &nbsp;
            &nbsp;
            <DropBox key={"261"} scoreMultiplier={5} divideVal={array[10]} id="261"/>
            &nbsp;
            &nbsp;
            <DropBox key={"262"} scoreMultiplier={5} divideVal={array[11]} id="262"/>
            &nbsp;
            &nbsp;
            <DropBox key={"263"} scoreMultiplier={5} divideVal={array[12]} id="263"/>
            &nbsp;
            &nbsp;
            <DropBox key={"264"} scoreMultiplier={5} divideVal={array[13]} id="264"/>
            &nbsp;
            &nbsp;
            <DropBox key={"265"} scoreMultiplier={5} divideVal={array[14]} id="265"/>
            &nbsp;
            &nbsp;
            <DropBox key={"266"} scoreMultiplier={5} divideVal={array[15]} id="266"/>
            &nbsp;
            &nbsp;
            <DropBox key={"267"} scoreMultiplier={5} divideVal={array[16]} id="267"/>
            &nbsp;
            &nbsp;
            <DropBox key={"268"} scoreMultiplier={5} divideVal={array[17]} id="268"/>
            &nbsp;
            &nbsp;
            <DropBox key={"269"} scoreMultiplier={5} divideVal={array[18]} id="269"/>
            &nbsp;
            &nbsp;
            <DropBox key={"270"} scoreMultiplier={5} divideVal={array[19]} id="270"/>
            &nbsp;
            &nbsp;
            <DropBox key={"271"} scoreMultiplier={5} divideVal={array[20]} id="271"/>
            &nbsp;
            &nbsp;
            <DropBox key={"272"} scoreMultiplier={5} divideVal={array[21]} id="272"/> 
            &nbsp;
            &nbsp;          
            <DropBox key={"273"} scoreMultiplier={5} divideVal={array[22]} id="273"/>
            &nbsp;
            &nbsp;
            <DropBox key={"274"} scoreMultiplier={5} divideVal={array[23]} id="274"/>
            &nbsp;
            &nbsp;
            <DropBox key={"275"} scoreMultiplier={5} divideVal={array[24]} id="275"/>
            &nbsp;
            &nbsp;
            <DropBox key={"276"} scoreMultiplier={5} divideVal={array[25]} id="276"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"277"} scoreMultiplier={5} divideVal={array[26]} id="277"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"278"} scoreMultiplier={5} divideVal={array[27]} id="278"/>
            &nbsp;
            &nbsp;
            <DropBox key={"279"} scoreMultiplier={5} divideVal={array[28]} id="279"/>
            &nbsp;
            &nbsp;
            <DropBox key={"280"} scoreMultiplier={5} divideVal={array[29]} id="280"/>
            &nbsp;
            &nbsp;
            <DropBox key={"281"} scoreMultiplier={5} divideVal={array[30]} id="281"/>
            &nbsp;
            &nbsp;
            <DropBox key={"282"} scoreMultiplier={5} divideVal={array[31]} id="282"/>
            &nbsp;
            &nbsp;
            <DropBox key={"283"} scoreMultiplier={5} divideVal={array[32]} id="283"/>
            &nbsp;
            &nbsp;
            <DropBox key={"284"} scoreMultiplier={5} divideVal={array[33]} id="284"/>
            &nbsp;
            &nbsp;
            <DropBox key={"285"} scoreMultiplier={5} divideVal={array[34]} id="285"/>
            &nbsp;
            &nbsp;
            <DropBox key={"286"} scoreMultiplier={5} divideVal={array[35]} id="286"/>
            &nbsp;
            &nbsp;
            <DropBox key={"287"} scoreMultiplier={5} divideVal={array[36]} id="287"/>
            &nbsp;
            &nbsp;
            <DropBox key={"288"} scoreMultiplier={5} divideVal={array[37]} id="288"/>
            &nbsp;
            &nbsp;
            <DropBox key={"289"} scoreMultiplier={5} divideVal={array[38]} id="289"/>
            &nbsp;
            &nbsp;
            <DropBox key={"290"} scoreMultiplier={5} divideVal={array[39]} id="290"/>
            &nbsp;
            &nbsp;
            <DropBox key={"291"} scoreMultiplier={5} divideVal={array[40]} id="291"/>
            &nbsp;
            &nbsp;
            <DropBox key={"292"} scoreMultiplier={5} divideVal={array[41]} id="292"/>
            &nbsp;
            &nbsp;
            <DropBox key={"293"} scoreMultiplier={5} divideVal={array[42]} id="293"/>
            &nbsp;
            &nbsp;
            <DropBox key={"294"} scoreMultiplier={5} divideVal={array[43]} id="294"/>
            &nbsp;
            &nbsp;
            <DropBox key={"295"} scoreMultiplier={5} divideVal={array[44]} id="295"/>
            &nbsp;
            &nbsp;
            <DropBox key={"296"} scoreMultiplier={5} divideVal={array[45]} id="296"/>
            &nbsp;
            &nbsp;
            <DropBox key={"297"} scoreMultiplier={5} divideVal={array[46]} id="297"/>
            &nbsp;
            &nbsp;
            <DropBox key={"298"} scoreMultiplier={5} divideVal={array[47]} id="298"/>
            &nbsp;
            &nbsp;
            <DropBox key={"299"} scoreMultiplier={5} divideVal={array[48]} id="299"/>
            &nbsp;
            &nbsp;
            <DropBox key={"300"} scoreMultiplier={5} divideVal={array[49]} id="300"/>
            </tr>, document.getElementById("stepSix"))
        }
        {setTempArray([array[0], array[1]])}
        {setTempArray2([array[5], array[6]])}
        {setTempArray3([array[10], array[11]])}
        {setTempArray4([array[15], array[16]])}
        {setTempArray5([array[20], array[21]])}
        {setTempArray6([array[25], array[26]])}
        {setTempArray7([array[30], array[31]])}
        {setTempArray8([array[35], array[36]])}
        {setTempArray9([array[40], array[41]])}
        {setTempArray10([array[45, array[46]]])}
        {
        ReactDOM.render(<tr>
            <DropBox key={"301"} scoreMultiplier={5} divideVal={tempArray[0]} id="301"/>
            <DropBox key={"302"} scoreMultiplier={5} divideVal={tempArray[1]} id="302"/>
            &nbsp;
            &nbsp;
            <DropBox key={"303"} scoreMultiplier={5} divideVal={array[2]} id="303"/>
            &nbsp;
            &nbsp;
            <DropBox key={"304"} scoreMultiplier={5} divideVal={array[3]} id="304"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"305"} scoreMultiplier={5} divideVal={array[4]} id="305"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"306"} scoreMultiplier={5} divideVal={tempArray2[0]} id="306"/>
            <DropBox key={"307"} scoreMultiplier={5} divideVal={tempArray2[1]} id="307"/>
            &nbsp;
            &nbsp;
            <DropBox key={"308"} scoreMultiplier={5} divideVal={array[7]} id="308"/>
            &nbsp;
            &nbsp;
            <DropBox key={"309"} scoreMultiplier={5} divideVal={array[8]} id="309"/>
            &nbsp;
            &nbsp;
            <DropBox key={"310"} scoreMultiplier={5} divideVal={array[9]} id="310"/>
            &nbsp;
            &nbsp;
            <DropBox key={"311"} scoreMultiplier={5} divideVal={tempArray3[0]} id="311"/>
            <DropBox key={"312"} scoreMultiplier={5} divideVal={tempArray3[1]} id="312"/>
            &nbsp;
            &nbsp;
            <DropBox key={"313"} scoreMultiplier={5} divideVal={array[12]} id="313"/>
            &nbsp;
            &nbsp;
            <DropBox key={"314"} scoreMultiplier={5} divideVal={array[13]} id="314"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"315"} scoreMultiplier={5} divideVal={array[14]} id="315"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"316"} scoreMultiplier={5} divideVal={tempArray4[0]} id="316"/>
            <DropBox key={"317"} scoreMultiplier={5} divideVal={tempArray4[1]} id="317"/>
            &nbsp;
            &nbsp;
            <DropBox key={"318"} scoreMultiplier={5} divideVal={array[17]} id="318"/>
            &nbsp;
            &nbsp;
            <DropBox key={"319"} scoreMultiplier={5} divideVal={array[18]} id="319"/>
            &nbsp;
            &nbsp;
            <DropBox key={"320"} scoreMultiplier={5} divideVal={array[19]} id="320"/>
            &nbsp;
            &nbsp;
            <DropBox key={"321"} scoreMultiplier={5} divideVal={tempArray5[0]} id="321"/>
            <DropBox key={"322"} scoreMultiplier={5} divideVal={tempArray5[1]} id="322"/>
            &nbsp;
            &nbsp;
            <DropBox key={"323"} scoreMultiplier={5} divideVal={array[22]} id="323"/>
            &nbsp;
            &nbsp;
            <DropBox key={"324"} scoreMultiplier={5} divideVal={array[23]} id="324"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"325"} scoreMultiplier={5} divideVal={array[24]} id="325"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"326"} scoreMultiplier={5} divideVal={tempArray6[0]} id="326"/>
            <DropBox key={"327"} scoreMultiplier={5} divideVal={tempArray6[1]} id="327"/>
            &nbsp;
            &nbsp;
            <DropBox key={"328"} scoreMultiplier={5} divideVal={array[27]} id="328"/>
            &nbsp;
            &nbsp;
            <DropBox key={"329"} scoreMultiplier={5} divideVal={array[28]} id="329"/>
            &nbsp;
            &nbsp;
            <DropBox key={"330"} scoreMultiplier={5} divideVal={array[29]} id="330"/>
            &nbsp;
            &nbsp;
            <DropBox key={"331"} scoreMultiplier={5} divideVal={tempArray7[0]} id="331"/>
            <DropBox key={"332"} scoreMultiplier={5} divideVal={tempArray7[1]} id="332"/>
            &nbsp;
            &nbsp;
            <DropBox key={"333"} scoreMultiplier={5} divideVal={array[32]} id="333"/>
            &nbsp;
            &nbsp;
            <DropBox key={"334"} scoreMultiplier={5} divideVal={array[33]} id="334"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"335"} scoreMultiplier={5} divideVal={array[34]} id="335"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"336"} scoreMultiplier={5} divideVal={tempArray8[0]} id="336"/>
            <DropBox key={"337"} scoreMultiplier={5} divideVal={tempArray8[1]} id="337"/>
            &nbsp;
            &nbsp;
            <DropBox key={"338"} scoreMultiplier={5} divideVal={array[37]} id="338"/>
            &nbsp;
            &nbsp;
            <DropBox key={"339"} scoreMultiplier={5} divideVal={array[38]} id="339"/>
            &nbsp;
            &nbsp;
            <DropBox key={"340"} scoreMultiplier={5} divideVal={array[39]} id="340"/>
            &nbsp;
            &nbsp;
            <DropBox key={"341"} scoreMultiplier={5} divideVal={tempArray9[0]} id="341"/>
            <DropBox key={"342"} scoreMultiplier={5} divideVal={tempArray9[1]} id="342"/>
            &nbsp;
            &nbsp;
            <DropBox key={"343"} scoreMultiplier={5} divideVal={array[42]} id="343"/>
            &nbsp;
            &nbsp;
            <DropBox key={"344"} scoreMultiplier={5} divideVal={array[43]} id="344"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"345"} scoreMultiplier={5} divideVal={array[44]} id="345"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"346"} scoreMultiplier={5} divideVal={tempArray10[0]} id="346"/>
            <DropBox key={"347"} scoreMultiplier={5} divideVal={tempArray10[1]} id="347"/>
            &nbsp;
            &nbsp;
            <DropBox key={"348"} scoreMultiplier={5} divideVal={array[47]} id="348"/>
            &nbsp;
            &nbsp;
            <DropBox key={"349"} scoreMultiplier={5} divideVal={array[48]} id="349"/>
            &nbsp;
            &nbsp;
            <DropBox key={"350"} scoreMultiplier={5} divideVal={array[49]} id="350"/>
            </tr>, document.getElementById("stepSeven"))
        }
        {setTempArray([array[0], array[1], array[2]])}
        {setTempArray2([array[3], array[4]])}
        {setTempArray3([array[5], array[6], array[7]])}
        {setTempArray4([array[8], array[9]])}
        {setTempArray5([array[10], array[11], array[12]])}
        {setTempArray6([array[13], array[14]])}
        {setTempArray7([array[15], array[16], array[17]])}
        {setTempArray8([array[18], array[19]])}
        {setTempArray9([array[20], array[21], array[22]])}
        {setTempArray10([array[23], array[24]])}
        {setTempArray11([array[25], array[26], array[27]])}
        {setTempArray12([array[28], array[29]])}
        {setTempArray13([array[30], array[31], array[32]])}
        {setTempArray14([array[33], array[34]])}
        {setTempArray15([array[35], array[36], array[37]])}
        {setTempArray16([array[38], array[39]])}
        {setTempArray17([array[40], array[41], array[42]])}
        {setTempArray18([array[43], array[44]])}
        {setTempArray19([array[45], array[46], array[47]])}
        {setTempArray20([array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"351"} scoreMultiplier={5} divideVal={tempArray[0]} id="351"/>
            <DropBox key={"352"} scoreMultiplier={5} divideVal={tempArray[1]} id="352"/>
            <DropBox key={"353"} scoreMultiplier={5} divideVal={tempArray[2]} id="353"/>
            &nbsp;
            &nbsp;
            <DropBox key={"354"} scoreMultiplier={5} divideVal={tempArray2[0]} id="354"/>
            <DropBox key={"355"} scoreMultiplier={5} divideVal={tempArray2[1]} id="355"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"356"} scoreMultiplier={5} divideVal={tempArray3[0]} id="356"/>
            <DropBox key={"357"} scoreMultiplier={5} divideVal={tempArray3[1]} id="357"/>
            <DropBox key={"358"} scoreMultiplier={5} divideVal={tempArray3[2]} id="358"/>
            &nbsp;
            &nbsp;
            <DropBox key={"359"} scoreMultiplier={5} divideVal={tempArray4[0]} id="359"/>
            <DropBox key={"360"} scoreMultiplier={5} divideVal={tempArray4[1]} id="360"/>
            &nbsp;
            &nbsp;
            <DropBox key={"361"} scoreMultiplier={5} divideVal={tempArray5[0]} id="361"/>
            <DropBox key={"362"} scoreMultiplier={5} divideVal={tempArray5[1]} id="362"/>
            <DropBox key={"363"} scoreMultiplier={5} divideVal={tempArray5[2]} id="363"/>
            &nbsp;
            &nbsp;
            <DropBox key={"364"} scoreMultiplier={5} divideVal={tempArray6[0]} id="364"/>
            <DropBox key={"365"} scoreMultiplier={5} divideVal={tempArray6[1]} id="365"/>
            &nbsp;
            &nbsp;
            <DropBox key={"366"} scoreMultiplier={5} divideVal={tempArray7[0]} id="366"/>
            <DropBox key={"367"} scoreMultiplier={5} divideVal={tempArray7[1]} id="367"/>
            <DropBox key={"368"} scoreMultiplier={5} divideVal={tempArray7[2]} id="368"/>
            &nbsp;
            &nbsp;
            <DropBox key={"369"} scoreMultiplier={5} divideVal={tempArray8[0]} id="369"/>
            <DropBox key={"370"} scoreMultiplier={5} divideVal={tempArray8[1]} id="370"/>
            &nbsp;
            &nbsp;
            <DropBox key={"371"} scoreMultiplier={5} divideVal={tempArray9[0]} id="371"/>
            <DropBox key={"372"} scoreMultiplier={5} divideVal={tempArray9[1]} id="372"/>
            <DropBox key={"373"} scoreMultiplier={5} divideVal={tempArray9[2]} id="373"/>
            &nbsp;
            &nbsp;
            <DropBox key={"374"} scoreMultiplier={5} divideVal={tempArray10[0]} id="374"/>
            <DropBox key={"375"} scoreMultiplier={5} divideVal={tempArray10[1]} id="375"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"376"} scoreMultiplier={5} divideVal={tempArray11[0]} id="376"/>
            <DropBox key={"377"} scoreMultiplier={5} divideVal={tempArray11[1]} id="377"/>
            <DropBox key={"378"} scoreMultiplier={5} divideVal={tempArray11[2]} id="378"/>
            &nbsp;
            &nbsp;
            <DropBox key={"379"} scoreMultiplier={5} divideVal={tempArray12[0]} id="379"/>
            <DropBox key={"380"} scoreMultiplier={5} divideVal={tempArray12[1]} id="380"/>
            &nbsp;
            &nbsp;
            <DropBox key={"381"} scoreMultiplier={5} divideVal={tempArray13[0]} id="381"/>
            <DropBox key={"382"} scoreMultiplier={5} divideVal={tempArray13[1]} id="382"/>
            <DropBox key={"383"} scoreMultiplier={5} divideVal={tempArray13[2]} id="383"/>
            &nbsp;
            &nbsp;
            <DropBox key={"384"} scoreMultiplier={5} divideVal={tempArray14[0]} id="384"/>
            <DropBox key={"385"} scoreMultiplier={5} divideVal={tempArray14[1]} id="385"/>
            &nbsp;
            &nbsp;
            <DropBox key={"386"} scoreMultiplier={5} divideVal={tempArray15[0]} id="386"/>
            <DropBox key={"387"} scoreMultiplier={5} divideVal={tempArray15[1]} id="387"/>
            <DropBox key={"388"} scoreMultiplier={5} divideVal={tempArray15[2]} id="388"/>
            &nbsp;
            &nbsp;
            <DropBox key={"389"} scoreMultiplier={5} divideVal={tempArray16[0]} id="389"/>
            <DropBox key={"390"} scoreMultiplier={5} divideVal={tempArray16[1]} id="390"/>
            &nbsp;
            &nbsp;
            <DropBox key={"391"} scoreMultiplier={5} divideVal={tempArray17[0]} id="391"/>
            <DropBox key={"392"} scoreMultiplier={5} divideVal={tempArray17[1]} id="392"/>
            <DropBox key={"393"} scoreMultiplier={5} divideVal={tempArray17[2]} id="393"/>
            &nbsp;
            &nbsp;
            <DropBox key={"394"} scoreMultiplier={5} divideVal={tempArray18[0]} id="394"/>
            <DropBox key={"395"} scoreMultiplier={5} divideVal={tempArray18[1]} id="395"/>
            &nbsp;
            &nbsp;
            <DropBox key={"396"} scoreMultiplier={5} divideVal={tempArray19[0]} id="396"/>
            <DropBox key={"397"} scoreMultiplier={5} divideVal={tempArray19[1]} id="397"/>
            <DropBox key={"398"} scoreMultiplier={5} divideVal={tempArray19[2]} id="398"/>
            &nbsp;
            &nbsp;
            <DropBox key={"399"} scoreMultiplier={5} divideVal={tempArray20[0]} id="399"/>
            <DropBox key={"400"} scoreMultiplier={5} divideVal={tempArray20[1]} id="400"/>
            </tr>
        , document.getElementById("stepEight"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4]])}
        {setTempArray2([array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray3([array[10], array[11], array[12], array[13], array[14]])}
        {setTempArray4([array[15], array[16], array[17], array[18], array[19]])}
        {setTempArray5([array[20], array[21], array[22], array[23], array[24]])}
        {setTempArray6([array[25], array[26], array[27], array[28], array[29]])}
        {setTempArray7([array[30], array[31], array[32], array[33], array[34]])}
        {setTempArray8([array[35], array[36], array[37], array[38], array[39]])}
        {setTempArray9([array[40], array[41], array[42], array[43], array[44]])}
        {setTempArray10([array[45], array[46], array[47], array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"401"} scoreMultiplier={5} divideVal={tempArray[0]} id="401"/>
            <DropBox key={"402"} scoreMultiplier={5} divideVal={tempArray[1]} id="402"/>
            <DropBox key={"403"} scoreMultiplier={5} divideVal={tempArray[2]} id="403"/>
            <DropBox key={"404"} scoreMultiplier={5} divideVal={tempArray[3]} id="404"/>
            <DropBox key={"405"} scoreMultiplier={5} divideVal={tempArray[4]} id="405"/>
            &nbsp;
            &nbsp;
            <DropBox key={"406"} scoreMultiplier={5} divideVal={tempArray2[0]} id="406"/>
            <DropBox key={"407"} scoreMultiplier={5} divideVal={tempArray2[1]} id="407"/>
            <DropBox key={"408"} scoreMultiplier={5} divideVal={tempArray2[2]} id="408"/>
            <DropBox key={"409"} scoreMultiplier={5} divideVal={tempArray2[3]} id="409"/>
            <DropBox key={"410"} scoreMultiplier={5} divideVal={tempArray2[4]} id="410"/>
            &nbsp;
            &nbsp;
            <DropBox key={"411"} scoreMultiplier={5} divideVal={tempArray3[0]} id="411"/>
            <DropBox key={"412"} scoreMultiplier={5} divideVal={tempArray3[1]} id="412"/>
            <DropBox key={"413"} scoreMultiplier={5} divideVal={tempArray3[2]} id="413"/>
            <DropBox key={"414"} scoreMultiplier={5} divideVal={tempArray3[3]} id="414"/>
            <DropBox key={"415"} scoreMultiplier={5} divideVal={tempArray3[4]} id="415"/>
            &nbsp;
            &nbsp;
            <DropBox key={"416"} scoreMultiplier={5} divideVal={tempArray4[0]} id="416"/>
            <DropBox key={"417"} scoreMultiplier={5} divideVal={tempArray4[1]} id="417"/>
            <DropBox key={"418"} scoreMultiplier={5} divideVal={tempArray4[2]} id="418"/>
            <DropBox key={"419"} scoreMultiplier={5} divideVal={tempArray4[3]} id="419"/>
            <DropBox key={"420"} scoreMultiplier={5} divideVal={tempArray4[4]} id="420"/>
            &nbsp;
            &nbsp;
            <DropBox key={"421"} scoreMultiplier={5} divideVal={tempArray5[0]} id="421"/>
            <DropBox key={"422"} scoreMultiplier={5} divideVal={tempArray5[1]} id="422"/>
            <DropBox key={"423"} scoreMultiplier={5} divideVal={tempArray5[2]} id="423"/>
            <DropBox key={"424"} scoreMultiplier={5} divideVal={tempArray5[3]} id="424"/>
            <DropBox key={"425"} scoreMultiplier={5} divideVal={tempArray5[4]} id="425"/>
            &nbsp;
            &nbsp;
            <DropBox key={"426"} scoreMultiplier={5} divideVal={tempArray6[0]} id="426"/>
            <DropBox key={"427"} scoreMultiplier={5} divideVal={tempArray6[1]} id="427"/>
            <DropBox key={"428"} scoreMultiplier={5} divideVal={tempArray6[2]} id="428"/>
            <DropBox key={"429"} scoreMultiplier={5} divideVal={tempArray6[3]} id="429"/>
            <DropBox key={"430"} scoreMultiplier={5} divideVal={tempArray6[4]} id="430"/>
            &nbsp;
            &nbsp;
            <DropBox key={"431"} scoreMultiplier={5} divideVal={tempArray7[0]} id="431"/>
            <DropBox key={"432"} scoreMultiplier={5} divideVal={tempArray7[1]} id="432"/>
            <DropBox key={"433"} scoreMultiplier={5} divideVal={tempArray7[2]} id="433"/>
            <DropBox key={"434"} scoreMultiplier={5} divideVal={tempArray7[3]} id="434"/>
            <DropBox key={"435"} scoreMultiplier={5} divideVal={tempArray7[4]} id="435"/>
            &nbsp;
            &nbsp;
            <DropBox key={"436"} scoreMultiplier={5} divideVal={tempArray8[0]} id="436"/>
            <DropBox key={"437"} scoreMultiplier={5} divideVal={tempArray8[1]} id="437"/>
            <DropBox key={"438"} scoreMultiplier={5} divideVal={tempArray8[2]} id="438"/>
            <DropBox key={"439"} scoreMultiplier={5} divideVal={tempArray8[3]} id="439"/>
            <DropBox key={"440"} scoreMultiplier={5} divideVal={tempArray8[4]} id="440"/>
            &nbsp;
            &nbsp;
            <DropBox key={"441"} scoreMultiplier={5} divideVal={tempArray9[0]} id="441"/>
            <DropBox key={"442"} scoreMultiplier={5} divideVal={tempArray9[1]} id="442"/>
            <DropBox key={"443"} scoreMultiplier={5} divideVal={tempArray9[2]} id="443"/>
            <DropBox key={"444"} scoreMultiplier={5} divideVal={tempArray9[3]} id="444"/>
            <DropBox key={"445"} scoreMultiplier={5} divideVal={tempArray9[4]} id="445"/>
            &nbsp;
            &nbsp;
            <DropBox key={"446"} scoreMultiplier={5} divideVal={tempArray10[0]} id="446"/>
            <DropBox key={"447"} scoreMultiplier={5} divideVal={tempArray10[1]} id="447"/>
            <DropBox key={"448"} scoreMultiplier={5} divideVal={tempArray10[2]} id="448"/>
            <DropBox key={"449"} scoreMultiplier={5} divideVal={tempArray10[3]} id="449"/>
            <DropBox key={"450"} scoreMultiplier={5} divideVal={tempArray10[4]} id="450"/>
            </tr>
        , document.getElementById("stepNine"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray2([array[10], array[11], array[12], array[13], array[14], array[15], array[16], array[17], array[18], array[19]])}
        {setTempArray3([array[20], array[21], array[22], array[23], array[24], array[25], array[26], array[27], array[28], array[29]])}
        {setTempArray4([array[30], array[31], array[32], array[33], array[34], array[35], array[36], array[37], array[38], array[39]])}
        {setTempArray5([array[40], array[41], array[42], array[43], array[44], array[45], array[46], array[47], array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"451"} scoreMultiplier={5} divideVal={tempArray[0]} id="451"/>
            <DropBox key={"452"} scoreMultiplier={5} divideVal={tempArray[1]} id="452"/>
            <DropBox key={"453"} scoreMultiplier={5} divideVal={tempArray[2]} id="453"/>
            <DropBox key={"454"} scoreMultiplier={5} divideVal={tempArray[3]} id="454"/>
            <DropBox key={"455"} scoreMultiplier={5} divideVal={tempArray[4]} id="455"/> 
            <DropBox key={"456"} scoreMultiplier={5} divideVal={tempArray[5]} id="456"/>
            <DropBox key={"457"} scoreMultiplier={5} divideVal={tempArray[6]} id="457"/>
            <DropBox key={"458"} scoreMultiplier={5} divideVal={tempArray[7]} id="458"/>
            <DropBox key={"459"} scoreMultiplier={5} divideVal={tempArray[8]} id="459"/>
            <DropBox key={"460"} scoreMultiplier={5} divideVal={tempArray[9]} id="460"/>
            &nbsp;
            &nbsp;
            <DropBox key={"461"} scoreMultiplier={5} divideVal={tempArray2[0]} id="461"/>
            <DropBox key={"462"} scoreMultiplier={5} divideVal={tempArray2[1]} id="462"/>
            <DropBox key={"463"} scoreMultiplier={5} divideVal={tempArray2[2]} id="463"/>
            <DropBox key={"464"} scoreMultiplier={5} divideVal={tempArray2[3]} id="464"/>
            <DropBox key={"465"} scoreMultiplier={5} divideVal={tempArray2[4]} id="465"/> 
            <DropBox key={"466"} scoreMultiplier={5} divideVal={tempArray2[5]} id="466"/>
            <DropBox key={"467"} scoreMultiplier={5} divideVal={tempArray2[6]} id="467"/>
            <DropBox key={"468"} scoreMultiplier={5} divideVal={tempArray2[7]} id="468"/>
            <DropBox key={"469"} scoreMultiplier={5} divideVal={tempArray2[8]} id="469"/>
            <DropBox key={"470"} scoreMultiplier={5} divideVal={tempArray2[9]} id="470"/>
            &nbsp;
            &nbsp;
            <DropBox key={"471"} scoreMultiplier={5} divideVal={tempArray3[0]} id="471"/>
            <DropBox key={"472"} scoreMultiplier={5} divideVal={tempArray3[1]} id="472"/>
            <DropBox key={"473"} scoreMultiplier={5} divideVal={tempArray3[2]} id="473"/>
            <DropBox key={"474"} scoreMultiplier={5} divideVal={tempArray3[3]} id="474"/>
            <DropBox key={"475"} scoreMultiplier={5} divideVal={tempArray3[4]} id="475"/>
            <DropBox key={"476"} scoreMultiplier={5} divideVal={tempArray3[5]} id="476"/>
            <DropBox key={"477"} scoreMultiplier={5} divideVal={tempArray3[6]} id="477"/>
            <DropBox key={"478"} scoreMultiplier={5} divideVal={tempArray3[7]} id="478"/>
            <DropBox key={"479"} scoreMultiplier={5} divideVal={tempArray3[8]} id="479"/>
            <DropBox key={"480"} scoreMultiplier={5} divideVal={tempArray3[9]} id="480"/>
            &nbsp;
            &nbsp;
            <DropBox key={"481"} scoreMultiplier={5} divideVal={tempArray4[0]} id="481"/>
            <DropBox key={"482"} scoreMultiplier={5} divideVal={tempArray4[1]} id="482"/>
            <DropBox key={"483"} scoreMultiplier={5} divideVal={tempArray4[2]} id="483"/>
            <DropBox key={"484"} scoreMultiplier={5} divideVal={tempArray4[3]} id="484"/>
            <DropBox key={"485"} scoreMultiplier={5} divideVal={tempArray4[4]} id="485"/>
            <DropBox key={"486"} scoreMultiplier={5} divideVal={tempArray4[5]} id="486"/>
            <DropBox key={"487"} scoreMultiplier={5} divideVal={tempArray4[6]} id="487"/>
            <DropBox key={"488"} scoreMultiplier={5} divideVal={tempArray4[7]} id="488"/>
            <DropBox key={"489"} scoreMultiplier={5} divideVal={tempArray4[8]} id="489"/>
            <DropBox key={"490"} scoreMultiplier={5} divideVal={tempArray4[9]} id="490"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"491"} scoreMultiplier={5} divideVal={tempArray5[0]} id="491"/>
            <DropBox key={"492"} scoreMultiplier={5} divideVal={tempArray5[1]} id="492"/>
            <DropBox key={"493"} scoreMultiplier={5} divideVal={tempArray5[2]} id="493"/>
            <DropBox key={"494"} scoreMultiplier={5} divideVal={tempArray5[3]} id="494"/>
            <DropBox key={"495"} scoreMultiplier={5} divideVal={tempArray5[4]} id="495"/>
            <DropBox key={"496"} scoreMultiplier={5} divideVal={tempArray5[5]} id="496"/>
            <DropBox key={"497"} scoreMultiplier={5} divideVal={tempArray5[6]} id="497"/>
            <DropBox key={"498"} scoreMultiplier={5} divideVal={tempArray5[7]} id="498"/>
            <DropBox key={"499"} scoreMultiplier={5} divideVal={tempArray5[8]} id="499"/>
            <DropBox key={"500"} scoreMultiplier={5} divideVal={tempArray5[9]} id="500"/>
            </tr>
        , document.getElementById("stepTen"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9], array[10], array[11], array[12], array[13], array[14], array[15], array[16], array[17], array[18], array[19], array[20], array[21], array[22], array[23], array[24]])}
        {setTempArray2([array[25], array[26], array[27], array[28], array[29], array[30], array[31], array[32], array[33], array[34], array[35], array[36], array[37], array[38], array[39], array[40], array[41], array[42], array[43], array[44], array[45], array[46], array[47], array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"501"} scoreMultiplier={5} divideVal={tempArray[0]} id="501"/>
            <DropBox key={"502"} scoreMultiplier={5} divideVal={tempArray[1]} id="502"/>
            <DropBox key={"503"} scoreMultiplier={5} divideVal={tempArray[2]} id="503"/>
            <DropBox key={"504"} scoreMultiplier={5} divideVal={tempArray[3]} id="504"/>
            <DropBox key={"505"} scoreMultiplier={5} divideVal={tempArray[4]} id="505"/> 
            <DropBox key={"506"} scoreMultiplier={5} divideVal={tempArray[5]} id="506"/>
            <DropBox key={"507"} scoreMultiplier={5} divideVal={tempArray[6]} id="507"/>
            <DropBox key={"508"} scoreMultiplier={5} divideVal={tempArray[7]} id="508"/>
            <DropBox key={"509"} scoreMultiplier={5} divideVal={tempArray[8]} id="509"/>
            <DropBox key={"510"} scoreMultiplier={5} divideVal={tempArray[9]} id="510"/>
            <DropBox key={"511"} scoreMultiplier={5} divideVal={tempArray[10]} id="511"/>
            <DropBox key={"512"} scoreMultiplier={5} divideVal={tempArray[11]} id="512"/>
            <DropBox key={"513"} scoreMultiplier={5} divideVal={tempArray[12]} id="513"/>
            <DropBox key={"514"} scoreMultiplier={5} divideVal={tempArray[13]} id="514"/>
            <DropBox key={"515"} scoreMultiplier={5} divideVal={tempArray[14]} id="515"/>
            <DropBox key={"516"} scoreMultiplier={5} divideVal={tempArray[15]} id="516"/>
            <DropBox key={"517"} scoreMultiplier={5} divideVal={tempArray[16]} id="517"/>
            <DropBox key={"518"} scoreMultiplier={5} divideVal={tempArray[17]} id="518"/>
            <DropBox key={"519"} scoreMultiplier={5} divideVal={tempArray[18]} id="519"/>
            <DropBox key={"520"} scoreMultiplier={5} divideVal={tempArray[19]} id="520"/>
            <DropBox key={"521"} scoreMultiplier={5} divideVal={tempArray[20]} id="521"/>
            <DropBox key={"522"} scoreMultiplier={5} divideVal={tempArray[21]} id="522"/>
            <DropBox key={"523"} scoreMultiplier={5} divideVal={tempArray[22]} id="523"/>
            <DropBox key={"524"} scoreMultiplier={5} divideVal={tempArray[23]} id="524"/>
            <DropBox key={"525"} scoreMultiplier={5} divideVal={tempArray[24]} id="525"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"526"} scoreMultiplier={5} divideVal={tempArray2[0]} id="526"/>
            <DropBox key={"527"} scoreMultiplier={5} divideVal={tempArray2[1]} id="527"/>
            <DropBox key={"528"} scoreMultiplier={5} divideVal={tempArray2[2]} id="528"/>
            <DropBox key={"529"} scoreMultiplier={5} divideVal={tempArray2[3]} id="529"/>
            <DropBox key={"530"} scoreMultiplier={5} divideVal={tempArray2[4]} id="530"/>
            <DropBox key={"531"} scoreMultiplier={5} divideVal={tempArray2[5]} id="531"/>
            <DropBox key={"532"} scoreMultiplier={5} divideVal={tempArray2[6]} id="532"/>
            <DropBox key={"533"} scoreMultiplier={5} divideVal={tempArray2[7]} id="533"/>
            <DropBox key={"534"} scoreMultiplier={5} divideVal={tempArray2[8]} id="534"/>
            <DropBox key={"535"} scoreMultiplier={5} divideVal={tempArray2[9]} id="535"/>
            <DropBox key={"536"} scoreMultiplier={5} divideVal={tempArray2[10]} id="536"/>
            <DropBox key={"537"} scoreMultiplier={5} divideVal={tempArray2[11]} id="537"/>
            <DropBox key={"538"} scoreMultiplier={5} divideVal={tempArray2[12]} id="538"/>
            <DropBox key={"539"} scoreMultiplier={5} divideVal={tempArray2[13]} id="539"/>
            <DropBox key={"540"} scoreMultiplier={5} divideVal={tempArray2[14]} id="540"/>
            <DropBox key={"541"} scoreMultiplier={5} divideVal={tempArray2[15]} id="541"/>
            <DropBox key={"542"} scoreMultiplier={5} divideVal={tempArray2[16]} id="542"/>
            <DropBox key={"543"} scoreMultiplier={5} divideVal={tempArray2[17]} id="543"/>
            <DropBox key={"544"} scoreMultiplier={5} divideVal={tempArray2[18]} id="544"/>
            <DropBox key={"545"} scoreMultiplier={5} divideVal={tempArray2[19]} id="545"/> 
            <DropBox key={"546"} scoreMultiplier={5} divideVal={tempArray2[20]} id="546"/>
            <DropBox key={"547"} scoreMultiplier={5} divideVal={tempArray2[21]} id="547"/>
            <DropBox key={"548"} scoreMultiplier={5} divideVal={tempArray2[22]} id="548"/>
            <DropBox key={"549"} scoreMultiplier={5} divideVal={tempArray2[23]} id="549"/>
            <DropBox key={"550"} scoreMultiplier={5} divideVal={tempArray2[24]} id="550"/>
            </tr>
        , document.getElementById("stepEleven"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"551"} scoreMultiplier={5} divideVal={array[0]} id="551"/>
            <DropBox key={"552"} scoreMultiplier={5} divideVal={array[1]} id="552"/>
            <DropBox key={"553"} scoreMultiplier={5} divideVal={array[2]} id="553"/>
            <DropBox key={"554"} scoreMultiplier={5} divideVal={array[3]} id="554"/>
            <DropBox key={"555"} scoreMultiplier={5} divideVal={array[4]} id="555"/> 
            <DropBox key={"556"} scoreMultiplier={5} divideVal={array[5]} id="556"/>
            <DropBox key={"557"} scoreMultiplier={5} divideVal={array[6]} id="557"/>
            <DropBox key={"558"} scoreMultiplier={5} divideVal={array[7]} id="558"/>
            <DropBox key={"559"} scoreMultiplier={5} divideVal={array[8]} id="559"/>
            <DropBox key={"560"} scoreMultiplier={5} divideVal={array[9]} id="560"/>
            <DropBox key={"561"} scoreMultiplier={5} divideVal={array[10]} id="561"/>
            <DropBox key={"562"} scoreMultiplier={5} divideVal={array[11]} id="562"/>
            <DropBox key={"563"} scoreMultiplier={5} divideVal={array[12]} id="563"/>
            <DropBox key={"564"} scoreMultiplier={5} divideVal={array[13]} id="564"/>
            <DropBox key={"565"} scoreMultiplier={5} divideVal={array[14]} id="565"/>
            <DropBox key={"566"} scoreMultiplier={5} divideVal={array[15]} id="566"/>
            <DropBox key={"567"} scoreMultiplier={5} divideVal={array[16]} id="567"/>
            <DropBox key={"568"} scoreMultiplier={5} divideVal={array[17]} id="568"/>
            <DropBox key={"569"} scoreMultiplier={5} divideVal={array[18]} id="569"/>
            <DropBox key={"570"} scoreMultiplier={5} divideVal={array[19]} id="570"/>
            <DropBox key={"571"} scoreMultiplier={5} divideVal={array[20]} id="571"/>
            <DropBox key={"572"} scoreMultiplier={5} divideVal={array[21]} id="572"/>
            <DropBox key={"573"} scoreMultiplier={5} divideVal={array[22]} id="573"/>
            <DropBox key={"574"} scoreMultiplier={5} divideVal={array[23]} id="574"/>
            <DropBox key={"575"} scoreMultiplier={5} divideVal={array[24]} id="575"/> 
            <DropBox key={"576"} scoreMultiplier={5} divideVal={array[25]} id="576"/>
            <DropBox key={"577"} scoreMultiplier={5} divideVal={array[26]} id="577"/>
            <DropBox key={"578"} scoreMultiplier={5} divideVal={array[27]} id="578"/>
            <DropBox key={"579"} scoreMultiplier={5} divideVal={array[28]} id="579"/>
            <DropBox key={"580"} scoreMultiplier={5} divideVal={array[29]} id="580"/>
            <DropBox key={"581"} scoreMultiplier={5} divideVal={array[30]} id="581"/>
            <DropBox key={"582"} scoreMultiplier={5} divideVal={array[31]} id="582"/>
            <DropBox key={"583"} scoreMultiplier={5} divideVal={array[32]} id="583"/>
            <DropBox key={"584"} scoreMultiplier={5} divideVal={array[33]} id="584"/>
            <DropBox key={"585"} scoreMultiplier={5} divideVal={array[34]} id="585"/>
            <DropBox key={"586"} scoreMultiplier={5} divideVal={array[35]} id="586"/>
            <DropBox key={"587"} scoreMultiplier={5} divideVal={array[36]} id="587"/>
            <DropBox key={"588"} scoreMultiplier={5} divideVal={array[37]} id="588"/>
            <DropBox key={"589"} scoreMultiplier={5} divideVal={array[38]} id="589"/>
            <DropBox key={"590"} scoreMultiplier={5} divideVal={array[39]} id="590"/>
            <DropBox key={"591"} scoreMultiplier={5} divideVal={array[40]} id="591"/>
            <DropBox key={"592"} scoreMultiplier={5} divideVal={array[41]} id="592"/>
            <DropBox key={"593"} scoreMultiplier={5} divideVal={array[42]} id="593"/>
            <DropBox key={"594"} scoreMultiplier={5} divideVal={array[43]} id="594"/>
            <DropBox key={"595"} scoreMultiplier={5} divideVal={array[44]} id="595"/> 
            <DropBox key={"596"} scoreMultiplier={5} divideVal={array[45]} id="596"/>
            <DropBox key={"597"} scoreMultiplier={5} divideVal={array[46]} id="597"/>
            <DropBox key={"598"} scoreMultiplier={5} divideVal={array[47]} id="598"/>
            <DropBox key={"599"} scoreMultiplier={5} divideVal={array[48]} id="599"/>
            <DropBox key={"600"} scoreMultiplier={5} divideVal={array[49]} id="600"/>
            </tr>
        , document.getElementById("stepTwelve"))}
        </tbody>
        </table>
        <p id="feedback"></p>
        <button id="nextBtn" onClick={()=> {resetSteps();resetLives(); nextLevel();}}>Next Level</button>
        </div>
        
        
    )
}

export default LevelFive;