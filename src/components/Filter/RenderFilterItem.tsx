import { Button, Grid, useTheme } from "@mui/material"
import { RemoveFilterIcon } from "assets/icons/Filter/FilterIcon"
import { margins } from "constants/themeConstants"
import { firstItems, secondItems, thirdItems, useFilterStyles } from "./helpers"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

interface RenderFilterItemProps {
    filterItem: { title: string, id: string }[]
}

const RenderFilterItem: React.FC<RenderFilterItemProps> = ({ filterItem }: RenderFilterItemProps) => {
    const router = useRouter();
    const classes = useFilterStyles();
    const theme = useTheme();
    const items = [firstItems, secondItems, thirdItems, thirdItems, secondItems, firstItems];
    const intialState = items.flat().map((stateItem) => ({ ...stateItem, selected: false }));
    const [selected, setSeleted] = useState(intialState);
    const [selectedItemTitle, setSelectedItemTitle] = useState<string[]>([]);

    const onCardItemClick = (cardItemId: string, cardItemTitle: string) => {
        const changeCardItemState = selected.map((selectedItem) => {
            if (selectedItem.id === cardItemId) {
                if (!selectedItem.selected) {
                    return {
                        ...selectedItem,
                        selected: true,
                    }
                } else {
                    return {
                        ...selectedItem,
                        selected: false,
                    }
                }
            }
            return selectedItem;
        })
        setSelectedItemTitle((prev) => {
            return [...prev, cardItemTitle]
        });
        setSeleted(changeCardItemState);
    }

    useEffect(() => {
        if (selectedItemTitle) {
            const url = {
                pathname: router.pathname,
                query: { ...router.query, category: selectedItemTitle }
            };

            router.push(url, undefined, { shallow: true });
        }
    }, [selectedItemTitle]);

    return (
        <>
            {filterItem.map((cardItem) => {
                const selectedFilterButton = selected.find((elem) => elem.id === cardItem.id);
                const colorCondition = selectedFilterButton?.selected ? theme.palette.primary.main : '';
                return (
                    <Grid item xs={5.5} container justifyContent={"flex-start"} alignItems={"flex-end"}>
                        <Button
                            classes={{
                                text: classes.text,
                            }}
                            sx={{
                                textTransform: 'none',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                fontSize: theme.typography.pxToRem(16),
                                backgroundColor: colorCondition,
                                "&:hover": {
                                    backgroundColor: colorCondition,
                                }
                            }}
                            onClick={() => onCardItemClick(cardItem.id, cardItem.title)}
                            endIcon={
                                selectedFilterButton?.selected ? (
                                    <RemoveFilterIcon sx={{
                                        marginLeft: margins.left12
                                    }} />
                                ) : null
                            }
                        >
                            {cardItem.title}
                        </Button>
                    </Grid >
                )
            })}
        </>
    )
}


export default RenderFilterItem;