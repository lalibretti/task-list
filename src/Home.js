import React from 'react';
import styled from 'styled-components';
//import './App.css';
import ListItems from './Listitems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

// class Todo extends React.Component {
//     constructor (props){
//       super(props);
//       this.state={
//         items:[],
//         currentItem:{
//           text:'',
//           key:''
//         }
//       }
//       this.addItem =this.addItem.bind(this);
//       this.handleInput =this.handleInput.bind(this);
//       this.deleteItem =this.deleteItem.bind(this);
//       this.setUpdate =this.setUpdate.bind(this);
//     }
  
//     addItem(e){
//       e.preventDefault();
//       const newItem = this.state.currentItem;
//       console.log(newItem);
//       if(newItem.text !==''){
//         const items = [...this.state.items, newItem];
//         this.setState ({
//           items: items,
//           currentItem:{
//             text:'',
//             key:''
//           }
//         })
//       }
//     }
  
//     handleInput(e){
//       this.setState({
//         currentItem:{
//           text:e.target.value,
//           key: Date.now()
//         }
//       })
//     }
  
//     deleteItem(key){
//       const filteredItems = this.state.items.filter(item => 
//         item.key !==key);
//         this.setState({
//           items:filteredItems
//         })
//     }
//     setUpdate (text, key) {
//       console.log('items:'+this.state.items);
//       const items = this.state.items;
//       items.map(item => {
//         if(item.key===key){
//           console.log(item.key+''+key)
//           item.text= text;
//         }
//       })
//       this.setState({
//         items:items
//       })
//     }
  
//     render() {
//       return ( 
//         <div className = 'Todo'>
//           <header>
//             <form id = "to-do-form"onSubmit={this.addItem}>
//               <input type = 'text' placeholder = "Enter items to do!" value={this.state.currentItem.text} onChange={this.handleInput}/> 
//                 <button type = 'submit'> Add item </button> 
//             </form> 
//             <p>{this.state.text}</p>
//           <ListItems items={this.state.items}   deleteItem = {this.deleteItem} setUpdate ={this.setUpdate} />
//           </header> 
//         </div>
//       );
//     }
//   }

//  export default Todo;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Todo = (props) => (
  <GridWrapper>
    <p>This is a paragraph and I am writing on the home page</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
  </GridWrapper>
)
