import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filter'
import { DateRangePicker } from 'react-dates'

export class ExpenseListfilter extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)}
    onSortChange =(e)=>{
        e.target.value == 'date' ? this.props.sortByDate() : this.props.sortByAmount()

    }


    render() {
        return (<div>
            <input type="text" value={this.props.filters.text}
                onChange={ this.onTextChange}/>
            <select onChange={this.onSortChange}>
                <option value="date">date</option>
                <option value="amount">amount</option>

            </select>
            <DateRangePicker startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />

        </div>)
    }
}

const mapStateToPros = (state) => {
    return {
        filters: state.filterReducer
    }
}
const mapDispatchToProps=(dispatch)=>({
setTextFilter: (text)=> dispatch(setTextFilter(text)),
sortByDate:()=>dispatch(sortByDate()),
sortByAmount:()=>dispatch(sortByAmount()),
setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
setEndDate:(endDate)=>dispatch(setEndDate(endDate))
})
export default connect(mapStateToPros,mapDispatchToProps)(ExpenseListfilter)