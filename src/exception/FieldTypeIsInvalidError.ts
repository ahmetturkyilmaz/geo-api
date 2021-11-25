import {IServiceError} from "./IServiceError";

class FieldTypeIsInvalidError extends Error implements IServiceError {
     statusCode: number;

    constructor(message: string) {
        super(message);
        this.name = 'FieldTypeIsInvalidError';
        this.statusCode = 400;
    }

}

export default FieldTypeIsInvalidError;
