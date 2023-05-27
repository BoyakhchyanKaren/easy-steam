import React from "react";
import { TextTypography18 } from "@components/common/ui-elements";
import { Grid, IconButton } from "@mui/material";
import SortIcon from "assets/icons/Sort/SortIcon";
import SortSelectMenu from "./MenuSelect";

const SortSelect = () => {
    return (
        <Grid container direction={"row"} alignItems={"center"} gap={1} flexWrap={"nowrap"}>
            <IconButton>
                <SortIcon />
            </IconButton>
            <TextTypography18>
                Сортировать по
            </TextTypography18>
            <SortSelectMenu />
        </Grid>
    );
};

export default SortSelect;