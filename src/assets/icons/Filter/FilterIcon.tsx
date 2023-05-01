import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import FilterSvg from './Filter.svg';

const FilterIcon = (props: SvgIconProps) => <SvgIcon {...props} component={FilterSvg} inheritViewBox />;

export default FilterIcon;
