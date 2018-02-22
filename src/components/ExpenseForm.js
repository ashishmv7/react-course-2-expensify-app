import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


const now = moment()
console.log(now.format())


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorState: ''

        }
        //console.log(props.expense.amount)
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }

    }
    onDateChange = (createdAt) => {
        // const date=e.target.value
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }


    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ errorState: 'Please enter the details correctly' }))
        }
        else {
            this.setState(() => ({ errorState: '' }))
            // console.log('submited')
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: now.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>expenseform
            <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="description" value={this.state.description} onChange={this.onDescriptionChange} autoFocus />
                    <input type="text" placeholder="amount" onChange={this.onAmountChange} value={this.state.amount} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onFocusChange={this.onFocusChange}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea onChange={this.onNoteChange} value={this.state.note} placeholder="add a note" />
                    <button>Add expense</button>
                    {this.state.errorState && <p>{this.state.errorState}</p>}

                </form>
            </div>
        )
    }
}