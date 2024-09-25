import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseList() {
  const { state } = useBudget();
  const isEmptyExpenses = useMemo(
    () => state.expenses.length === 0,
    [state.expenses]
  );

  return (
    <div className="mt-10">
      {isEmptyExpenses ? (
        <p className=" text-gray-600 font-bold text-2xl"> No expenses yet</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Expense List</p>
          {state.expenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
export default ExpenseList;
