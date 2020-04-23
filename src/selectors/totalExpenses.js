export default (filteredExpenses) => {
    return filteredExpenses.reduce((accumulator, expense) => expense.amount + accumulator, 0);
};