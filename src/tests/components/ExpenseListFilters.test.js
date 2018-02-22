import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListfilter} from '../../components/ExpenseListfilter'
import {filters,altfilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper

beforeEach(()=>{
    setTextFilter=jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper=shallow(<ExpenseListfilter
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate} />
        )
})
test('should render expenselistfilter correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should render expenselistfilter correctly with alt data correctly', () => {
    wrapper.setProps({
        filters:altfilters
    })
    expect(wrapper).toMatchSnapshot()
})
test('should render expenselistfilter text change', () => {
    const value='test'
    wrapper.find('input').at(0).simulate('change',{target:{value}})
    expect(setTextFilter).toHaveBeenCalledWith(value)
})
test('should render sort by date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByDate).toHaveBeenCalledWith()
})
test('should render sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByAmount).toHaveBeenCalledWith()
})
test('should handle date change', () => {
   wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:moment(0),endDate:moment(0).add(5,'days')})
   expect(setStartDate).toHaveBeenCalledWith(moment(0))
    expect(setEndDate).toHaveBeenCalledWith(moment(0).add(5, 'days'))
})
test('should date focus change', () => {
    const calendarFocused='startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused)
})