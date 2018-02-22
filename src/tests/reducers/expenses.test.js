import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])

})
test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expenses if  id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
test('should add expense', () => {
    const expense = {
     id:'idtest',
     description:'hello',
     note:'',
     createdAt:2000,
     amount:1500
    }
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,expense])
})
test('should edit expense', () => {
    const amount = 2000
    const action = {
       
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{
            amount
            
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].amount).toEqual(amount)
})
test('should not edit expense if not found', () => {
    const amount = 2000
    const action = {

        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount

        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})