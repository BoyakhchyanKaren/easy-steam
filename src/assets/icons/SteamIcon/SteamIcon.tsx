import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import SteamSvg from './steam.svg';

const SteamIcon = (props: SvgIconProps) => <SvgIcon {...props} sx={{ width: '150px', height: '40px' }} component={SteamSvg} inheritViewBox />;

export default SteamIcon;
