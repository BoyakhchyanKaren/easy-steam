import { Button, Card, Checkbox, Divider, Grid, TextField, Theme, Typography, styled, useTheme } from "@mui/material";
import { borderRadius, margins, paddings } from "constants/themeConstants";
import { CustomCheckboxProps, DiscountButtonProps } from "./types";
import { makeStyles } from "@mui/styles";
import CircularLoading from "@components/Loading";
import { dispatch } from "@redux/hooks";
import { infoMiddleware } from "@redux/slices/info";
import { IconChecked, IconEmpty } from "assets/icons/Checkbox/CheckboxIcons";

const useCommonStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100px',
        height: '70px',
        backgroundColor: theme.palette.primary.contrastText,
        padding: paddings.all12,
        borderRadius: borderRadius.radius12,
    }
}));


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

const PrimaryTextField = styled(TextField)(({ theme }) => ({
    width: '80px',
    borderRadius: borderRadius.radius12,
    backgroundColor: theme.palette.primary.main,
    border: 'none',
    outline: 'none',
    "& .MuiInputBase-root": {
        color: theme.palette.common.white,
        borderRadius: borderRadius.radius12,
    },
}))

const CommonWhiteButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderRadius: borderRadius.radius10,
    fontSize: theme.typography.pxToRem(21),
    textTransform: 'none',
    fontWeight: 500,
    "&:hover": {
        backgroundColor: theme.palette.common.white
    }
}));

const DiscountButton = ({ px, py, price, onClick }: DiscountButtonProps) => {
    const theme = useTheme();

    return (
        <Button fullWidth onClick={onClick}>
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
                <Grid sx={{ height: '45px' }} container flexWrap={"nowrap"} justifyContent={"space-between"} alignItems={"center"} gap={1} px={paddings.leftRight12} py={paddings.topBottom6}>
                    <TextTypography22 sx={{ textDecoration: 'line-through', color: theme.palette.common.black }}>
                        {price}
                    </TextTypography22>
                    <TextTypography22 sx={{ color: theme.palette.error.main }}>
                        {price}
                    </TextTypography22>
                </Grid>
            </Card>
        </Button>
    )
};

const ButtonWitoutDiscount = ({ price }: { price?: string }) => {
    return (
        <CommonWhiteButton fullWidth>
            {price}
        </CommonWhiteButton>
    )
}

const CustomCheckbox = ({ fontSize, value, onChange, sx, checked }: CustomCheckboxProps) => {
    const theme = useTheme();

    return (
        <Checkbox
            value={value}
            disableRipple
            checked={checked}
            onChange={onChange}
            icon={<IconEmpty sx={sx} />}
            checkedIcon={<IconChecked sx={sx} />}
            sx={{
                color: theme.palette.common.white,
                "& .MuiSvgIcon-root": { fontSize: fontSize ?? 40 },
                "&.Mui-checked": {
                    color: theme.palette.common.white,
                }
            }}
        />
    )
}

const EmptyLoadingState = () => {
    const classes = useCommonStyles();
    return (
        <Card elevation={0} classes={{ root: classes.root }}>
            <CircularLoading />
        </Card>
    )
};

export {
    TextTypography18,
    TextTypography22,
    TextTypography16,
    CustomDivider,
    FilterButton,
    FilterButtonNextButton,
    PrimaryLightButton,
    SecondaryLigtButton,
    DiscountButton,
    CustomCheckbox,
    EmptyLoadingState,
    ButtonWitoutDiscount,
    PrimaryTextField
}