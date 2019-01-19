import React from 'react'
import axios from 'axios'
//import {Redirect} from 'react-router'


export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            department: '',
            priority:'',
            message:'',
            //redirect: false,
            //data:{}
        }
    }
    handleInputChange = (event)=>{
        console.log(event.target.value );
        this.setState({
            [event.target.name] : event.target.value       
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()        
        const formData= {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=f44c6b87e09affa3`, formData).then((response)=>{
            console.log(response.data)
            let newData = response.data 
            this.props.handleNewTicket(newData)
            // this.setState({
            //     data:newData
            // })       
        })
        // this.setState({
        //     redirect:true
        // })        
        
    }

    handleReset=(event)=>{
        event.preventDefault()
        this.setState({
            name:'',
            department:'',
            priority:'',
            message:''
        })
        this.refs.form.reset()
    }


    render(){
        // if(this.state.redirect){
        //     return <Redirect to='/'/>
        // }
        return (
            <div>
                <h4>Add Ticket</h4>
                <form onSubmit={this.handleSubmit} ref='form'>
                    <label> Name 
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/> <br/><br/>
                    </label>

                    <label> Department
                        {/* <input type='text' name="department" value={this.state.department} onChange={this.handleInputChange}/> <br/> <br/> */}
                        <select name='department' onChange={this.handleInputChange}>
                            <option value="">Select</option>
                            <option value="Technical">Technical</option>
                            <option value="Sales">Sales</option>
                            <option value="Hr">Hr</option>            
                    </select>
                    </label>

                    <label> Priority
                        <label><input type='radio' value='High' name='priority' onChange={this.handleInputChange}/> High </label>
                        <label><input type='radio' value='Medium' name='priority' onChange={this.handleInputChange} />Medium</label> 
                        <label><input type='radio' value='Low' name='priority' onChange={this.handleInputChange}/>Low</label> <br/><br/>
                    </label>

                    <label>Message </label><br/><textarea rows='6' cols='30' type='text' name='message' value={this.state.message} onChange={this.handleInputChange}></textarea>             
                     <br/><br/>

                    <input type='submit' className="btn btn-primary" value='Submit'/>
                    <input type= "reset" value="Reset" onClick={this.handleReset}/>

                </form>
            </div>            
        )
    }
}