import path from 'path';
import fs from 'fs';
import MessageNotFound from '../errors/errors';

class MessagesService {
    getMessages() {
        let myPath = path.join(__dirname, '..', '..', 'data', 'messages.txt');
        return fs.readFileSync(myPath, 'utf-8').toString().split('\n');
    }

    getRandomMessage(seed: number) {
        const messages = this.getMessages();
        const index = Math.floor(seed * messages.length);
        return {
            message: messages[index],
            id: index
        };
    }

    getMessage(id: number) {
        const messages = this.getMessages();
        if (id > messages.length)
            throw new MessageNotFound(`Message with id ${id} could not be found!`)
        return {
            message: messages[id],
            id: id
        }
    }

}

export default MessagesService;