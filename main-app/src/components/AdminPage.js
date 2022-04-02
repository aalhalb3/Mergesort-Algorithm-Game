import axios from "axios";
import { Bar } from 'react-chartjs-2';
import { HomePage } from "../App";
import ReactDOM from 'react-dom';

let userLevelTime;
let LevelOneTime = [];
let LevelOneTimeSum = 0;
let LevelTwoTime = [];
let LevelTwoTimeSum = 0;
let LevelThreeTime = [];
let LevelThreeTimeSum = 0;
let LevelFourTime = [];
let LevelFourTimeSum = 0;
let LevelFiveTime = [];
let LevelFiveTimeSum = 0;

let LevelOneTimeAvg = 0;
let LevelTwoTimeAvg = 0;
let LevelThreeTimeAvg = 0;
let LevelFourTimeAvg = 0;
let LevelFiveTimeAvg = 0;

let ip = require('../axiosIP');
console.log(`${ip.getIP()}user-time`)
axios({
  method: "GET",
  url: `${ip.getIP()}user-time`
}).then(res => {
  userLevelTime = res;
  for(let i in res.data){
    LevelOneTime.push(res.data[i].LevelOneTime)
    LevelTwoTime.push(res.data[i].LevelTwoTime)
    LevelThreeTime.push(res.data[i].LevelThreeTime)
    LevelFourTime.push(res.data[i].LevelFourTime)
    LevelFiveTime.push(res.data[i].LevelFiveTime)
  }

  for(let i = 0; i<LevelOneTime.length; i++){
    LevelOneTimeSum += LevelOneTime[i];
    if(LevelOneTime[i] != null){
      LevelOneTimeAvg++
    }
  }

  for(let i = 0; i<LevelTwoTime.length; i++){
    LevelTwoTimeSum += LevelTwoTime[i];
    if(LevelTwoTime[i] != null){
      LevelTwoTimeAvg++
    }
  }

  for(let i = 0; i<LevelThreeTime.length; i++){
    LevelThreeTimeSum += LevelThreeTime[i];
    if(LevelThreeTime[i] != null){
      LevelThreeTimeAvg++
    }
  }

  for(let i = 0; i<LevelFourTime.length; i++){
    LevelFourTimeSum += LevelFourTime[i];
    if(LevelFourTime[i] != null){
      LevelFourTimeAvg++
    }
  }

  for(let i = 0; i<LevelFiveTime.length; i++){
    LevelFiveTimeSum += LevelFiveTime[i];
    if(LevelFiveTime[i] != null){
      LevelFiveTimeAvg++
    }
  }
  
  LevelOneTimeAvg = LevelOneTimeSum/LevelOneTimeAvg;
  LevelTwoTimeAvg = LevelTwoTimeSum/LevelTwoTimeAvg;
  LevelThreeTimeAvg = LevelThreeTimeSum/LevelThreeTimeAvg;
  LevelFourTimeAvg = LevelFourTimeSum/LevelFourTimeAvg;
  LevelFiveTimeAvg = LevelFiveTimeSum/LevelFiveTimeAvg;
});


const AdminPage = () => {
  console.log(LevelOneTimeAvg);
  console.log(LevelTwoTimeAvg);
  console.log(LevelThreeTimeAvg);
  console.log(LevelFourTimeAvg);
  console.log(LevelFiveTimeAvg);
  
  const data = {
    labels: ['Level 1', 'Level 2', 'Level 3',
             'Level 4', 'Level 5'],
    datasets: [
      {
        label: 'Time',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [LevelOneTimeAvg, LevelTwoTimeAvg, LevelThreeTimeAvg, LevelFourTimeAvg, LevelFiveTimeAvg]
      }
    ]
  }

  return(
    <div>
        <Bar
          data={data}
          options={{
            title:{
              display:true,
              text:'Average Time Spent per Level',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            maintainAspectRatio:false
          }}
          height={400}
          width={600}
        />

        <div><button onClick= {()=> {ReactDOM.render(<HomePage/>, document.getElementById('root'))}}>HOME PAGE</button></div>
    </div>
  );
}

export default AdminPage;