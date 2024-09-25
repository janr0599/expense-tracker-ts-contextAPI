import { useMemo } from "react";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";

type ExpenseDetailProps = {
  expense: Expense;
};

function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  return (
    <div className="w-full bg-white shadow-lg rounded-lg border-b border-gray-200 flex items-center gap-5 p-10">
      <div>
        <img
          src={`/icon_${categoryInfo.icon}.svg`}
          alt="Categgory Icon"
          className="w-20"
        />
      </div>
      <div className="flex-1 space-y-3">
        <p className="text-sm font-bold uppercase text-slate-500">
          {categoryInfo.name}
        </p>
        <p>{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">
          {formatDate(expense.date!.toString())}
        </p>
      </div>
      <AmountDisplay amount={expense.amount} />
    </div>
  );
}

export default ExpenseDetail;
