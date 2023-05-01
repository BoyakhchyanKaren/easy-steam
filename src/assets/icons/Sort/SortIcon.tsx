import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import SortSvg from './sortIcon.svg';

const SortIcon = (props: SvgIconProps) => <SvgIcon {...props} component={SortSvg} inheritViewBox />;

export default SortIcon;
