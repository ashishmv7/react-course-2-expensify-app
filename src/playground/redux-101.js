import {createStore} from 'redux'
const store=createStore((state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        
            return {
                count: state.count + action.incrementBy
             }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':{
            return{
                count:action.setBy
            }
        }
        default:
            return state 
    }
     console.log('running')

})
const unsubscribe=store.subscribe(() => {
    console.log( store.getState())
})
//console.log('101')
//console.log(store.getState())
const incrementCountBy = ({incrementBy=1}={}) => ({
    type: 'INCREMENT',
    incrementBy
    
})
const decrementCountBy = ({decrementBy=1} = {}) => ({
    type: 'DECREMENT',
    decrementBy

})
const setCountBy = ({ setBy = 0 } = {}) => ({
    type: 'SET',
    setBy

})
const reset=()=>({
    type: 'RESET'
})
store.dispatch(incrementCountBy({incrementBy:10}))
store.dispatch(incrementCountBy())
store.dispatch(decrementCountBy({ decrementBy: 5 }))
store.dispatch(setCountBy({ setBy: 5 }))
store.dispatch(setCountBy())

store.dispatch(reset())
//unsubscribe()
//console.log(store.getState())