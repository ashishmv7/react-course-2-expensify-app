import React from 'react'

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
    <div><header>
        <h1>Extensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >Gohome </NavLink>
        <NavLink to="/create" activeClassName="is-active">ExpensePage </NavLink>
       
       
    </header></div>
)
export default Header