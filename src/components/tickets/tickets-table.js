import React from 'react'
import axios from 'axios'
import TicketRow from './tickets-row'


export default class TicketsTable extends React.Component{
    constructor(){
        super()
        this.statusUpdate = this.statusUpdate.bind(this)
    }
   
    
    componentDidMount(){
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=f44c6b87e09affa3`).then((response)=>{
            console.log(response.data)
            this.props.setTicketState(response.data)
        })
    }

    statusUpdate(data){
        this.props.updateStatus(data)
    }

    render(){
        
        return(            
            <div>
                <table border ='2'>
                    <thead>
                        <tr>
                            <th> Code </th>
                            <th> Name </th>
                            <th> Department </th>
                            <th> Priority </th>
                            <th> Message </th>
                            <th> Status </th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(ticket => {
                            return <TicketRow key={ticket.ticket_code} data={ticket} statusUpdate={this.statusUpdate}/>
                        })}                        
                    </tbody>
                </table>
            </div>
        )
    }
}
