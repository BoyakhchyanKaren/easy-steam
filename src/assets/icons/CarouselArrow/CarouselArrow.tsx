import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CarouselArrowLeft = (props: SvgIconProps) => <SvgIcon {...props} sx={{ ...props.sx, color: (theme) => theme.palette.common.white }} component={ArrowBackIosNewIcon} inheritViewBox />;
const CarouselArrowRigth = (props: SvgIconProps) => <SvgIcon {...props} sx={{ ...props.sx, color: (theme) => theme.palette.common.white }} component={ArrowForwardIosIcon} inheritViewBox />;
const CarouselArrowDown = (props: SvgIconProps) => <SvgIcon {...props} sx={{ ...props.sx, color: (theme) => theme.palette.common.white }} component={KeyboardArrowDownIcon} inheritViewBox />;

export {
    CarouselArrowLeft,
    CarouselArrowRigth,
    CarouselArrowDown
}
