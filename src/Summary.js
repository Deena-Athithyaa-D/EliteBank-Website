import React, { useState, useEffect } from "react";

const Summary = ({ acc }) => {
  const [incomes, setIncomes] = useState(0);
  const [out, setOut] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    const calculateSummary = () => {
      const filteredIncomes = acc.movements.filter((mov) => mov > 0);
      const filteredOut = acc.movements.filter((mov) => mov < 0);

      const totalIncomes = filteredIncomes.reduce((acc, mov) => acc + mov, 0);
      const totalOut = filteredOut.reduce((acc, mov) => acc + mov, 0);
      const totalInterest = filteredIncomes
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, int) => acc + int, 0);

      setIncomes(totalIncomes);
      setOut(Math.abs(totalOut));
      setInterest(totalInterest);
    };

    calculateSummary();
  }, [acc]);

  return (
    <div className="bank-summary">
      <p className="summary-label">In</p>
      <p className="summary-value summary__value--in">{incomes}€</p>
      <p className="summary-label">Out</p>
      <p className="summary-value summary-value--out">{out}€</p>
      <p className="summary-label">Interest</p>
      <p className="summary-value summary-value--interest">{interest}€</p>
    </div>
  );
};

export default Summary;
