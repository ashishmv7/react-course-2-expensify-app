import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const NotFoundPage = () =>
    (<div><p>Not Found</p><NavLink to="/">Gohome</NavLink></div>)
    export default NotFoundPage