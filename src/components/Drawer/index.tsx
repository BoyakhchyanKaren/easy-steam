import React, { useState } from "react";
import { Box, Drawer, useTheme } from "@mui/material";
import { borderRadius, toolbarHeaderHeight } from "constants/themeConstants";
import Basket from "layout/MainLayout/Header/Basket";
import DrawerList from "./DrawerList";

const BasketDrawer = () => {
    const theme = useTheme();
    const [onDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (_event: React.KeyboardEvent | React.MouseEvent) => {
                setDrawerOpen(open);
            };

    return (
        <Box>
            <Basket toggleDrawer={toggleDrawer} />
            <Drawer
                PaperProps={{
                    sx: {
                        height: 620,
                        top: toolbarHeaderHeight,
                        backgroundColor: theme.palette.primary.main,
                        borderBottomLeftRadius: borderRadius.radius10,
                    },
                }}
                anchor={'right'}
                open={onDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <DrawerList />
            </Drawer>
        </Box>
    );
}

export default BasketDrawer;