import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import FilterSvg from './Filter.svg';
import RemoveFilter from './RemoveFilter.svg';

const FilterIcon = (props: SvgIconProps) => <SvgIcon {...props} component={FilterSvg} inheritViewBox />;
const RemoveFilterIcon = (props: SvgIconProps) => <SvgIcon {...props} component={RemoveFilter} inheritViewBox />;

export {
    FilterIcon,
    RemoveFilterIcon
}
