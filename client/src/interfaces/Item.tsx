export interface Item {
    id: number;
    tripId: number;
    name: string;
    category: string;

    onRemove: (id: number) => void;
}