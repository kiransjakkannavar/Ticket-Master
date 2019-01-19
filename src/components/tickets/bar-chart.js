import React from'react'
import { Bar } from 'react-chartjs-2'

// to open Terminal shortcut ---->>> CTRL + `

export default class BarChart extends React.Component{
    barData(){
        let tickets = this.props.data
        
        let openTickets = tickets.filter((ticket)=>{
            return ticket.status === 'open'
        })
        let completedTickets = tickets.filter((ticket)=>{
            return ticket.status === 'completed'
        })
         let openSales = 0, openHr = 0, openTechnical = 0
         openTickets.forEach((ticket)=>{
             if(ticket.department === 'Sales' || ticket.department === 'sales'){
                 openSales++
             }else if(ticket.department === 'Hr'|| ticket.department === 'hr'){
                 openHr++
             }else{
                 openTechnical ++
             }
         })
         let completedSales = 0, completedHr = 0, completedTechnical = 0
         completedTickets.forEach((ticket)=>{
            if(ticket.department === 'Sales' || ticket.department === 'sales'){
                completedSales++
            }else if(ticket.department === 'Hr'|| ticket.department === 'hr'){
                completedHr++
            }else{
                completedTechnical ++
            }
         })
         let open= [openSales, openHr, openTechnical], completed= [completedSales, completedHr, completedTechnical]
         return [open,completed]         
    }

    render(){
        let data = this.barData()

        let chartData = {
            labels:['Sales', 'Hr', 'Technical'],
            datasets:[
                {
                    label: 'Open',
                    data: data[0],
                    backgroundColor: 'orange',
                    borderWidth: 1
                },{
                    label: 'Completed',
                    data: data[1],
                    backgroundColor: 'blue',
                    borderWidth: 1
                }
            ]
        }

        return (
            <div>
                <h3>Ticket Status </h3>
                <Bar
                    data={chartData}
                    width={100}
                    height={250}
                    options={{
                        maintainAspectRatio: false
                    }}
                    />
                
            </div>
        )
    }
}

                