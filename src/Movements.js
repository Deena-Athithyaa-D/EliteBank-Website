import React, { useState, useEffect } from "react";

const Movements = ({ acc }) => {
  const movements = acc.movements;
  const [sorted, setSorted] = useState(false);
  const [sortedMovements, setSortedMovements] = useState([...movements]);

  useEffect(() => {
    const sortMovements = () => {
      const sortedArray = [...movements].sort((a, b) => a - b);
      setSortedMovements(sortedArray);
    };

    if (sorted) {
      sortMovements();
    } else {
      setSortedMovements(movements);
    }
  }, [sorted, movements]);

  return (
    <div className="movements">
      {sortedMovements.map((mov, i) => {
        const type = mov > 0 ? "deposit" : "withdrawal";
        return (
          <div key={i} className="movements-row">
            <div className={`movements-type movements-type--${type}`}>
              {i + 1} {type}
            </div>
            <div className="movements-value">{mov}€</div>
          </div>
        );
      })}
      <button onClick={() => setSorted(!sorted)} className="btn--sort">
        Sort
      </button>
    </div>
  );
};

export default Movements;
