import {GeoInfos} from "../assets/db";
import {GeoInfo} from "../types/GeoInfo";
import NotFoundException from "../exception/NotFoundException";

class GeoInfoRepository {
    getAllInfos = async () => {
        return GeoInfos;
    }
    getById = async (id: number) => {
        const geoInfo:GeoInfo = GeoInfos.find(geoInfo => geoInfo.id = id);
        if (!geoInfo){
            throw new NotFoundException("Geo Info with given id is not found");
        }
        return geoInfo;
    }
}
export const geoInfoRepository = new GeoInfoRepository();
