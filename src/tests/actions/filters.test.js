import moment from 'moment'
import {setStartDate,setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filter'
test('should generate set start date object',()=>{
    const action=setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        sdate:moment(0)
    })
})

test('should generate set end date action object',()=>{
    const action=setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        edate:moment(0)
    })
})
test('sort by amount',()=>{
    const action=sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test('set txt filter', () => {
    const action = setTextFilter("hello")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'hello'
    })
})