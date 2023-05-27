export interface GameImagesProps {
    id: string,
    mainImage: string,
    subImages: {
        top: { firstImage: string, secondImage: string },
        bottom: { firstImage: string, secondImage: string }
    }
}

export interface SystemDataProps {
    subTitle1: string;
    subTitle2: string;
}

export interface IGamesProps {
    bestGames: GamesCardProps[],
    popularGames: GamesCardProps[],
}

export interface GamesCardProps {
    id: string,
    image: string,
    title: string,
    description: string,
    dateOfCreation: string,
    price: string,
    hasDiscount: boolean,
    systemName: string,
    suggested: SystemDataProps[],
    minimal: SystemDataProps[],
}

export interface GamesProps {
    gameImages: GameImagesProps[];
    games: IGamesProps | null;
    currentGame: GamesCardProps | null;
    currentGames: GamesCardProps[];
    isDrawerOpen: boolean;
    isFilterItemsOpen: boolean;
}
export interface ConditionsProps {
    whereToFind: string;
    whereToTake: string;
    howToTake: string;
}

export interface InformationProps {
    terms: string;
    conditions: ConditionsProps;
    selectedFilterItems: string[];
    minPrice: string | number;
    maxPrice: string | number;
    hasDiscount: boolean;
    selectItemValue: string;
    searchValue: string;
}

export enum FilterItemName {
    searchValue = 'searchValue',
    carouselFilter = 'carouselFilter',
    discount = 'discount',
    prices = 'prices',
    sortFilter = 'sortFilter'
}