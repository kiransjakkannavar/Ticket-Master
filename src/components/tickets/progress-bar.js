import React from 'react'
import { Line } from 'rc-progress'

export default class ProgressBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            percent:0
        }
    }
    
    progress(){
        let tickets = this.props.progress
    
        let result = tickets.filter(ticket =>{
            return ticket.status === 'completed'
        })
        let percent = Math.floor((result.length/tickets.length)*100);
        return percent;

    }   

    render(){
        let percent = this.progress()
        console.log(percent)        
        return (
            <div>
                <div className="text-center">{percent}%</div>
                 <Line percent={percent} />
            </div>
        )
    }
}