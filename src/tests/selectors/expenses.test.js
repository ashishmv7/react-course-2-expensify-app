import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should filter by text value',()=>{
    const filter={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }



    const result=selectExpenses(expenses,filter)
    expect(result).toEqual([expenses[2],expenses[1]])

})
test('should filter by startdate',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
        }
    const result = selectExpenses(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[0]])
})
test('should filter by enddate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filter)
    expect(result).toEqual([expenses[0], expenses[1]])
})
test('should sort by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})
test('should sort by amount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[1],expenses[0]])
})
