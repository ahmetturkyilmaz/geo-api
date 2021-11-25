import {GeoInfos} from "../assets/db";
import GeoUtil from "../util/GeoUtil";
import {GeoInfo} from "../types/GeoInfo";
import {OfficeResponse} from "../types/OfficeResponse";

class GeoInfoRepository {
    getAllInfos = async (lat: number, lng: number, distance: number) => {
        const geoInfos: GeoInfo[] = GeoInfos;
        const officeResponses: OfficeResponse[] = [];
        geoInfos.forEach(item => {
            officeResponses.push(...this.OfficeResponse(lat, lng, distance, item));
        });
        return officeResponses
    }

    OfficeResponse = (lat1: number, lng1: number, distance: number, geoInfo: GeoInfo) => {
        const newOfficeInfo: OfficeResponse[] = [];
        geoInfo.offices.forEach(item => {
            const coordinateArr: number[] = GeoUtil.getLatAndLong(item.coordinates);
            const circleDistance = this.getDistance(lat1, lng1, coordinateArr);
            if (circleDistance < distance) {
                item.coordinates
                newOfficeInfo.push({
                    urlName: geoInfo.urlName,
                    organization: geoInfo.organization,
                    address: item.address,
                    coordinates: coordinateArr.reverse(),
                    location: item.location,
                    services: geoInfo.services,
                    distance: circleDistance.toFixed(2)
                });
            }
        })
        return newOfficeInfo;
    }
    getDistance = (lat1: number, lng1: number, coordinateArr: number[]) => {
        return GeoUtil.distance(lat1,
          lng1,
          coordinateArr[0],
          coordinateArr[1]);
    }
}

export const geoInfoRepository = new GeoInfoRepository();
