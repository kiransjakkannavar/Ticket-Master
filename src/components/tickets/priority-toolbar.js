import React from 'react'

export default class PriorityToolBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.priorityHandle = this.priorityHandle.bind(this)
    }
    priorityHandle(event){
        console.log(event.target)
        this.props.handlePriority(event.target.value)
    }

    render(){
        return(
        <div className="btn-group" role="group" >
            <button type="button" className="btn btn-secondary" value='All' onClick={this.priorityHandle}>All</button>
            <button type="button" className="btn btn-secondary" value='High' onClick={this.priorityHandle}>High</button>
            <button type="button" className="btn btn-secondary" value='Medium' onClick={this.priorityHandle}>Medium</button>
            <button type="button" className="btn btn-secondary" value='Low' onClick={this.priorityHandle}>Low</button>
        </div>
        )
    }
}