import { Grid } from "@mui/material"
import { paddings } from "constants/themeConstants";
import AliceCarousel, { DotsItem, Responsive } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { RenderCustomDot, RenderNextButton, RenderPrevButton } from ".";
import { ReactNode } from "react";

interface RenderCarouselProps {
    children: ReactNode;
    headerComponent?: () => JSX.Element;
    responsive: Responsive;
    autoWidth?: boolean;
    disableDotsControls?: boolean;
}

const RenderCarousel = ({ children, headerComponent, responsive, autoWidth, disableDotsControls, ...props }: RenderCarouselProps) => {
    let carousel: AliceCarousel;

    return (
        <Grid item container xs={12} padding={paddings.all24} {...props}>
            <Grid container alignItems={"center"} pb={paddings.bottom8}>
                {headerComponent?.()}
            </Grid>
            <AliceCarousel
                mouseTracking
                responsive={responsive}
                ref={(carouselElement) => {
                    if (carouselElement) {
                        carousel = carouselElement
                    }
                }}
                disableDotsControls={disableDotsControls}
                autoWidth={autoWidth}
                renderNextButton={() => <RenderNextButton carousel={carousel} />}
                renderPrevButton={() => <RenderPrevButton carousel={carousel} />}
                renderDotsItem={(e: DotsItem) => (
                    <RenderCustomDot key={e.activeIndex} isActive={e.isActive} />
                )}
            >
                {children}
            </AliceCarousel>
        </Grid>
    )
};

export default RenderCarousel;