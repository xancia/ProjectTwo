/// <reference types="vite/client" />

export type DealType = {
    dealRating: string | number,
    metacriticScore: string,
    normalPrice: string,
    releaseDate: number,
    salePrice: string,
    savings: number,
    storeID: string,
    thumb: string,
    title: string
    dealID: string
}

export type GameType = {
    background_image: string,
    name: string,
    developers: []
    publishers: [],
    genres: [],
    ratings: [
        {
            title: string,
            count: string
        }
    ],
    platforms: [],
    description_raw: string,
    tags: []
}