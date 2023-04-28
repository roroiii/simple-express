import express, { Request, Response } from 'express';
import todoController from './controllers/todoControllers';

const app = express();
const port = 5001;

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/todos', todoController.getAll);
app.get('/todos/:id', todoController.get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
