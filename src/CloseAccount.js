import React, { useState } from "react";

const CloseAccountOperation = ({
  currentUser,
  setCurrentUser,
  accounts,
  setAccounts,
}) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPin, setInputPin] = useState("");

  const handleCloseAccount = (e) => {
    e.preventDefault();

    if (
      inputUsername === currentUser.username &&
      Number(inputPin) === currentUser.pin
    ) {
      const updatedAccounts = accounts.filter(
        (acc) => acc.username !== currentUser.username
      );
      setAccounts(updatedAccounts);
      setCurrentUser(null); // Reset currentUser after closing the account
    } else {
      alert("Invalid username or PIN. Please try again.");
    }

    // Clear input fields
    setInputUsername("");
    setInputPin("");
  };

  return (
    <div className="operation operation--close">
      <h2>Close account</h2>
      <form className="form form--close" onSubmit={handleCloseAccount}>
        <input
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          className="form__input form__input--user"
          placeholder="Enter username"
        />
        <input
          type="password"
          value={inputPin}
          onChange={(e) => setInputPin(e.target.value)}
          className="form__input form__input--pin"
          placeholder="Enter PIN"
          maxLength="6"
        />
        <button type="submit" className="form__btn form__btn--close">
          &rarr;
        </button>
        <label className="form__label">Confirm user</label>
        <label className="form__label">Confirm PIN</label>
      </form>
    </div>
  );
};

export default CloseAccountOperation;
