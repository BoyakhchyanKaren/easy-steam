import React from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { BasketIcon } from "assets/icons/BasketIcon/BasketIcon";

const Basket = ({ toggleDrawer }: { toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void }) => {
    const theme = useTheme();
    return (
        <IconButton
            disableRipple
            size="small"
            onClick={toggleDrawer(true)}
            sx={{
                color: theme.palette.common.white,
                textTransform: 'none',
                fontWeight: 600
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 1 }}>
                <BasketIcon sx={{ width: '20px', height: '20px' }} />
                <Typography>
                    Корзина
                </Typography>
            </Box>
        </IconButton>
    );
};

export default Basket;