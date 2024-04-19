import React, { useState, useEffect } from "react";
import TopNavigation from "./TopNavigation";
import Balance from "./Balance";
import Movements from "./Movements";
import Summary from "./Summary";
import TransferOperation from "./TransferOperation";
import LoanOperation from "./LoanOperation";
import CloseAccount from "./CloseAccount";
import "./App.css";

const createUsernames = function (accs) {
  return accs.map((acc) => ({
    ...acc,
    username: acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join(""),
  }));
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Create usernames for initial accounts
    const initialAccounts = createUsernames([
      {
        owner: "Deena Athithyaa",
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
      },

      {
        owner: "Balaji",
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
      },
      {
        owner: "Sachive Anand",
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
      },
      {
        owner: "Aravind",
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
      },
    ]);
    setAccounts(initialAccounts);
  }, []);

  return (
    <div className="App">
      <TopNavigation
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        accounts={accounts}
        setAccounts={setAccounts}
      />
      <main className="app">
        {currentUser && <Balance acc={currentUser} />}
        {currentUser && <Movements acc={currentUser} />}
        {currentUser && <Summary acc={currentUser} />}
        {currentUser && (
          <TransferOperation
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            accounts={accounts}
            setAccounts={setAccounts}
          />
        )}
        {currentUser && (
          <LoanOperation
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}
        {currentUser && (
          <CloseAccount
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            accounts={accounts}
            setAccounts={setAccounts}
          />
        )}
      </main>
    </div>
  );
};

export default App;
