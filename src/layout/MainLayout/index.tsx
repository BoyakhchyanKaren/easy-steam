import React from 'react';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import MainSteam from '@components/Main';

const MainLayout = ({ children }: React.PropsWithChildren) => {
    const { asPath } = useRouter();

    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: '#1E1E1E'
        }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ px: 9 }}>
                <Header />
            </AppBar>
            <Box component="main" sx={{ pt: 5, px: 12, pb: 21, width: '100%' }}>
                <Toolbar />
                {asPath === '/' ? (<MainSteam />) : children}
                <Footer />
            </Box>
        </Box>
    );
}

export default MainLayout;