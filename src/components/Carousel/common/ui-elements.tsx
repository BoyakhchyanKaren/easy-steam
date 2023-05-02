import { Button, styled } from "@mui/material";
import { borderRadius, paddings } from "constants/themeConstants";

const MainCarouselButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: `${paddings.topBottom4} ${paddings.leftRight64}`,
    fontSize: '21px',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    borderRadius: borderRadius.radius10,
    borderBottomRightRadius: borderRadius.radius8,
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    }
}))

export {
    MainCarouselButton
}