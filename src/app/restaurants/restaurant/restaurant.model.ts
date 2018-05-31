export interface Restaurant {
    id: string;
    name: string;
    category: string;
    deliveryEstimate: string;
    ratting: number;
    imagePath: string;
    about?:string;
    hours?:string;
}
