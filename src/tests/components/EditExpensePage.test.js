import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, expense, history, removeExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    expense = expenses[0];
    history = { push: jest.fn() };
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history} 
        expense={expense}
    />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle removeExpense correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expense.id
    });
});