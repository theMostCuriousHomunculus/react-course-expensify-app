import totalExpenses from '../../selectors/totalExpenses';
import expenses from '../fixtures/expenses';

test('should return 0 if not expenses', () => {
    const result = totalExpenses([]);
    expect(result).toBe(0);
});

test('should sum up a single expense', () => {
    const expense = expenses[0];
    const result = totalExpenses([expense]);
    expect(result).toBe(expense.amount);
});

test('should sum up multiple expenses', () => {
    const result = totalExpenses(expenses);
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});