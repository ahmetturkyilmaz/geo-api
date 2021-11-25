export interface GeoInfo {
    id: number;
    urlName: string;
    organization: string;
    customerLocations: string;
    willWorkRemotely: true;
    website?: string | null;
    services: string;
    offices: Office[]
}

export interface Office {
    location: string;
    address: string;
    coordinates: string
}
