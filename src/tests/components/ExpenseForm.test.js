import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'


test('should render expenseform', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('errorState').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
})
test('should set description on input change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})
test('should set description on note change', () => {
    const value = 'new note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})
test('should set amount if valid input', () => {
    const value = "10.0"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})
test('should not set amount if in-valid input', () => {
    const value = "10.0a"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).not.toBe(value)
})
test('should call onsubmit prop for valid form submission',()=>{
    const onsubmitSpy=jest.fn()
    onsubmitSpy('test1','test2')
    expect(onsubmitSpy).toHaveBeenCalledWith('test1','test2')
})
test('should call onsubmit prop for valid form submission', () => {
    const onsubmitSpy = jest.fn()
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onsubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    })
    expect(wrapper.state('errorState')).toBe('')
    expect(onsubmitSpy).toHaveBeenCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    }
    )
})
test('should set new date on date change',()=>{
    const now=moment()
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})
test('should set calendar focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toBe(focused)
})