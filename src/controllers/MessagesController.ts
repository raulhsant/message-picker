import { Request, Response } from 'express';
import MessagesService from '../services/MessagesService';

class MessagesController {

    messagesService = new MessagesService()

    randomMessage(request: Request, response: Response) {
        const messages = this.messagesService.getMessages();
        if (messages.fileExists) {
            let index = Math.floor(Math.random() * (messages.messages.length));

            let result = {
                message: messages.messages[index],
                index: index,
            };
            return response.json(result);
        }
        response.status(500).send("Looks like the messages database went for a walk... &#x1F3C3&#x1F3C3&#x1F3C3");
    }

    getMessage(request: Request, response: Response) {
        const id = parseInt(request.params.id);

        const messages = this.messagesService.getMessages();
        if (messages.fileExists) {
            let result = {
                message: messages.messages[id],
                index: id
            }
            if (result.message === undefined) {
                response.status(400).send("The requested message could not be found. &#x1F61E")
                return;
            }
            return response.json(result);
        }
        response.status(500).send("Looks like the messages database went for a walk... &#x1F3C3&#x1F3C3&#x1F3C3");
    }
}

export default MessagesController;