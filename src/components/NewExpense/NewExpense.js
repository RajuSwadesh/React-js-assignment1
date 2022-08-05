import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseHandler = (expenseData) => {
        const expenseItem = {
            ...expenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseItem);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}
export default NewExpense;