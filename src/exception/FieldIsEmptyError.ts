import {IServiceError} from "./IServiceError";

class FieldIsEmptyError extends Error implements IServiceError {
    statusCode: number;

    constructor(message: string) {
        super(message);
        this.name = 'FieldIsEmptyError';
        this.statusCode = 401;
    }

}

export default FieldIsEmptyError;
