class InvalidCoordinatesException extends Error {
    private statusCode: number;

    constructor() {
        super();
        this.name = 'InvalidCoordinatesException';
        this.message= 'Given Coordinates are invalid'
        this.statusCode = 400;
    }
}

export default InvalidCoordinatesException;
