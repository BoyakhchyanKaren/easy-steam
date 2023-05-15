import React from 'react';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import MainSteam from '@components/Main';

const MainLayout = ({ children }: React.PropsWithChildren) => {
    const { pathname } = useRouter();

    return (
        <>
            <Box sx={{
                display: 'flex',
                backgroundColor: '#1E1E1E',
                minHeight: '100vh',
            }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ px: 9 }}>
                    <Header />
                </AppBar>
                <Box component="main" sx={{ pt: 5, px: 12, pb: 5, width: '100%' }}>
                    <Toolbar />
                    {pathname === '/' ? (<MainSteam />) : children}
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default MainLayout;