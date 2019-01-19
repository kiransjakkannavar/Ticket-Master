import React from 'react'

export default class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText:''
      }
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);      
    }
    
    handleFilterTextChange(event) {
      event.preventDefault();
      this.props.searchHandle(event.target.value);
      console.log(event.target.value)
      this.setState({
        filterText: event.target.value
      })
    }  
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search By Code..."
            value={this.state.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
          
          </p>
        </form>
      );
    }
  }