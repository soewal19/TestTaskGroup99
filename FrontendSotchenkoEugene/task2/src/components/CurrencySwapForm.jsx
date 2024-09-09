import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import CurrencyInput from './CurrencyInput';
import { setFromCurrency, setToCurrency, setAmount, selectCurrencyState } from '../store/currencySlice';

const CurrencySwapForm = () => {
    const dispatch = useDispatch();
    const { fromCurrency, toCurrency, amount } = useSelector(selectCurrencyState);
    const [currencies, setCurrencies] = useState([]);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [error, setError] = useState('');
    const [formVisible, setFormVisible] = useState(false);

    const formAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: formVisible ? 1 : 0, transform: `translateY(${formVisible ? 0 : -20}px)` },
        config: { duration: 300 },
    });

    useEffect(() => {
        setFormVisible(true);
        fetch('https://interview.switcheo.com/prices.json')
            .then((response) => response.json())
            .then((data) => {
                const availableCurrencies = Object.keys(data);
                setCurrencies(availableCurrencies);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleSwap = (e) => {
        e.preventDefault();
        if (amount <= 0) {
            setError('Amount must be greater than zero.');
            return;
        }
        setError('');
        const rate = exchangeRate || 1; // Default to 1 if no rate found
        const result = (amount * rate).toFixed(2);
        alert(`You will receive ${result} ${toCurrency}`);
    };

    return (
        <animated.form onSubmit={handleSwap} style={formAnimation}>
            <CurrencyInput
                currency={fromCurrency}
                amount={amount}
                onAmountChange={(e) => dispatch(setAmount(e.target.value))}
                onCurrencyChange={(e) => dispatch(setFromCurrency(e.target.value))}
                currencies={currencies}
            />
            <CurrencyInput
                currency={toCurrency}
                amount={amount}
                onAmountChange={(e) => dispatch(setAmount(e.target.value))}
                onCurrencyChange={(e) => dispatch(setToCurrency(e.target.value))}
                currencies={currencies}
            />
            <button type="submit">Swap</button>
            {error && <p className="error">{error}</p>}
        </animated.form>
    );
};

export default CurrencySwapForm;