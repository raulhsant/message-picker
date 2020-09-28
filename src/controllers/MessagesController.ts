import { Request, Response } from 'express';
import MessagesService from '../services/MessagesService';

class MessagesController {

    messagesService = new MessagesService()

    randomMessage(request: Request, response: Response) {
        try {
            const seed = Math.random();
            const message = this.messagesService.getRandomMessage(seed);
            return response.json(message);
        } catch (error) {
            if (error.code === 'ENOENT') { // file not found
                console.log('File not found!')
                response.status(500).send("Looks like the messages database went for a walk... &#x1F3C3&#x1F3C3&#x1F3C3");
            } else
                throw error;
        }
    }

    getMessage(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const message = this.messagesService.getMessage(parseInt(id));
            return response.json(message);
        } catch (error) {
            if (error.code === 'ENOENT') { // file not found
                console.log('File not found!')
                response.status(500).send("Looks like the messages database went for a walk... &#x1F3C3&#x1F3C3&#x1F3C3");
            } else if (error.code === 'ENOMES') { // message not found
                console.log(error.message);
                response.status(400).send("The requested message could not be found. &#x1F61E")
            } else
                throw error;
        }
    }
}

export default MessagesController;