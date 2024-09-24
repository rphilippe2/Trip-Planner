export interface Trail {
    id: number;
    name: string;
    city: string;
    zip: number;
    address: string;
    transit: string;
    desc: string;
    difficulty: number;
    surface: string;
    parking: string;
    facilities: string;
    hours: number | string;
    satImgURL: string;
    attractions: [string];
    rating: number;
    ModifiedTime: string;
    distance: number;
}