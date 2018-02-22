import React from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import {Link,NavLink} from 'react-router-dom'

export const ExpenseListItem=(props)=>(
    <div>
        <NavLink to={`/edit/${props.id}`} activeClassName='is-active'>
        <h1>{props.description}</h1></NavLink>
        <p>amount-{props.amount}</p>
        <p>date-{props.createdAt}</p>
            
      
        
    </div>

)
export default connect()(ExpenseListItem)