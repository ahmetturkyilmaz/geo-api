import asyncHandler from "../middleware/async";
import {NextFunction, Request, Response} from "express";
import {geoInfoService} from "../service/GeoInfoService";

class GeoInfoController {
    getAll = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const geoInfos = await geoInfoService.getAllInfo();
        res.status(200).json(geoInfos);
    });
    getByIdWithCircle = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const geoInfos = await geoInfoService.findGreatCircleById(+req.params.id, req.params.coordinates);
        res.status(200).json(geoInfos);
    });
    getAllWithCircle = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const geoInfos = await geoInfoService.findGreatCircleOfAll(req.params.coordinates);
        res.status(200).json(geoInfos);
    });

}

export const geoInfoController = new GeoInfoController();

