import ReactDOM from 'react-dom';
import { MergeSortMenu, ChooseAlgoMenu, HomePage, getLevel } from '../App';

import {LevelTwo} from "./levels/LevelTwo";
import LevelThree from "./levels/LevelThree";
import LevelFour from "./levels/LevelFour";
import LevelFive from "./levels/LevelFive";

function FailurePageMenu(){

    function replayLevel(){
      // switch(getLevel()){
      //   case 2:
      //     ReactDOM.render(<LevelTwo/>, document.getElementById('root'));
      //   case 3:
      //     ReactDOM.render(<LevelThree/>, document.getElementById('root'));
      //   case 4:
      //     ReactDOM.render(<LevelFour/>, document.getElementById('root'));
      //   case 5:
      //     ReactDOM.render(<LevelFive/>, document.getElementById('root'));
      // }

      if (getLevel() == 2)
        ReactDOM.render(<LevelTwo/>, document.getElementById('root'));
      else if(getLevel() == 3)
        ReactDOM.render(<LevelThree/>, document.getElementById('root'));
      else if(getLevel() == 4)
        ReactDOM.render(<LevelFour/>, document.getElementById('root'));
      else if(getLevel() == 5)
        ReactDOM.render(<LevelFive/>, document.getElementById('root'));
    }

    return(
      <div>
        You Lost<br />
        <button onClick= {()=> {replayLevel()}}>Replay Level</button>
        <br />
        <button onClick= {()=> {ReactDOM.render(<MergeSortMenu/>, document.getElementById('root'))}}>Choose Another Level</button>
        <br />
        <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Pick Algorithm</button>
        <br />
        <button onClick= {()=> {ReactDOM.render(<HomePage/>, document.getElementById('root'))}}>Quit</button>
      </div>
    )
}

export default FailurePageMenu;