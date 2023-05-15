import { Button } from "@mui/material";
import { useCarouselMainStyles } from "../styles";
import { CarouselArrowLeft, CarouselArrowRigth } from "assets/icons/CarouselArrow/CarouselArrow";
import AliceCarousel from "react-alice-carousel";

interface ButtonProps {
    carousel: AliceCarousel
}

const RenderPrevButton = ({ carousel }: ButtonProps) => {
    const classes = useCarouselMainStyles();
    return (
        <span className={`${classes.arrowContainer} ${classes.leftArrow}`}>
            <Button onClick={(e) => {
                e.preventDefault();
                carousel?.slidePrev();
            }}>
                <CarouselArrowLeft sx={{ fontSize: '30px' }} />
            </Button>
        </span>
    );
}

const RenderNextButton = ({ carousel }: ButtonProps) => {
    const classes = useCarouselMainStyles();

    return (
        <span className={`${classes.arrowContainer} ${classes.rightArrow}`}>
            <Button onClick={(e) => {
                e.preventDefault();
                carousel?.slideNext();
            }}>
                <CarouselArrowRigth sx={{ fontSize: '30px' }} />
            </Button>
        </span>
    );
}

export {
    RenderNextButton,
    RenderPrevButton,
}