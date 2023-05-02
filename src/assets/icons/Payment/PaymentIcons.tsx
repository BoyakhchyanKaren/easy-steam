import React, { ReactNode } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import MastecardSvg from './Mastercard.svg';
import QIWISvg from './QIWI.svg';
import YMoneySvg from './YMoney.svg';
import SberBankSvg from './Sberbank.svg';

interface SVGProps {
    props: SvgIconProps;
    component: React.ElementType<ReactNode>;
}

const SVG = ({ component, props }: SVGProps) => {
    return <SvgIcon {...props} sx={{
        ...props.sx,
        width: '100px',
        height: '70px'
    }} component={component} inheritViewBox />;
}

const MasterCardIcon = (props: SvgIconProps) => <SVG component={MastecardSvg} props={props} />;
const QIWICardIcon = (props: SvgIconProps) => <SVG component={QIWISvg} props={props} />;
const YMoneyIcon = (props: SvgIconProps) => <SVG component={YMoneySvg} props={props} />;
const SberBankIcon = (props: SvgIconProps) => <SVG component={SberBankSvg} props={props} />;


export {
    MasterCardIcon,
    QIWICardIcon,
    YMoneyIcon,
    SberBankIcon,
}
