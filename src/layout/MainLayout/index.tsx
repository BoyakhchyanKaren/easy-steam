import React from 'react';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import MainSteam from '@components/Main';
import { useMainLayoutStyles } from 'layout/common';

const MainLayout = ({ children }: React.PropsWithChildren) => {
    const { pathname } = useRouter();
    const classes = useMainLayoutStyles();

    return (
        <Box>
            <Box sx={{
                backgroundColor: '#1E1E1E',
                minHeight: 'calc(100vh - 167px)', // full screen - footer height
            }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ px: 9 }}>
                    <Header />
                </AppBar>
                <Box component="main" className={classes.boxContainer}>
                    <Toolbar />
                    {pathname === '/' ? (<MainSteam />) : children}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}

export default MainLayout;