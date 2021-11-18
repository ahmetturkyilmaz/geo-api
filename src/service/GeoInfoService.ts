import {geoInfoRepository} from "../repository/GeoInfoRepository";
import GeoUtil from "../util/GeoUtil";
import {GeoInfo} from "../types/GeoInfo";
import {GeoResponse, OfficeResponse} from "../types/GeoResponse";

class GeoInfoService {
    getAllInfo = async () => {
        return await geoInfoRepository.getAllInfos();
    }
    findGreatCircleOfAll = async (coordinates: string) => {
        const geoInfos: GeoInfo[] = await geoInfoRepository.getAllInfos()
        const geoResponses: GeoResponse[] = [];
        geoInfos.forEach(item => {
        })

    }
    findGreatCircleById = async (id: number, coordinates: string) => {
        const geoInfo: GeoInfo = await geoInfoRepository.getById(id);
        return this.getGeoResponse(geoInfo, coordinates);
    }

    getGeoResponse = async (geoInfo: GeoInfo, coordinates: string) => {
        const newOfficeInfo: OfficeResponse[] = [];
        geoInfo.offices.forEach(item => {
            newOfficeInfo.push({
                address: item.address,
                coordinates: item.coordinates,
                location: item.location,
                distance: this.getDistance(item.coordinates, coordinates)
            });
        })
        const geoInfoResponse: GeoResponse = {
            id: geoInfo.id,
            urlName: geoInfo.urlName,
            offices: newOfficeInfo
        }
        return geoInfoResponse
    }

    getDistance = (coordinates1, coordinates2) => {
        var coordinateArr1: number[] = GeoUtil.getLatAndLong(coordinates1);
        var coordinateArr2: number[] = GeoUtil.getLatAndLong(coordinates2);

        return GeoUtil.distance(coordinateArr1[0],
          coordinateArr1[1],
          coordinateArr2[0],
          coordinates2[1])
    }
}


export const
  geoInfoService = new GeoInfoService();
