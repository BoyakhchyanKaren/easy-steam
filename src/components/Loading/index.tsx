import React from 'react';
import { CircularProgress, CircularProgressProps, Grid, SxProps } from '@mui/material';
import { margins, paddings } from 'constants/themeConstants';

interface CircularLoadingProps {
    loadingProps?: CircularProgressProps;
    sx?: SxProps;
}

const CircularLoading: React.FC<CircularLoadingProps> = ({ loadingProps, sx }) => (
    <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
            ...sx,
            width: '100%',
            height: '100%',
            margin: margins.auto,
            py: paddings.topBottom16,
            color: 'black'
        }}
    >
        <CircularProgress color='inherit' size={40} {...loadingProps} />
    </Grid>
);

export default CircularLoading;
