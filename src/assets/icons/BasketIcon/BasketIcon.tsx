import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import BasketSvg from './basket.svg';
import EmptyBasketSvg from './EmptyBasket.svg';

const BasketIcon = (props: SvgIconProps) => <SvgIcon {...props} component={BasketSvg} inheritViewBox />;
const EmptyBasketIcon = (props: SvgIconProps) => <SvgIcon {...props} component={EmptyBasketSvg} inheritViewBox />;

export {
    BasketIcon,
    EmptyBasketIcon,
};
