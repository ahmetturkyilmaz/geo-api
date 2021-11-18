
class NotFoundException extends Error {
    statusCode: number;

    constructor(message) {
        super(message);
        this.name = 'NotFoundException';
        this.statusCode = 404 ;
    }

}

export default NotFoundException;
