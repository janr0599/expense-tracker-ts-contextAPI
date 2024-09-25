import { v4 as uuidv4 } from "uuid";
import { DraftExpense, Expense } from "../types";

export type BudgetActions =
  | { type: "define-budget"; payload: { budget: number } }
  | { type: "show-modal" }
  | { type: "hide-modal" }
  | { type: "record-expense"; payload: { expense: DraftExpense } }
  | { type: "remove-expense"; payload: { id: Expense["id"] } }
  | { type: "get-expense-by-id"; payload: { id: Expense["id"] } }
  | { type: "update-expense"; payload: { expense: Expense } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingID: Expense["id"];
};

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
  editingID: "",
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: uuidv4(),
  };
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
  if (action.type === "define-budget") {
    console.log("define-budget");

    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === "show-modal") {
    return {
      ...state,
      modal: true,
    };
  }

  if (action.type === "hide-modal") {
    return {
      ...state,
      modal: false,
      editingID: "",
    };
  }

  if (action.type === "record-expense") {
    const expense = createExpense(action.payload.expense);

    return {
      ...state,
      modal: false,
      expenses: [...state.expenses, expense],
    };
  }

  if (action.type === "remove-expense") {
    const expenses = state.expenses.filter(
      (expense) => expense.id !== action.payload.id
    );

    return {
      ...state,
      expenses,
    };
  }

  if (action.type === "get-expense-by-id") {
    return {
      ...state,
      editingID: action.payload.id,
      modal: true,
    };
  }

  if (action.type === "update-expense") {
    const updatedExpenses = state.expenses.map((expense) =>
      expense.id === action.payload.expense.id
        ? action.payload.expense
        : expense
    );
    return {
      ...state,
      expenses: updatedExpenses,
      modal: false,
      editingID: "",
    };
  }
  return state;
};
