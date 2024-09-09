import React from 'react';
import { useSpring, animated } from 'react-spring';

const CurrencyInput = ({ currency, amount, onAmountChange, onCurrencyChange, currencies }) => {
    const inputAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0.9)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 300 },
    });

    return (
        <animated.div className="currency-input" style={inputAnimation}>
            <select value={currency} onChange={onCurrencyChange}>
                {currencies.map((curr) => (
                    <option key={curr} value={curr}>
                        {curr}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={amount}
                onChange={onAmountChange}
                placeholder="Amount"
                min="0"
            />
        </animated.div>
    );
};

export default CurrencyInput;