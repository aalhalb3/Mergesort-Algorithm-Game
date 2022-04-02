import Number from "../Number";
import { App, changeLevel, emailEntered, getLevel } from "../../App";
import Numbers from "../Numbers";
import makeArray from "../makeRandomArray";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import $ from "jquery";
import {LevelTwo} from "./LevelTwo";
import axios from "axios";
import { MergeSortMenu } from "../../App";
let Timer = require('../Timer');
let ip = require('../../axiosIP');


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


function LevelOne(){
  
  const[array, setArray] = useState(makeArray(10))
  const[step, setStep] = useState(1) // store which step the player is at
  const[merging, setMerging] = useState(false); // When player reaches merging steps this changes to true
  const[tree, setTree] = useState({value: array, left:null, right:null})
  const [timerStart, setTimerStart] = useState(false);
  const[paused, setPaused] = useState(false);
  const[innerStep, setInnerStep] = useState(1);
  changeLevel(1)
  
  useEffect(()=>{
    $("#stepTwo").show()
    $("#stepThree").show()
    $("#stepFour").show()
    $("#stepFive").show()
    $("#stepSix").show()
    $("#stepSeven").show()
    $("#stepEight").show()
    $("#nextBtn").show()
  }, []) 

  let feedback = ["Split the Array as Evenly as Possible", "Select Left/Right Subarray", "Split the Selected Array", "Split the Subarray as Evenly as Possible", "Merge Arrays Back Together", "Select the Other Subarray and Merge", "Merge those Subarrays back together", "Finally, Merge the Remaining Subarrays Back Into the Original Array", "An array of length 1 cannot be split, ready for merge"]

  
  let tempArray = [];

  createTree(tree); // function to build the full tree by dividing the array till array length becomes one
  
  const onClick = () => {
    if(!merging && !paused)
      setStep(step+1)
    else if(merging && !paused)
      setStep(step-1) // if in merging steps then go backwards(decrement step)

    if(step != 0){
      tempArray = [];
      print(tree, step+1)
      if(merging){
        for(let u in tempArray){
          tempArray[u] = mergeSort(tempArray[u])
        }
      }
    }
    
    switch(step){
      case 1:
        ReactDOM.render(<NumbersRow array={tempArray} rowNum={1}/>, document.getElementById('stepOne'));
        document.getElementById("feedback").innerText = feedback[0];
        if(merging && !paused){
          ReactDOM.render(<></>, document.getElementById('stepTwo'));
          document.getElementById("feedback").innerText = feedback[4];
          setPaused(true);
          setStep(1);
        }
        else if(merging && paused){
          switch(innerStep){
            case 1:
              document.getElementById("feedback").innerText = `Compare the two lists. Take whichever value is smallest from the front of each list and merge it up. Keep going until both are empty.`;
              document.getElementById("1-1-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-1-2").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-1-3").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-1-4").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-1-5").style.backgroundColor = "CornflowerBlue";
              setInnerStep(innerStep + 1);
              break;
            case 2:
              document.getElementById("feedback").innerText = `Compare the two lists. Take whichever value is smallest from the front of each list and merge it up. Keep going until both are empty.`;
              document.getElementById("1-1-1").style.backgroundColor = "aqua";
              document.getElementById("1-1-2").style.backgroundColor = "aqua";
              document.getElementById("1-1-3").style.backgroundColor = "aqua";
              document.getElementById("1-1-4").style.backgroundColor = "aqua";
              document.getElementById("1-1-5").style.backgroundColor = "aqua";
              document.getElementById("1-2-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-2-2").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-2-3").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-2-4").style.backgroundColor = "CornflowerBlue";
              document.getElementById("1-2-5").style.backgroundColor = "CornflowerBlue";
              setInnerStep(1);
              setStep(0);
              setPaused(false);
              break;
          }
        }
        break;
      case 2:
        ReactDOM.render(<NumbersRow array={tempArray} rowNum={2}/>, document.getElementById('stepTwo'))
        document.getElementById("feedback").innerText = feedback[1];
        if(merging && !paused){
          ReactDOM.render(<></>, document.getElementById('stepThree'));
          document.getElementById("feedback").innerText = feedback[5];
          setPaused(true);
          setStep(2);
        }
        else if(merging && paused){
          switch(innerStep){
            case 1:
              document.getElementById("feedback").innerText = `Compare the two lists. Take whichever value is smallest from the front of each list and merge it up. Keep going until both are empty.`;
              document.getElementById("2-1-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-1-2").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-2-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-2-2").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-2-3").style.backgroundColor = "CornflowerBlue";
              setInnerStep(innerStep + 1);
              break;
            case 2:
              document.getElementById("feedback").innerText = `Compare the two lists. Take whichever value is smallest from the front of each list and merge it up. Keep going until both are empty.`;
              document.getElementById("2-1-1").style.backgroundColor = "aqua";
              document.getElementById("2-1-2").style.backgroundColor = "aqua";
              document.getElementById("2-2-1").style.backgroundColor = "aqua";
              document.getElementById("2-2-2").style.backgroundColor = "aqua";
              document.getElementById("2-2-3").style.backgroundColor = "aqua";
              document.getElementById("2-3-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-3-2").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-4-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-4-2").style.backgroundColor = "CornflowerBlue";
              document.getElementById("2-4-3").style.backgroundColor = "CornflowerBlue";
              setInnerStep(1);
              setStep(1);
              setPaused(false);
              break;
          }
        }
        break;
      case 3:
        ReactDOM.render(<NumbersRow array={tempArray} rowNum={3}/>, document.getElementById('stepThree'));
        document.getElementById("feedback").innerText = feedback[2];
        if(merging && !paused){
          ReactDOM.render(<></>, document.getElementById('stepFour'));
          document.getElementById("feedback").innerText = feedback[6];
          setPaused(true);
          setStep(3);
        }
        else if(merging && paused){
          switch(innerStep){
            case 1:
              document.getElementById("feedback").innerText = `Comparing the values and merging them back into their array (minimum first)`;
              document.getElementById("3-1-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-2-1").style.backgroundColor = "CornflowerBlue";
              setInnerStep(innerStep + 1);
              break;
            case 2:
              document.getElementById("feedback").innerText = `Compare the two lists. Take whichever value is smallest from the front of each list and merge it up. Keep going until both are empty.`;
              document.getElementById("3-1-1").style.backgroundColor = "aqua";
              document.getElementById("3-2-1").style.backgroundColor = "aqua";
              document.getElementById("3-3-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-4-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-4-2").style.backgroundColor = "CornflowerBlue";
              setInnerStep(innerStep + 1);
              break;
            case 3:
              document.getElementById("feedback").innerText = `Comparing the values and merging them back into their array (minimum first)`;
              document.getElementById("3-3-1").style.backgroundColor = "aqua";
              document.getElementById("3-4-1").style.backgroundColor = "aqua";
              document.getElementById("3-4-2").style.backgroundColor = "aqua";
              document.getElementById("3-5-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-6-1").style.backgroundColor = "CornflowerBlue";
              setInnerStep(innerStep + 1);
              break;
            case 4:
              document.getElementById("feedback").innerText = `Compare the two lists. Take whichever value is smallest from the front of each list and merge it up. Keep going until both are empty.`;
              document.getElementById("3-5-1").style.backgroundColor = "aqua";
              document.getElementById("3-6-1").style.backgroundColor = "aqua";
              document.getElementById("3-7-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-8-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-8-2").style.backgroundColor = "CornflowerBlue";
              setInnerStep(1);
              setStep(2);
              setPaused(false);
              break;
          }
        }
        break;
      case 4:
        if(!paused){
          ReactDOM.render(<NumbersRow array={tempArray} rowNum={4}/>, document.getElementById('stepFour'));
          document.getElementById("feedback").innerText = feedback[3];
          setPaused(true);
          setStep(4);
        }
        if(paused){
          switch(innerStep){
            case 1:
              document.getElementById("feedback").innerText = feedback[8];
              document.getElementById("3-1-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-1-1").style.backgroundColor = "CornflowerBlue";
              setInnerStep(innerStep + 1);
              break;
            case 2:
              document.getElementById("feedback").innerText = feedback[8];
              document.getElementById("3-2-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-3-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-1-1").style.backgroundColor = "aqua";
              document.getElementById("4-1-1").style.backgroundColor = "aqua";
              setInnerStep(innerStep + 1);
              break;
            case 3:
              document.getElementById("feedback").innerText = feedback[8];
              document.getElementById("3-3-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-5-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-2-1").style.backgroundColor = "aqua";
              document.getElementById("4-3-1").style.backgroundColor = "aqua";
              setInnerStep(innerStep + 1);
              break;
              case 4:
              document.getElementById("feedback").innerText = feedback[8];
              document.getElementById("3-5-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-9-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-3-1").style.backgroundColor = "aqua";
              document.getElementById("4-5-1").style.backgroundColor = "aqua";
              setInnerStep(innerStep + 1);
              break;
              case 5:
              document.getElementById("feedback").innerText = feedback[8];
              document.getElementById("3-6-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-11-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-5-1").style.backgroundColor = "aqua";
              document.getElementById("4-9-1").style.backgroundColor = "aqua";
              setInnerStep(innerStep + 1);
              break;
              case 6:
              document.getElementById("feedback").innerText = feedback[8];
              document.getElementById("3-7-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-13-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("3-6-1").style.backgroundColor = "aqua";
              document.getElementById("4-11-1").style.backgroundColor = "aqua";
              setInnerStep(1);
              setStep(5);
              setPaused(false);
              break;             
          }
        }
        break;
      case 5:
        if(!paused){
          document.getElementById("feedback").innerText = `Now compare the values that are not an array of length 1`;
          document.getElementById("3-7-1").style.backgroundColor = "aqua";
          document.getElementById("4-13-1").style.backgroundColor = "aqua";
          setMerging(true);
          setPaused(true);
          setStep(5);
        }
        else if(paused){
          switch(innerStep){
            case 1:
              document.getElementById("feedback").innerText = `Comparing the values and merging them back into their array (minimum first)`;
              document.getElementById("4-7-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-8-1").style.backgroundColor = "CornflowerBlue";
              setInnerStep(innerStep + 1);
              break;
            case 2:
              document.getElementById("feedback").innerText = `Comparing the values and merging them back into their array (minimum first)`;
              document.getElementById("4-7-1").style.backgroundColor = "aqua";
              document.getElementById("4-8-1").style.backgroundColor = "aqua";
              document.getElementById("4-15-1").style.backgroundColor = "CornflowerBlue";
              document.getElementById("4-16-1").style.backgroundColor = "CornflowerBlue";
              setInnerStep(1);
              setStep(step - 2);
              setPaused(false);
              break;
          }
        }
        break;

      case 0: // case 0 is the last step in the level 
        ReactDOM.render(<></>, document.getElementById('stepOne'));
        document.getElementById("feedback").innerText = feedback[7];
        document.getElementById('nextBtn').onclick = nextLevel;
        document.getElementById('nextBtn').innerText = "Next Level";
        tree.value = mergeSort([...array])
        break;        
    }
  }
    

  function createTree(node){
    let nodeValue = node.value;
    if(nodeValue.length > 1){   //if the length of the array in the current node is more than 1 then split the array into left and right nodes and recurse  
      node.left = {value: [...nodeValue].splice(0, nodeValue.length/2), left: null, right: null}
      node.right = {value: [...nodeValue].splice(nodeValue.length/2, nodeValue.length), left: null, right: null}
      createTree(node.left);
      createTree(node.right)
    } else{    // else only copy the node value to the left node (so that the last dividing step still show the arrays that had 1 element from the previous step)
      node.left = {value: node.value, left: null, right: null}
      node.right = {value: [], left: null, right: null}
    }
    
  }

  //function to get the nodes in a specific level of the tree
  function print(node, level){
    if (node == null)
      return;
    if (level == 1){
      tempArray.push(node.value)
    }
    else if (level > 1)
    {
      print(node.left, level-1);
      print(node.right, level-1);
    }
  }

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
  
    ReactDOM.render(<LevelTwo />, document.getElementById('root'));

  }

  //Display timer
  if(timerStart == false){
    Timer.resetTimer();
    Timer.startTimer();
    
    setTimerStart(true);
  }
  

  return(
    <div>
      
      <button onClick = {onClick} id='nextBtn' >Next Step</button>
        <div class = "timer" id="timer">00:00:00</div>
      <br/>
      <p id="feedback" style ={{textAlign: "center"}}>Merge Sort Algorithm</p> 
      <table style={{marginLeft:"35%"}}><tr><Numbers array={tree.value}/></tr></table>
          
    </div>
  )
}


//let rowNum = 0;

//React component
function NumbersRow(props){
  let i = 0;
  return(
    <table style={props.style}><tr>
      {props.array.map(a => (
        <Numbers array={a} rowID={props.rowNum} arrayID={++i}/>
      ))}
      </tr></table>
  )
}


export default LevelOne;