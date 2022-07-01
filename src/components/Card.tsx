import "./card.css"

import React, {FC} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;
    height?: string;
    children: React.ReactNode | JSX.Element[],
    variant?: CardVariant;
    onClick?: (num: number) => void;
}

const Card: FC<CardProps> = ({width, height, children, variant = CardVariant.outlined, onClick}) => {
    return (
        <div
            className={`CardClass ${variant}`} style={{width, height}}
            onClick={() => onClick ? onClick(10) : null}
        >
            {children}
        </div>
    );
};

export default Card;