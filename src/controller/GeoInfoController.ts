import asyncHandler from "../middleware/async";
import {NextFunction, Request, Response} from "express";
import {geoInfoService} from "../service/GeoInfoService";
import InvalidCoordinatesException from "../exception/InvalidCoordinatesException";

class GeoInfoController {

    getAll = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const geoInfos = await geoInfoService.getAllInfo();
        res.status(200).json(geoInfos);
    });

    getAllWithCircle = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req);
        const lat = +req.params.lat;
        const lng = +req.params.lng;
        const distance = +req.params.distance;

        if (isNaN(lat) || isNaN(lng) || isNaN(distance)) {
            throw new InvalidCoordinatesException();
        }

        console.log("req.params.coordinates", "lat", lat, "lng", lng)

        const geoInfos = await geoInfoService.findGreatCircleOfAll(lat, lng, distance);
        res.status(200).json(geoInfos);
    });

}

export const geoInfoController = new GeoInfoController();

