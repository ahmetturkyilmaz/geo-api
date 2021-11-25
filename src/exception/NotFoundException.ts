import {IServiceError} from "./IServiceError";

class NotFoundException extends Error implements IServiceError {
    statusCode: number;

    constructor(message: string ) {
        super(message);
        this.name = 'NotFoundException';
        this.statusCode = 404 ;
    }

}

export default NotFoundException;
