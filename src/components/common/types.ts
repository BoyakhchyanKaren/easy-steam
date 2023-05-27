import { SxProps, Theme } from "@mui/material";
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase";

export interface DiscountButtonProps {
    px: number | string;
    py: number | string;
    price?: string;
    onClick?: () => void;
}

export interface CustomCheckboxProps {
    fontSize?: number;
    value?: boolean;
    onChange?: SwitchBaseProps['onChange'];
    sx?: SxProps<Theme>;
    checked: boolean;
}