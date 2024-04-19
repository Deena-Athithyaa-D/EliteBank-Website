import React, { useState } from "react";

const TopNavigation = ({ currentUser, setCurrentUser, accounts }) => {
  const [inputLoginUsername, setInputLoginUsername] = useState("");
  const [inputLoginPin, setInputLoginPin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = accounts.find(
      (acc) =>
        acc.username === inputLoginUsername && acc.pin === Number(inputLoginPin)
    );
    if (user) {
      setCurrentUser(user);
      setInputLoginUsername("");
      setInputLoginPin("");
    } else {
      alert("Invalid username or PIN. Please try again.");
    }
  };

  return (
    <nav>
      {currentUser ? (
        <p className="welcome">Welcome, {currentUser.owner}!</p>
      ) : (
        <p className="welcome">Log in to get started</p>
      )}
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="Logo"
        className="logo"
      />
      <form className="login" onSubmit={handleLogin}>
        <input
          type="text"
          value={inputLoginUsername}
          onChange={(e) => setInputLoginUsername(e.target.value)}
          placeholder="Username"
          className="login-input "
        />
        <input
          type="password"
          value={inputLoginPin}
          onChange={(e) => setInputLoginPin(e.target.value)}
          placeholder="PIN"
          className="login-input "
        />
        <button className="login-btn" type="submit">
          &rarr;
        </button>
      </form>
    </nav>
  );
};

export default TopNavigation;
