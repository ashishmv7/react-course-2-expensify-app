import moment from 'moment'

const filterReducerdefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')

}

const filterReducer = (state = filterReducerdefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'

            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.sdate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.edate
            }
        default:
            return state
    }
}
export default filterReducer