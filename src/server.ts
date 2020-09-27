import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);
app.listen(8888);

console.log("Oh God, I feel like I'm running...");