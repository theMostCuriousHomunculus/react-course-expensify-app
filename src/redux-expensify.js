import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { useReducer } from 'react';
import EditExpensePage from './components/EditExpensePage';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('cof'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: '',
        description: '',
        note: '',
        amount: '',
        createdAt: ''
    }],
    filters: {
        text: '',
        sortBy: '',
        startDate: '',
        endDate: ''
    }
};