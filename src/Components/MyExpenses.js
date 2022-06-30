import ExpensesDate from "./ExpenseDate";
import "./MyExpenses.scss";

function MyExpenses(props) {
  return (
    <div className="myexpenses">
      <p className="title">{props.title}</p>
      <p>{props.price}</p>
      <ExpensesDate date={props.vdate} />
    </div>
  );
}

export default MyExpenses;
