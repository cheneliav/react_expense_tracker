import React, { Component } from 'react';
import SingleInput from './single-input';


class ExpenseForm extends Component {

        constructor(props){
          super(props);
          this.state = { amt: '', cat: '', descr: '' };
          this.changeExpense = this.changeExpense.bind(this);
          this.onBtnClick = this.onBtnClick.bind(this);
          console.log(this.state);
      }
      
      changeExpense(e){
        this.setState({[e.target.id] : e.target.value});

      }
      
      onBtnClick(){
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' }, () => {
            console.log(this.state);
        });
    }
      
          render() {
              return (
                //   <div>
                //      <form>
                //      <SingleInput content={this.state.amt} controlFunc={this.changeExpense} id="amt" type="number" placeholder="$ amount?"/>
                //      <SingleInput content={this.state.cat} controlFunc={this.changeExpense} id="cat" type="text" placeholder="category?"/>
                //      <SingleInput content={this.state.descr} controlFunc={this.changeExpense} id="descr" type="text" placeholder="add description.."/>
                //     <button onClick={this.onBtnClick} type="button" id={this.props.id} >{this.props.buttonText}</button>
                //      </form>
                //   </div>

              <div>
               <form>
               <SingleInput content={this.state.amt} controlFunc={this.changeExpense} id="amt" type="number" placeholder="$ amount?"/>
               <SingleInput content={this.state.cat} controlFunc={this.changeExpense} id="cat" type="text" placeholder="category?"/>
               <SingleInput content={this.state.descr} controlFunc={this.changeExpense} id="descr" type="text" placeholder="add description.."/>
              <button onClick={this.onBtnClick} type="button" id={this.props.id} >{this.props.buttonText}</button>
               </form>
             </div>
              );
          }
      }
      

export default ExpenseForm;