import {geoInfoController} from "../controller/GeoInfoController";

const routerExpress = require('express');


const geoRouter = routerExpress.Router();
geoRouter.route("/geo-info")
  .get(geoInfoController.getAll)

geoRouter.route("/office-info/:lat/:lng/:distance")
  .get(geoInfoController.getAllWithCircle)


export default geoRouter;
