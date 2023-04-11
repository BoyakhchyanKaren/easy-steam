import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import SteamIcon from 'assets/icons/SteamIcon';
import { useRouter } from 'next/router';
import { Paper } from '@mui/material';

const MainLayout = ({ children }: React.PropsWithChildren) => {
    const { asPath } = useRouter();

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#1E1E1E' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#343434', justifyContent: 'space-between' }}>
                    <Box>
                        <SteamIcon sx={{ width: '150px', height: '40px' }} />
                    </Box>
                    <Box>
                        <SteamIcon sx={{ width: '150px', height: '40px' }} />
                    </Box>
                    <Box>
                        <SteamIcon sx={{ width: '150px', height: '40px' }} />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{ pt: 4, px: 2 }}>
                <Toolbar />
                {asPath === '/' ? (<Box>Main Page</Box>) : children}
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                    <Toolbar sx={{ display: 'flex', backgroundColor: '#343434', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Box>
                            <SteamIcon sx={{ width: '150px', height: '40px' }} />
                        </Box>
                        <Box>
                            <SteamIcon sx={{ width: '150px', height: '40px' }} />
                        </Box>
                        <Box>
                            <SteamIcon sx={{ width: '150px', height: '40px' }} />
                        </Box>
                    </Toolbar>
                </Paper>
            </Box>
        </Box>
    );
}

export default MainLayout;