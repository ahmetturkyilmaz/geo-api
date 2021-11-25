import {NextFunction, Request, Response} from "express"
import {IServiceError} from "../exception/IServiceError";

const errorHandler = (err: IServiceError, req: Request, res: Response, next: NextFunction) => {

    res.status(err.statusCode || 500).json({
        success: false,
        name: err.name,
        error: err.message || 'Server Error',
    })

};

module.exports = errorHandler;
