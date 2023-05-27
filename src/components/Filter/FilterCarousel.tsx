import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { filterResponsiveItems } from "./helpers";
import { RenderNextButton, RenderPrevButton } from "@components/Carousel/common";
import { Grid } from "@mui/material";

const FilterCarousel = ({ renderedItems }: any) => {
    let carousel: AliceCarousel;

    return (
        <Grid>
            <AliceCarousel
                mouseTracking
                responsive={filterResponsiveItems}
                ref={(carouselElement) => {
                    if (carouselElement) {
                        carousel = carouselElement
                    }
                }}
                disableDotsControls={true}
                items={renderedItems}
                renderNextButton={() => <RenderNextButton carousel={carousel} />}
                renderPrevButton={() => <RenderPrevButton carousel={carousel} />}
            />
        </Grid>
    )
};

export default FilterCarousel;