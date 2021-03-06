import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashBoardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpenesePage from '../components/EditExpenesePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'



const AppRouter = ()=>(
    <BrowserRouter>
        <div><Header /><Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpenesePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>

    </BrowserRouter>
)
export default AppRouter