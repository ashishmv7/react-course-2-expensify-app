import {addExpense,editExpense,removeExpense} from '../../actions/expenses'

test('should setup remove expense action object',()=>{
    const action=removeExpense({id:'123'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    })

})
test('should setup edit expense',()=>{
    const action=editExpense(123,'hello')
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:123,
        updates:"hello"
    })
})
test('should setup add expense action object with provide values',()=>{
    const expenseData={
        description:'rent',
        amount:1000,
        createdAt:1001,
        note:'this was last mont bill'
    }
    const action=addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }

    })
})
test('add expense for default value',()=>{
    const expenseData={
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action=addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})