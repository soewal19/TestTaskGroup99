import React, { useMemo } from 'react';
import { WalletRow } from './WalletRow';
import { useWalletBalances } from './useWalletBalances';
import { usePrices } from './usePrices';

interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string; // Added blockchain property for filtering
}

interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
}

interface Props extends React.HTMLProps<HTMLDivElement> {}

const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();

    const getPriority = (blockchain: string): number => {
        switch (blockchain) {
            case 'Osmosis':
                return 100;
            case 'Ethereum':
                return 50;
            case 'Arbitrum':
                return 30;
            case 'Zilliqa':
                return 20;
            case 'Neo':
                return 20;
            default:
                return -99;
        }
    };

    const sortedBalances = useMemo(() => {
        return balances
            .filter((balance: WalletBalance) => {
                const balancePriority = getPriority(balance.blockchain);
                return balancePriority > -99 && balance.amount > 0;
            })
            .sort((lhs: WalletBalance, rhs: WalletBalance) => {
                return getPriority(rhs.blockchain) - getPriority(lhs.blockchain);
            });
    }, [balances]);

    const rows = sortedBalances.map((balance: WalletBalance) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
            <WalletRow
                className="wallet-row"
                key={`${balance.currency}-${balance.blockchain}`} // Use unique key
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.amount.toFixed(2)} // Format directly here
            />
        );
    });

    return (
        <div {...rest}>
            {rows}
        </div>
    );
};

export default WalletPage;