import express, { Request, Response, NextFunction } from 'express';
import todoController from './controllers/todoControllers';

const app = express();
const port = 5001;

app.set('view engine', 'ejs'); // 設定顯示模板

/**
 * app.use 有點像是全域操作，所以在這裡設定的東西都會一起共用。
 * 
 * 例如：
  app.use((req, res, next) => {
    console.log('time', new Date()); // 只會顯示在 terminal 上
    res.end();  // 直接終止執行
  });
 */

app.use(express.static('public')); //拿到 public 內的資料，serving static files

/**
 *  next 的意思有點像是把東西傳下去執行或是顯示，反正就是傳下去做操作，東西就可以正常顯示在畫面上了。
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('time', new Date()); //  還是一樣是顯示在 terminal 上
  next();
});

// http://localhost:5001/todos?admin=1 全域設定 admin=1 才正常顯示，否則顯示 error
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.query.admin === '1') {
    next();
  } else {
    res.end('error');
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/todos', todoController.getAll);
app.get('/todos/:id', todoController.get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// express 內建只能拿到 req.query string 跟 url 上的東西，要拿到 req.body 就要使用套件（例如：body-parser）
