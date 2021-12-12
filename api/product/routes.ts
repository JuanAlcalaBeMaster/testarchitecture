/**
 * @author Juan David Alcala Sanchez
 * @file Routes of module Product
 * @date 2021-12-10
 * @version 1.0.0
 */

/** Imports */
import express from 'express';

import controller from './controller'

const router = express.Router();

router.get('/', controller.getProducts);

export = router;
