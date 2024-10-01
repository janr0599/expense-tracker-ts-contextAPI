import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

function BudgetTracker() {
  const { state, totalExpenses, remainingBudget, dispatch } = useBudget();

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2); // .toFixed returns a string with max 2 decimals, hence I used the plus sign at the beginning to return a number

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#DC2626" : "#3b82f6",
            trailColor: "#f5f5f5",
            textSize: 8,
            textColor: percentage === 100 ? "#DC2626" : "#3b82f6",
            pathTransitionDuration: 3,
          })}
          text={`${percentage}% Spent`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold"
          onClick={() => dispatch({ type: "reset-app" })}
        >
          Reset App
        </button>
        <AmountDisplay label="Budget" amount={state.budget} />
        <AmountDisplay label="Spent" amount={totalExpenses} />
        <AmountDisplay label="Available" amount={remainingBudget} />
      </div>
    </div>
  );
}

export default BudgetTracker;
