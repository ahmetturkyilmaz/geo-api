import {geoInfoController} from "../controller/GeoInfoController";

const routerExpress = require('express')
const geoRouter = routerExpress.Router();
geoRouter.route("/geo-info")
  .get(geoInfoController.getAll)

geoRouter.route("/geo-info/great-circle")
  .get(geoInfoController.getAllWithCircle)

geoRouter.route("/geo-info/great-circle/:id")
  .get(geoInfoController.getByIdWithCircle)

export default geoRouter;
