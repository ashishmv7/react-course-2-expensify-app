import React from 'react'
import ReactDOM from 'react-dom'
import ExpenseForm from './ExpenseForm'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import {addExpense} from '../actions/expenses'
import {connect} from 'react-redux'

export class AddExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.addExpense(expense)
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
            <h1>add expense</h1>
            <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}


// const AddExpensePage = (props) =>
//     (<div>This is from addexpense component
//     <ExpenseForm onSubmit={(expense)=>{
//         console.log(expense)
//         props.onSubmit(expense)
//         props.history.push('/')
//     }}/>
    // </div>)
    const mapDispatchToProps =(dispatch)=>{
        return {
                onExpense:(expense)=>dispatch(addExpense(expense))
        }
    }
    export default connect(undefined,mapDispatchToProps)(AddExpensePage)