import filterReducer from '../../reducers/filter'
import moment from 'moment'

test('should setup default filter value',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})
test('should set sortby to amount',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should set sortby to date',()=>{
    const currentstate={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action ={type:'SORT_BY_DATE'}
    const state=filterReducer(currentstate,action)
    expect(state.sortBy).toBe('date')
})
test('should set startdate', () => {
    const currentstate = {
        text: '',
        startDate:moment(0),
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SET_START_DATE',sdate:moment(0)
 }
    const state = filterReducer(currentstate, action)
    expect(state.startDate).toEqual(moment(0))
})
test('should set enddate', () => {
    const currentstate = {
        text: '',
        startDate: undefined,
        endDate: moment(0),
        sortBy: 'amount'
    }
    const action = {
        type: 'SET_END_DATE', edate: moment(0)
    }
    const state = filterReducer(currentstate, action)
    expect(state.endDate).toEqual(moment(0))
})
test('should set textFilter', () => {
    const currentstate = {
        text: '',
        startDate:undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {
        type: 'SET_TEXT_FILTER', text: "checking"
    }
    const state = filterReducer(currentstate, action)
    expect(state.text).toEqual("checking")
})

