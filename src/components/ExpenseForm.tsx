import { categories } from "../data/categories";

function ExpenseForm() {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        New Expense
      </legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Expense Name:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="what did you spend on?"
          className="bg-slate-100 p-2"
          name="expenseName"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="amount spent"
          className="bg-slate-100 p-2"
          name="amount"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Category:
        </label>
        <select name="category" id="category" className="bg-slate-100 p-2">
          <option value="">--- choose ---</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase"
        value="track expense"
      />
    </form>
  );
}

export default ExpenseForm;
