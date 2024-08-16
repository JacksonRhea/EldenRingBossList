import React from "react";

export interface Boss {
    id: number
    name: string,
    image: string,
    description: string,
    location: string,
    runeRewards: string,
    healthPoints: string,
    mapLink: string,
    moreInfo: boolean,
    completed: boolean
}