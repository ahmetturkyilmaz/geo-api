import {geoInfoRepository} from "../repository/GeoInfoRepository";
import {OfficeResponse} from "../types/OfficeResponse";

class GeoInfoService {
    getAllInfo = async () => {
        //return await geoInfoRepository.getAllInfos(distance);
    }

    findGreatCircleOfAll = async (lat: number, lng: number, distance: number) => {
        const officeResponses: OfficeResponse[] = await geoInfoRepository.getAllInfos(lat, lng, distance);
        return officeResponses.sort((a, b) => a.organization > b.organization ? 1 : -1);
    }


}


export const geoInfoService = new GeoInfoService();
