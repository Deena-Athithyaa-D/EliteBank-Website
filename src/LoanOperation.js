import React, { useState } from "react";

const LoanOperation = ({ currentUser, setCurrentUser }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const handleLoan = (e) => {
    e.preventDefault();
    const amount = Number(loanAmount);
    if (
      amount > 0 &&
      currentUser.movements.some((mov) => mov >= amount * 0.1)
    ) {
      const updatedLoanMovements = [...currentUser.movements, amount];
      setCurrentUser({ ...currentUser, movements: updatedLoanMovements });
      setLoanAmount("");
    } else {
      alert("Not eligible for the loan process");
      setLoanAmount("");
    }
  };
  return (
    <div className="operation operation--loan">
      <h2>Request loan</h2>
      <form className="form form--loan" onSubmit={handleLoan}>
        <input
          value={loanAmount}
          type="number"
          className="form__input form__input--loan-amount"
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <button className="form__btn form__btn--loan">&rarr;</button>
        <label className="form__label form__label--loan">Amount</label>
      </form>
    </div>
  );
};

export default LoanOperation;
