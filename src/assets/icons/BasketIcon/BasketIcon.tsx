import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import BasketSvg from './basket.svg';

const BasketIcon = (props: SvgIconProps) => <SvgIcon {...props} component={BasketSvg} inheritViewBox />;

export default BasketIcon;
