import { Button, Card, Divider, Grid, Typography, styled, useTheme } from "@mui/material";
import { borderRadius, margins, paddings } from "constants/themeConstants";
import { DiscountButtonProps } from "./types";


const TextTypography18 = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.common.white,
    fontWeight: 600
}));

const TextTypography16 = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.common.white,
    fontWeight: 500
}));

const TextTypography22 = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(22),
    color: theme.palette.common.white,
    fontWeight: 600
}));

const CustomDivider = styled(Divider)(({ theme }) => ({
    height: 2,
    background: theme.palette.primary.light
}));

const FilterButton = styled(Button)(({ theme }) => ({
    padding: `${paddings.topBottom8} ${paddings.leftRight32}`,
    textTransform: 'none',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light,
    borderRadius: borderRadius.radius8,
    "&:hover": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.light,
    }
}));

const FilterButtonNextButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    padding: `${paddings.topBottom8} 0`,
    width: '20px',
    minWidth: '40px',
    marginLeft: margins.left60,
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    }
}));

const PrimaryLightButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    borderRadius: borderRadius.radius10,
    fontSize: theme.typography.pxToRem(21),
    textTransform: 'none',
    fontWeight: 500,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main
    }
}));

const SecondaryLigtButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: borderRadius.radius10,
    fontSize: theme.typography.pxToRem(21),
    textTransform: 'none',
    fontWeight: 500,
    "&:hover": {
        backgroundColor: theme.palette.primary.main
    }
}));

const DiscountButton = ({ px, py }: DiscountButtonProps) => {
    const theme = useTheme();

    return (
        <Grid item container alignItems={"center"} justifyContent={"center"}>
            <Grid
                item
                sx={{
                    backgroundColor: theme.palette.error.main,
                    borderTopLeftRadius: borderRadius.radius12,
                    borderBottomLeftRadius: borderRadius.radius12
                }}
                mr={'-14px'}
                px={px}
                py={py}>
                <TextTypography22>-50%</TextTypography22>
            </Grid>
            <Card sx={{ borderRadius: borderRadius.radius16 }}>
                <Grid container justifyContent={"space-between"} alignItems={"center"} gap={3} px={paddings.leftRight12} py={paddings.topBottom6}>
                    <Typography sx={{ fontSize: '22px' }}>
                        $30.00
                    </Typography>
                    <Typography sx={{ fontSize: '22px' }}>
                        $30.00
                    </Typography>
                </Grid>
            </Card>
        </Grid>
    )
}

export {
    TextTypography18,
    TextTypography22,
    TextTypography16,
    CustomDivider,
    FilterButton,
    FilterButtonNextButton,
    PrimaryLightButton,
    SecondaryLigtButton,
    DiscountButton
}