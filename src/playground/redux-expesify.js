import {createStore,CombineReducers, combineReducers} from 'redux'
import uuid from 'uuid'

const addExpense =({description='',note='',amount=0,createdAt=0}={})=>
({
type:'ADD_EXPENSE',
expense:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt
}
})
const removeExpense = ({id}= {}) =>
    ({
        type: 'REMOVE_EXPENSE',
        id
           
        
    })
const editExpense = (id,updates) =>
    ({
        type: 'EDIT_EXPENSE',
        id,updates


    })
    const setTextFilter = (text='')=>(
        {
            type:'SET_TEXT_FILTER',
            text

        }
    )
const sortByDate=()=>({
    type:'SORT_BY_DATE'
})
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
const setStartDate = (sdate= undefined) => ({
    type: 'SET_START_DATE',
    sdate
})
const setEndDate = (edate=undefined) => ({
    type: 'SET_END_DATE',edate
})
const expensesReducerdefaultState=[]
const expensesReducer =(state=expensesReducerdefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense]
        case 'REMOVE_EXPENSE':
         return state.filter((exp) => exp.id != action.id);
         case 'EDIT_EXPENSE':
         return state.map((expense)=>{
             if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.updates
                }
             }
             else{
                 return expense
             }
         })
        

        default:
        return state;
    }
}

const filterReducerdefaultState={
    text:'',
    sortBy: 'data',
    startDate: undefined,
    endDate: undefined

}
const filterReducer=(state=expensesReducerdefaultState,action)=>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
            case 'SORT_BY_DATE':
                return{
                    ...state,
                    sortBy:'date'
                }
            case'SORT_BY_AMOUNT':
                return{
                    ...state,
                    sortBy:'amount'
                
                }
        case 'SET_START_DATE':
        return{
                ...state,
                startDate:action.sdate
        }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.edate
            }
        default:
            return state
    }
}
const getVisibileExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !='number' || expense.createdAt >=startDate
        const endDateMatch=typeof endDate !='number' || expense.createdAt <=endDate
        //console.log(startDateMatch,endDateMatch)
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    })
    .sort((a,b)=>{
        if(sortBy=='date')
            {return a.createdAt<b.createdAt?1:-1

            }
        else if (sortBy=='amount') {
            return a.amount<b.amount?1:-1
            
        } })
}
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filterReducer:filterReducer
    }))
    store.subscribe(()=>{
        const state=store.getState()
        //console.log(state)

        const visibleExpneses=getVisibileExpenses(state.expenses,state.filterReducer)
        console.log(visibleExpneses)
    })
store.dispatch(setStartDate(100))
store.dispatch(setEndDate(2000))
store.dispatch(setTextFilter('rent'))
const expenseone=store.dispatch(addExpense({description:'rent',amount:10,createdAt:1000}))
const expensetwo1 = store.dispatch(addExpense({ description: 'rent', amount: 700, createdAt: 1000 }))
const expensetwo=store.dispatch(addExpense({ description: 'rent', amount: 500 ,createdAt:1000}))
//console.log(expenseone)
//store.dispatch(removeExpense({id:expenseone.expense.id}))
//console.log(store.getState())
///store.dispatch(editExpense(expensetwo.expense.id,{amount:600}))
store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter(''))
 store.dispatch(sortByAmount())
//store.dispatch(sortByDate())

// store.dispatch(setStartDate())
// store.dispatch(setEndDate(150))



// const demoState={
//     expenses:[{
//         id:'id1',
//         description:'fuel-disel',
//         note:'fuel for car',
//         amount:'1000',
//         createdAt:'0'

//     }],
//     filters:{
//         text:'fuel',
//         sortBy:'amount',
//         startDate:undefined,
//         endDate:undefined
//     }
// }

// const user={
//     name:'jen',
//     age:'22'
// }
// console.log({
//     age: 27,
//     ...user,
//     location: 'bangalore', 
    
// })