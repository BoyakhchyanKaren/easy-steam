import { Grid } from "@mui/material"
import { paddings } from "constants/themeConstants";
import AliceCarousel, { DotsItem, Responsive } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { RenderCustomDot, RenderNextButton, RenderPrevButton } from ".";
import { ReactNode } from "react";
import styles from '../custom-carousel.module.css';
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(styles);

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
        <Grid container padding={paddings.all24} {...props}>
            <Grid container alignItems={"center"} pb={paddings.bottom8} className={cx('carousel')} gap={2}>
                {headerComponent?.()}
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
        </Grid>
    )
};

export default RenderCarousel;