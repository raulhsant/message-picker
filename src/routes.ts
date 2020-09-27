import express from 'express';
import MessagesController from './controllers/MessagesController'

const routes = express.Router();

const messagesController = new MessagesController();
// const randomMessage = messagesController.randomMessage;

routes.get('/messages', (request, response) => {
    messagesController.randomMessage(request, response)
});
routes.get('/messages/:id', (request, response) => {
    messagesController.getMessage(request, response)
});

export default routes;