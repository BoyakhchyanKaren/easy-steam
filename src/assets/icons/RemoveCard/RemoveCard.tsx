import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import RemoveSvg from './removeCard.svg';

const RemoveCard = (props: SvgIconProps) => <SvgIcon {...props} component={RemoveSvg} inheritViewBox />;

export default RemoveCard;