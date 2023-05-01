import React, { useState } from "react";
import { Grid, TextField, useTheme } from "@mui/material";
import { paddings } from "constants/themeConstants";
import { TextTypography18 } from "@components/common/ui-elements";
import { firstItems, secondItems, thirdItems } from "./helpers";
import { useFilterStyles } from "./helpers";
import classNames from "classnames";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

interface RenderItemProps {
    items: { title: string, id: string }[][],
}

const RenderItem = ({ items }: RenderItemProps) => {
    const classes = useFilterStyles();
    const theme = useTheme();
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (index: string) => {
        setSelected(index === selected ? null : index);
    };

    const renderContainer = (mappedItem: { title: string, id: string }[]) => {
        return (
            <span className={classes.root}>
                {mappedItem.map((item) => {
                    return (
                        <span
                            className={classNames({ [classes.selected]: selected === item.id }, classes.container)}
                            onClick={() => handleSelect(item.id)}
                            key={item.id}
                        >
                            <TextField
                                label={<TextTypography18>{item.title}</TextTypography18>}
                                variant="outlined"
                                size="small"
                                disabled
                                fullWidth
                                InputProps={{
                                    className: classes.input,
                                    endAdornment:
                                        selected === item.id && (
                                            <DisabledByDefaultIcon sx={{ color: theme.palette.primary.light }} />
                                        )
                                }}
                            />
                        </span>
                    )
                })}
            </span>
        )
    }

    return (
        <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"flex-end"}>
            {items.map((container) => renderContainer(container))}
        </Grid>
    )
};

const RenderItems = () => {
    const items = [[firstItems, secondItems, thirdItems], [firstItems, secondItems, thirdItems]];
    return items.map((mappedItem) => {
        return (
            <Grid px={paddings.leftRight16} key={mappedItem.toString()}>
                <RenderItem items={mappedItem} />
            </Grid>
        )
    });
}

export default RenderItems;