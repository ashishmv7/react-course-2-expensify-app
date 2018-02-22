
export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text

    }
)
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
export const setStartDate = (sdate = undefined) => ({
    type: 'SET_START_DATE',
    sdate
})
export const setEndDate = (edate = undefined) => ({
    type: 'SET_END_DATE', edate
})