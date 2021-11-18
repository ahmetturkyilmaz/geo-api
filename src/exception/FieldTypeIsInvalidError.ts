class FieldTypeIsInvalidError extends Error {
    private statusCode: number;

    constructor(message) {
        super(message);
        this.name = 'FieldTypeIsInvalidError';
        this.statusCode = 400;
    }
}

export default FieldTypeIsInvalidError;
