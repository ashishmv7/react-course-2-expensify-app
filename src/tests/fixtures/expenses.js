import moment from 'moment'
export default[{
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
},

{
    id: '2',
    description: 'rent',
    note: '',
    amount: 200,
    createdAt: moment(0).subtract(1, 'days').valueOf()
},

{
    id: '3',
    description: 'eee',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(1, 'days').valueOf()
}




]