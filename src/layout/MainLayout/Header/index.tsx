import { Toolbar, Box, useTheme } from "@mui/material";
import SteamIcon from "assets/icons/SteamIcon/SteamIcon";
import Search from "./Search";
import { useRouter } from "next/router";
import { toolbarHeaderHeight } from "constants/themeConstants";
import BasketDrawer from "@components/Drawer";

const Header = () => {
    const { push } = useRouter();
    const theme = useTheme();
    const onIconClick = () => {
        push(`/`)
    };

    return (
        <Toolbar
            sx={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: theme.palette.primary.main,
                justifyContent: 'space-between',
                alignItems: 'center',
                height: toolbarHeaderHeight,
            }}
        >
            <Box sx={{
                "&:hover": {
                    cursor: 'pointer'
                }
            }}>
                <SteamIcon onClick={onIconClick} />
            </Box>
            <Search />
            <BasketDrawer />
        </Toolbar>
    )
};

export default Header;

