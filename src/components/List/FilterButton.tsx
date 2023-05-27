import { Button, useTheme } from "@mui/material";
import { RemoveFilterIcon } from "assets/icons/Filter/FilterIcon";
import { margins } from "constants/themeConstants";
import { useListStyles } from "./styles";


const FilterButton = ({ title, onClick }: { title: string, onClick: () => void; }) => {
    const theme = useTheme();
    const classes = useListStyles();

    return (
        <Button
            className={classes.filterButton}
            sx={{
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                }
            }}
            onClick={onClick}
            endIcon={
                <RemoveFilterIcon sx={{
                    marginLeft: margins.left12
                }} />
            }
        >
            {title}
        </Button>
    )
};

export default FilterButton;