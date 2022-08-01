import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
  const [chooseYear, setChooseYear] = useState('2020');
  const [expenseData, setExpenseData] = useState(props.data.filter(item => item.date.getFullYear().toString() === chooseYear));
  const filterYearHandler = year => {
    setChooseYear(year);
    // setExpenseData(prevState => {
    //   return prevState.filter(item => item.date.getFullYear().toString() === year);
    // })
    setExpenseData(props.data.filter(item => item.date.getFullYear().toString() === year));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={chooseYear} onFilterYear={filterYearHandler} />
        {expenseData.map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        )}
      </Card>
    </div>
  )
}

export default Expenses;