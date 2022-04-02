import { draggedItem, deductLives, resetLives, getLives, resetSteps, setDraggedItem, changeLevel, getLevel } from "../App";
import { useEffect, useState } from "react";
import { setScore, getScore } from "./levels/LevelTwo";
import $ from "jquery";
import ReactDOM from 'react-dom';
import sike from '../Réponsefausse.mp3'
import ding from '../Ding.mp3'
import FailurePageMenu from "./FailurePageMenu";


const steps = ["Split the Array as Evenly as Possible by dragging the numbers given in the corresponding empty box", "Split Both the Left and Right Subarrays as evenly as possible","Split All Subarrays again","Split Subarrays that have more than one element", "Compare the 1st and 2nd array and merge the with smaller number first", "Compare the 1st and 2nd array and merge the with smaller number first", "Compare the 1st and 2nd array and merge the with smaller number first","Finally, Merge The Last 2 Arrays Back Into the Original Array", "Now its Sorted!", "Fill arrays that don't need to be merged", "Compare the 6th and 7th array and merge the with smaller number", "Compare 3rd and 4th array", "Compare 5th and 6th array", "Compare 7th and 8th array", ""]
//const dumb = [" You can do this by picking the first row of boxes", " Split the first row of boxes of as evenly as possible", " Split the arrays even further", " Select the other ones and split them", " Split them as evenly as possible", " go to the other selected arrays and split them even further", " Go back to the array and split it", " Once all have been split, merge them back together", " make sure everythimg is in the correct order"]

function showBoxes(from, to){
    for(let i = from; i <= to; i++){
        $(`#box${i}`).show()
    }
}

//component to drop numbers in 
function DropBox(props){

    const [number, setNumber] = useState(0);
    const [divideVal, setDivideVal] = useState(props.divideVal);
    const [isDone, setIsDone] = useState(false);

    useEffect(()=>{$(`#${props.id}`).hide()})

    const scoreMultiplier = (props.scoreMultiplier == null)?1:props.scoreMultiplier;

    function dropNumber(){
        if(draggedItem === divideVal && !isDone){
            setNumber(draggedItem);
            document.getElementById("feedback").innerText = "Correct";
            setScore(getScore() + 1)
            console.log(getScore())
            if(getScore() == 10*scoreMultiplier){
                $("#stepTwo").show();
                document.getElementById("stepsTutorial").innerText = steps[1];
            }
            if(getScore() == 20*scoreMultiplier){
                $("#stepThree").show();
                document.getElementById("stepsTutorial").innerText = steps[2];
            }
            if(getScore() == 30*scoreMultiplier){
                $("#stepFour").show();
                document.getElementById("stepsTutorial").innerText = steps[3];  
            } 
            if(getScore() == 40*scoreMultiplier){
                $("#stepFive").show();
                showBoxes(41,42);
                document.getElementById("stepsTutorial").innerText = steps[4];
            }
            if(getScore() == 50*scoreMultiplier){
                $("#stepSix").show();
                showBoxes(51,53);
                document.getElementById("stepsTutorial").innerText = steps[5];   
            }
            if(getScore() == 60*scoreMultiplier){
                $("#stepSeven").show();
                showBoxes(61,65);
                document.getElementById("stepsTutorial").innerText = steps[6];   
            }
            if(getScore() == 70*scoreMultiplier){
                $("#stepEight").show();
                showBoxes(71,80);
                document.getElementById("stepsTutorial").innerText = steps[7];   
            }
            if(getScore() == 80*scoreMultiplier){
                if(scoreMultiplier == 1){
                    setScore(0)
                    $("#nextBtn").show();
                    document.getElementById("stepsTutorial").innerText = steps[8];  
                }else{
                    $("#stepNine").show();
                }     
            }
            if(getScore() == 90*scoreMultiplier){
                $("#stepTen").show();
            }
            if(getScore() == 100*scoreMultiplier){
                if(scoreMultiplier == 2){
                    setScore(0)
                    $("#nextBtn").show();
                }else{
                    $("#stepEleven").show();
                }     
            }
            if(getScore() == 120*scoreMultiplier){
                $("#stepTwelve").show();
            }
            if(getScore() == 130*scoreMultiplier){
                setScore(0)
                $("#nextBtn").show();
            }
            //Audio feedback for correct goes here
            const audio = new Audio(ding)
            audio.play();

            if(getScore() == 42){
                showBoxes(43,45); 
                document.getElementById("stepsTutorial").innerText = steps[9];
            }
            if(getScore() == 45){
                showBoxes(46,47);
                document.getElementById("stepsTutorial").innerText = steps[10];  
            }
            if(getScore() == 47){
                showBoxes(48,50); 
                document.getElementById("stepsTutorial").innerText = steps[9];    
            }
            if(getScore() == 53){
                showBoxes(54,55); 
                document.getElementById("stepsTutorial").innerText = steps[11];  
            }
            if(getScore() == 55){
                showBoxes(56,58); 
                document.getElementById("stepsTutorial").innerText = steps[12];   
            }
            if(getScore() == 58){
                showBoxes(59,60); 
                document.getElementById("stepsTutorial").innerText = steps[13];      
            }
            if(getScore() == 65){
                showBoxes(66,70);
                document.getElementById("stepsTutorial").innerText = steps[11];   
            }

            setIsDone(true);
        } else if(!isDone){
            $(`#${props.id}`).show()
            $(`#${props.id}`).fadeOut(400)

            //Audio feedback for wrong goes here goes here 
            const audio = new Audio(sike)
            audio.play();

            document.getElementById("feedback").innerText = "Wrong"
            
            if(deductLives() == 0){
                resetLives();
                resetSteps();
                setScore(0);
                ReactDOM.render(<FailurePageMenu/>, document.getElementById('root'))
            }else{
                document.getElementById("lives").innerText = ("Lives: " + getLives())
            }
        }

    }

    return(
    <td id={'box'+props.id} draggable onDragStart={() => {if(number != 0)setDraggedItem(number)}} className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => {dropNumber()}}>
        {(number == 0)?null:number}
        <div id={props.id} style={{color:"red"}}>X</div>
    </td>
    )    
}



export default DropBox;