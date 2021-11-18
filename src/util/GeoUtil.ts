import InvalidCoordinatesException from "../exception/InvalidCoordinatesException";

class GeoUtil {
    private static RADIUS_OF_EARTH: number = 6371e3;

    static distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var cos = Math.cos;
        var dLat = (lat2 - lat1) * p
        var dLon = (lon2 - lon1) * p
        var a = 0.5 - cos(dLat) / 2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos(dLon)) / 2;

        return this.RADIUS_OF_EARTH * 2 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }
    static getLatAndLong = (coordinates) => {
        var coordinateArr: number[] = coordinates.split(',').map(item => {
            const numb = +item;
            if (isNaN(numb)) {
                throw new InvalidCoordinatesException();
            }
            return parseInt(item)
        })
        return coordinateArr;

    }
}

export default GeoUtil;
