import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import classNames from "classnames";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getStyles, sortItems, useStyles } from "./styles";
import { useRouter } from "next/router";

const SortSelectMenu = () => {
    const classes = useStyles();
    const router = useRouter();
    const theme = useTheme();
    const [menuItemValue, setMenuItemValue] = useState<string>('');
    const [menuItemsOpen, setMenuItemsOpen] = useState(false);

    const handleChange = (event: SelectChangeEvent<typeof menuItemValue>) => {
        const {
            target: { value },
        } = event;
        setMenuItemValue(value);
    };

    const onMenuItemClick = (itemTitle: string) => {
        const queryParams = { ...router.query, sort: itemTitle };
        const newUrl = {
            pathname: router.pathname,
            query: queryParams,
        };

        router.push(newUrl, undefined, { shallow: true });
    };

    return (
        <FormControl sx={{ width: 300 }}>
            <Select
                size="small"
                displayEmpty
                onOpen={() => setMenuItemsOpen(true)}
                open={menuItemsOpen}
                onClose={() => setMenuItemsOpen(false)}
                value={menuItemValue}
                IconComponent={(props) => <KeyboardArrowDownIcon {...props} fontSize="large" />}
                className={classNames(classes.select, classes.input)}
                onChange={handleChange}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <em>популярности</em>;
                    }
                    return selected;
                }}
                MenuProps={{ classes: { paper: classes.paper } }}
                sx={{
                    "&.Mui-focused": {
                        bgcolor: menuItemsOpen ? theme.palette.secondary.main : "inital",
                    },
                }}
            >
                <MenuItem disabled value="">
                    <em>популярности</em>
                </MenuItem>
                {sortItems.map((sortItem) => (
                    <MenuItem
                        key={sortItem}
                        value={sortItem}
                        style={getStyles(sortItem, menuItemValue, theme)}
                        onClick={() => onMenuItemClick(sortItem)}
                    >
                        {sortItem}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SortSelectMenu;