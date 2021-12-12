/**
 * @author Juan David Alcala Sanchez
 * @file Principal Control file of the initialization in the API
 * @date 2021-12-10
 * @version 1.0.0
 */

/** Imports */
import express from 'express';
import router from './routes';
import config from 'config'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/app', router);

module.exports = app;
