import {IServiceError} from "./IServiceError";

class InvalidCoordinatesException extends Error implements IServiceError {
    statusCode: number;

    constructor() {
        super();
        this.name = 'InvalidCoordinatesException';
        this.message = 'Given Coordinates are invalid'
        this.statusCode = 400;
    }
}

export default InvalidCoordinatesException;
