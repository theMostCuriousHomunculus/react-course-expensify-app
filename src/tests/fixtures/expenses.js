import moment from 'moment';

export default [{
    id: '1',
    description: 'abc',
    note: 'football',
    amount: 100,
    createdAt: 0
}, {
    id: '2',
    description: 'ghi',
    note: 'tennis',
    amount: 500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'def',
    note: '',
    amount: 225,
    createdAt: moment(0).add(4, 'days').valueOf()
}];