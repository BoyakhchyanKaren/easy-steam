import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import SteamSvg from './steam.svg';

const SteamIcon = (props: SvgIconProps) => <SvgIcon {...props} component={SteamSvg} inheritViewBox />;

export default SteamIcon;
