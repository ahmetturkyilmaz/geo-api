import InvalidCoordinatesException from "../exception/InvalidCoordinatesException";

class GeoUtil {
    private static RADIUS_OF_EARTH: number = 6371;

    static distance(lat1: number, lon1: number, lat2: number, lon2: number) {
        console.log("lat1", lat1, "lon1", lon1, "lat2", lat2, "lon2", lon2)
        const p = Math.PI / 180;
        const cos = Math.cos;
        const dLat = (lat2 - lat1) * p;
        const dLon = (lon2 - lon1) * p;
        const a = 0.5 - cos(dLat) / 2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos(dLon)) / 2;

        return this.RADIUS_OF_EARTH * 2 * Math.asin(Math.sqrt(a));  // 2 * R; R = 6371 km
    }

    static getLatAndLong = (coordinates: string) => {
        console.log("coordinates", coordinates)
        const coordinateArr: number[] = coordinates.split(',').map(item => {
            const numb = +item;
            if (isNaN(numb)) {
                throw new InvalidCoordinatesException();
            }
            return numb;
        });
        return coordinateArr;

    }
}

export default GeoUtil;
