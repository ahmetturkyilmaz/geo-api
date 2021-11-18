export interface GeoResponse {
    id: number;
    urlName: string;
    offices: OfficeResponse[]
}

export interface OfficeResponse {
    distance: number;
    location: string;
    address: string;
    coordinates: string
}
