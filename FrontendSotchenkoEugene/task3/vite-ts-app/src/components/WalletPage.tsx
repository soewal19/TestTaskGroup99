// src/components/WalletPage.tsx
import React from 'react';
import useWalletBalances from '../hooks/useWalletBalances';
import usePrices from '../hooks/usePrices'; // Import the usePrices hook
import WalletRow from './WalletRow';

const WalletPage: React.FC = () => {
    const { balances, loading: loadingBalances, error: errorBalances } = useWalletBalances();
    const { prices, loading: loadingPrices, error: errorPrices } = usePrices();

    if (loadingBalances || loadingPrices) {
        return <div>Loading...</div>;
    }

    if (errorBalances) {
        return <div>{errorBalances}</div>;
    }

    if (errorPrices) {
        return <div>{errorPrices}</div>;
    }

    return (
        <div>
            {balances.map((balance) => (
                <WalletRow
                    key={`${balance.currency}-${balance.blockchain}`}
                    className="wallet-row"
                    amount={balance.amount}
                    usdValue={prices[balance.currency] ? prices[balance.currency] * balance.amount : 0} // Calculate USD value
                    formattedAmount={balance.amount.toFixed(2)}
                />
            ))}
        </div>
    );
};

export default WalletPage;