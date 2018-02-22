import React from 'react'
import ReactDOM from 'react-dom'
import ExpenseList from './ExpenseList'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseListfilter from './ExpenseListfilter'

const ExpenseDashboardPage = () =>
    (<div>This is dash board component<ExpenseListfilter/><ExpenseList/></div>)
    export default ExpenseDashboardPage