import React, { Component } from 'react';
//import {BrowserRouter, Route,Link} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import TicketsTable from './components/tickets/tickets-table'
import SearchBar from './components/tickets/search-bar'
import Form from './components/tickets/form'
import PriorityToolBar from './components/tickets/priority-toolbar'
import PieChart from './components/tickets/pie-chart';
import BarChart from './components/tickets/bar-chart'
import ProgressBar from './components/tickets/progress-bar'


class App extends Component {
  constructor(){
    super()
    this.state = {
      tickets: [],
      filteredTickets:[]      
    }
    this.setTicketState = this.setTicketState.bind(this)
    this.handleNewTicket = this.handleNewTicket.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.searchHandle = this.searchHandle.bind(this);
    this.handlePriority = this.handlePriority.bind(this)
  }
  setTicketState(data){
    this.setState({
      tickets : data,
      filteredTickets: data
    })
  }

  handleNewTicket(data){
    console.log(data)
    this.setState((prevState)=>{
      return{
        tickets: prevState.tickets.concat(data),
        filteredTickets: prevState.tickets.concat(data)
      }
    })    
  }

  updateStatus(data){
    let ticketId = this.state.tickets.map(ticket =>{
      return ticket.id
    })
    console.log(ticketId)
    let index = ticketId.indexOf(data.id)
    console.log(index)
    let updatedTickets = this.state.tickets
    updatedTickets.splice(index,1,data)
    console.log(updatedTickets)

    this.setState({
      tickets: updatedTickets,
      filteredTickets : updatedTickets
    })
  }

  searchHandle(input){    
    console.log(input)
    this.setState((prevState)=>{
      return {
        filteredTickets : prevState.tickets.filter((ticket)=>
        ticket.ticket_code.indexOf(input) !== -1 )        
      }      
    })        
  }

  handlePriority(priority){
    if(priority === 'All'){
      this.setState({
        filteredTickets: this.state.tickets
      })
    }else{
      this.setState((prevState)=>{
        return {
          filteredTickets : prevState.tickets.filter((ticket)=> ticket.priority === priority)
        }
      })
    }
    
  }
  
  render() {
    return (
      // {<BrowserRouter>}
        <div className="App">
        <h2>Ticket Master</h2>
        <SearchBar  searchHandle={this.searchHandle} />
        <Form handleNewTicket={this.handleNewTicket}/>
        {/* <Link to={
          {
            pathname: '/tickets/new'            
            }
        }> Add Ticket </Link>
        <Route path='/tickets/new' component={Form}/> */}
        <h3>Listing Tickets - {this.state.filteredTickets.length} <PriorityToolBar handlePriority={this.handlePriority}/> </h3>         
        <TicketsTable  data={this.state.filteredTickets} setTicketState={this.setTicketState} updateStatus={this.updateStatus}/>
        <ProgressBar progress={this.state.filteredTickets}/>
        <BarChart data={this.state.filteredTickets}/>
        <PieChart data = {this.state.filteredTickets}/>        
        

      </div>   
      
    );
  }
}

export default App;
