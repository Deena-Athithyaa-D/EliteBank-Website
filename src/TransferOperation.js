import React, { useState } from "react";

const TransferOperation = ({
  currentUser,
  setCurrentUser,
  accounts,
  setAccounts,
}) => {
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  // Calculate current user's balance based on movements
  const currentUserBalance = currentUser.movements.reduce(
    (acc, movement) => acc + movement,
    0
  );

  const handleTransfer = (e) => {
    e.preventDefault();
    const amount = Number(transferAmount);
    const receiverAcc = accounts.find((acc) => acc.username === transferTo);

    if (!receiverAcc) {
      alert(
        "Receiver account not found. Please check the username and try again."
      );
      return;
    }

    if (
      amount > 0 &&
      currentUserBalance >= amount &&
      transferTo !== currentUser.username
    ) {
      // Update account balances
      const updatedSenderMovements = [...currentUser.movements, -amount];
      const updatedReceiverMovements = [...receiverAcc.movements, amount];

      // Update current user's movements
      setCurrentUser({
        ...currentUser,
        movements: updatedSenderMovements,
      });

      // Update receiver account's movements
      const updatedAccounts = accounts.map((acc) => {
        if (acc.username === receiverAcc.username) {
          return { ...acc, movements: updatedReceiverMovements };
        }
        return acc;
      });

      // Update accounts state
      setAccounts(updatedAccounts);

      // Clear input fields after transfer
      setTransferTo("");
      setTransferAmount("");
    } else {
      alert("Invalid transfer. Please check the details and try again.");
    }
  };

  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form " onSubmit={handleTransfer}>
        <input
          type="text"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
          className="form-input "
          placeholder="Transfer to"
        />
        <input
          type="number"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          className="form-input "
          placeholder="Amount"
        />
        <button type="submit" className="form-btn ">
          &rarr;
        </button>
      </form>
    </div>
  );
};

export default TransferOperation;
