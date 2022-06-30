import "./App.css";
import MyExpenses from "./Components/MyExpenses";

function App() {
  const MyExpensess = [
    {
      title: "Shopping",
      price: 10000,
    },
    {
      title: "Insurance",
      price: 25000,
    },
    {
      title: "Travel",
      price: 15000,
    },
    {
      title: "Rental",
      price: 75000,
    },
    {
      title: "Broadband",
      price: 12000,
    },
  ];
  const date = ["Jan 10", "Feb 10", "Mar 10", "Apr 15", "May 12"];
  return (
    <div className="App">
      <header className="App-header">My Expenses</header>
      <div className="expenseswrapper">
        <MyExpenses
          title={MyExpensess[0].title}
          price={MyExpensess[0].price}
          vdate={date[0]}
        />
        <MyExpenses
          title={MyExpensess[1].title}
          price={MyExpensess[1].price}
          vdate={date[1]}
        />
        <MyExpenses
          title={MyExpensess[2].title}
          price={MyExpensess[2].price}
          vdate={date[2]}
        />
        <MyExpenses
          title={MyExpensess[3].title}
          price={MyExpensess[3].price}
          vdate={date[3]}
        />
        <MyExpenses
          title={MyExpensess[4].title}
          price={MyExpensess[4].price}
          vdate={date[4]}
        />
      </div>
    </div>
  );
}

export default App;
