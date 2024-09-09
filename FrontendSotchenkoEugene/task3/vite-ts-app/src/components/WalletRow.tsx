// src/components/WalletRow.tsx
import React from 'react';

interface WalletRowProps {
    className?: string; // Optional className for styling
    amount: number; // Amount of currency
    usdValue: number; // USD value of the currency
    formattedAmount: string; // Formatted amount as a string
}

const WalletRow: React.FC<WalletRowProps> = ({ className, amount, usdValue, formattedAmount }) => {
    return (
        <div className={className}>
            <div className="wallet-row-details">
                <span>Amount: {formattedAmount}</span>
                <span>USD Value: ${usdValue.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default WalletRow;