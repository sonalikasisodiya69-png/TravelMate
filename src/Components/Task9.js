import React, { useState } from "react";

function Balance() {
    const [balance, setBalance] = useState(1000);

    const handleDeposit = () => {
        setBalance(balance + 100);
    };

    const handleWithdraw = () => {
        if (balance >= 100) {
            setBalance(balance - 100);
        }
    };

    const reset = () => {
    setBalance(1000);
  };


    return (
        <div>
            <h2>
               9. {balance === 0 ? "Account Empty" : `Balance: $${balance}`}
            </h2>

            
            <button onClick={handleDeposit}>Deposit $100</button>
            &nbsp;
            <button onClick={handleWithdraw}>Withdraw $100</button>
            &nbsp;
            <button onClick={reset}>Reset</button>
      
        </div>
    );
}

export default Balance;