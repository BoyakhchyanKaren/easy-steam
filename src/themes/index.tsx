import React, { ReactNode, useMemo } from 'react';
import { createTheme, CssBaseline, Theme, ThemeOptions, ThemeProvider, useTheme } from '@mui/material';

interface Props {
    children: ReactNode;
}

const ThemeCustomization = ({ children }: Props) => {
    const theme = useTheme();
    const themeOptions: ThemeOptions = useMemo(
        () => ({
            direction: 'ltr',
            palette: {
                ...theme.palette,
                common: {
                    white: '#D9D9D9',
                },
                secondary: {
                    main: '#8753CF',
                },
                primary: {
                    main: '#343434',
                    dark: '#1E1E1E',
                    light: '#444444',
                    contrastText: '#939393',
                },
                error: {
                    main: '#B72337',
                }
            },
            mixins: {
                toolbar: {
                    minHeight: '48px',
                    padding: '16px',
                    '@media (min-width: 600px)': {
                        minHeight: '48px'
                    }
                }
            },
        }),
        [theme]
    );

    const themes: Theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={themes}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeCustomization;