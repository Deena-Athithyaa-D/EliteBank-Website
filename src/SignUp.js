import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = ({ handleSignUp }) => {
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const history = useHistory();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || pin.trim() === "") {
      alert("Please enter both name and pin.");
      return;
    }

    const newUser = {
      owner: name,
      username: createUserUsername(name),
      movements: [1000],
      interestRate: 0,
      pin: Number(pin),
    };

    handleSignUp(newUser);

    history.push("/dashboard");
  };

  const createUserUsername = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUpSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin">PIN:</label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
