import React, { useState } from "react";
import { useTheme, styled, OutlinedInput, Box, InputAdornment } from "@mui/material";
import { shouldForwardProp } from '@mui/system';
import { borderRadius, margins, paddings } from "constants/themeConstants";
import SearchIcon from '@mui/icons-material/Search';

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
    width: 510,
    backgroundColor: theme.palette.primary.light,
    borderRadius: borderRadius.radius10,
    marginLeft: margins.left16,
    paddingLeft: paddings.left16,
    paddingRight: paddings.right16,
    '& input': {
        backgroundColor: 'transparent',
        paddingLeft: paddings.left4,
        color: theme.palette.common.white,
    },
    [theme.breakpoints.down('lg')]: {
        width: 250
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: margins.left4,
        background: theme.palette.common.white
    }
}));

const Search = () => {
    const theme = useTheme();
    const [searchValue, setSearchValue] = useState('');

    return (
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <OutlineInputStyle
                id="input-search-header"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Поиск"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: theme.palette.secondary.main }} />
                    </InputAdornment>
                }
            />
        </Box>
    );
};

export default Search;