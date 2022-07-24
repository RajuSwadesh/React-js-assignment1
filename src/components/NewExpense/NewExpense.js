import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const saveExpenseHandler = (expenseData) => {
        const expenseItem = {
            ...expenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseItem);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    )
}
export default NewExpense;