export interface GeoInfo {
    id: number;
    urlName: string;
    organization: string;
    customerLocations: string;
    willWorkRemotely: true;
    website: string;
    services: string;
    offices: { location: string; address: string; coordinates: string }[]
}
