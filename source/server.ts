import http from 'http';

import express, {Express} from 'express';

import routes from './routes/api';

const router: Express = express();

router.use(express.urlencoded({ extended: false}));

router.use(express.json());

router.use('/', routes);

router.listen("3000", () => {
    console.log(`Example app listening at http://localhost:3000`);
  });



