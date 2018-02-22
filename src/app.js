
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filter'
import getVisibileExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const store = configureStore()
store.subscribe(() => {
    const state = store.getState()
    const visibleExpneses = getVisibileExpenses(state.expenses, state.filterReducer)
    
})



store.dispatch(setTextFilter(''))
const jsx = (
    <Provider store={store}>
        <AppRouter /></Provider>

)

ReactDOM.render(jsx, document.getElementById('app'));






