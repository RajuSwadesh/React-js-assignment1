import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');
    const [addButton, setAddButton] = useState(true);

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enterdAmount: '',
    //     enterDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle) {
            const expenseData = {
                title: enteredTitle,
                amount: enterdAmount,
                date: new Date(enterDate),
            };
            props.onSaveExpense(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
            setAddButton(true);
        } else {
            setAddButton(true);
        }
    }

    const addExpenseHandler = () => {
        setAddButton(false);
    }
    return (
        addButton === false ?
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enterdAmount} onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={enterDate} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type="cancel">Cancel</button>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            : (
                <div>
                    <button type="submit" onClick={addExpenseHandler}>Add New Expense</button>
                </div>
            )
    )
}
export default ExpenseForm;