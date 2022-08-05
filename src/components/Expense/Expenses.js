import { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
  const [chooseYear, setChooseYear] = useState('2020');
  const filterYearHandler = year => {
    setChooseYear(year);
  }
  const filterExpense = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === chooseYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={chooseYear} onFilterYear={filterYearHandler} />
        <ExpenseList item={filterExpense} />
      </Card>
    </div>
  )
}

export default Expenses;