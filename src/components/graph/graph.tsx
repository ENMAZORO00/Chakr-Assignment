import React from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Colors} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
)

const Graph = () => {

 var mydata;
fetch('http://localhost:8000/api/data')
  .then(data => {
       mydata=data;
  })
  .catch(error => {
    console.error(error);
  });

 const  data= {
   labels: ['2016', '2017', '2018', '2019', '2020', '2021','2022','2023'],
    datasets: [{
      label: '# of Votes',
      data: [10, 20, 50, 10, 20, 50,60,80],
      borderWidth: 1
    }]
  }
  const options={
    Colors:['black'],
    maintainAspectRatio:false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend:{
      labels:{
        fontSize:26,
      }
    }
  }

  return (
    <>
    <div>
      <Line
      
      data={data}
      height={'210px'}
      options={options}
      />
    </div>
    </>
  )
}

export default Graph