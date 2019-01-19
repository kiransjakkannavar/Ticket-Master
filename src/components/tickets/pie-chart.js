import React from "react";
import { Pie } from "react-chartjs-2"

export default class PieChart extends React.Component {

pieChartdata(){
    console.log(this.props.data)
    let tickets = this.props.data;
    let low = 0, medium = 0, high = 0;
    tickets.forEach(ticket=>{
        if(ticket.priority === 'High'|| ticket.priority === 'high'){
            high++;
        } else if(ticket.priority === 'Medium' || ticket.priority === 'medium'){
            medium++;
        } else {
            low++;
        }
    })
    let priorityData = [high,medium,low]
    return priorityData
}
render() {
    let priorityData = this.pieChartdata()
    let  pieChartdata =  {
        labels: ['High','Medium','Low'],
        datasets: [
          {
            data: priorityData,
            backgroundColor: [
              "red",
              "blue",
              "pink"            
            ],
            hoverBackgroundColor: [
              'orange',
              'purple',
              'green'
            ]
          }
        ]
      }
    
    
    return (
        <div>
            <h3>Ticket Priority: </h3>
            <Pie data={pieChartdata} options={{ responsive: true }} />

        </div>
              
    );
  }
}