import React, { useState, useEffect } from "react";

const Balance = ({ acc }) => {
  // Access movements array from the account object
  const movementsArray = acc.movements;

  const [balance, setBalance] = useState(0);
  const currentDate = new Date();

  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  useEffect(() => {
    if (Array.isArray(movementsArray)) {
      const calculatedBalance = movementsArray.reduce(
        (acc, mov) => acc + mov,
        0
      );
      setBalance(calculatedBalance);
    }
  }, [movementsArray]);

  return (
    <div className="balance-container">
      <div>
        <p className="balance-label">Current balance</p>
        <p className="balance-date">
          As of <span className="date">{formattedDate}</span>
        </p>
      </div>
      <p className="balance-value">{balance}₹</p>
    </div>
  );
};

export default Balance;
