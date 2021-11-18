class FieldIsEmptyError extends Error{
    private statusCode: number;

    constructor(message) {
        super(message);
        this.name = 'FieldIsEmptyError';
        this.statusCode = 401;
    }
}
export default FieldIsEmptyError;