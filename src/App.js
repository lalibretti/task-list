import './App.css';
import React from 'react';
import ListItems from './Listitems';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput =this.handleInput.bind(this);
    this.addItem =this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !==''){
      const newItems = [...this.state.items, newItem];
      this.setState ({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  render() {
    return ( 
      <div className = 'App'>
        <header>
          <form id = "to-do-form"onSubmit={this.addItem}>
            <input type = 'text' placeholder = "Enter items to do!" value={this.state.currentItem.text} onChange={this.handleInput}/> 
              <button type = 'submit'> Add item </button> 
          </form> 
        </header> 
        <ListItems></ListItems>
      </div>
    );
  }
}

export default App;
