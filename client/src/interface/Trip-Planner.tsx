

export interface Parks {
    
}

export interface Trip {
    id: number;
    userId: number;
    name: string;
    city: string;
    zip: string;
    address: string;
    transit: string;
    difficulty: number;
}

export interface Trail {
    id: number,
    name: string,
    city: string,
    zip: number,
    crossstreets: string,
    address: string,
    transit: string,
    lat: number,
    lng: number,
    desc: string,
    lighting: string,
    difficulty: number,
    surface: string,
    parking: string,
    facilities: string,
    hours: number | string,
    loopcount: string,
    satImgURL: string,
    largeImgURL: string,
    thumbURL: string,
    attractions: [string],
            loops: {
                1: {
                    name: string,
                    distance: number,
                    steps: number,
                },
                2: {
                    name: string,
                    distance: number,
                    steps: number,
                },
                3: {
                    name: string,
                    distance: number,
                    steps: number,
                },
                4: {
                    name: string,
                    distance: number,
                    steps: number,
                }
            },
            published: boolean,
            rating: number,
            ratings: number,
            favorites: number,
            ModifiedTime: Date,
            reviews: number,
            distance: number,
            url: string,
}

