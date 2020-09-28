class MessageNotFound extends Error {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, MessageNotFound.prototype);
    }

    code = "ENOMES";
}

export default MessageNotFound;