import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import CheckedIcon from './icon-check.svg';
import EmptyIcon from './icon-empty.svg';

const IconChecked = (props: SvgIconProps) => <SvgIcon {...props} sx={{
    ...props.sx,
    color: 'transparent',
}} component={CheckedIcon} inheritViewBox />;
const IconEmpty = (props: SvgIconProps) => <SvgIcon {...props} sx={{
    ...props.sx,
    color: 'transparent',
}} component={EmptyIcon} inheritViewBox />;

export {
    IconChecked,
    IconEmpty
}
