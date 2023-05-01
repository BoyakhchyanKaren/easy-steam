import React, { SetStateAction } from "react"
import { Box, Grid } from "@mui/material"
import { PrimaryLightButton, TextTypography16 } from "@components/common/ui-elements"
import CircularLoading from "@components/Loading"

interface DrawerLoaderProps {
    setIsProcessLoading: React.Dispatch<SetStateAction<boolean>>;
}

const DrawerLoader = ({ setIsProcessLoading }: DrawerLoaderProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
        }}>
            <TextTypography16>Корзина Пустой</TextTypography16>
            <CircularLoading />
            <PrimaryLightButton onClick={() => setIsProcessLoading(false)} sx={{ width: '100%' }}>Продолжить Покупки</PrimaryLightButton>
        </Box>
    )
};


export default DrawerLoader;