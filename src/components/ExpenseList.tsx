import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseList() {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  const isEmptyExpenses = useMemo(
    () => filteredExpenses.length === 0,
    [filteredExpenses]
  );

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
      {isEmptyExpenses ? (
        <p className=" text-gray-600 font-bold text-2xl"> No expenses yet</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Expense List</p>
          {filteredExpenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
export default ExpenseList;
