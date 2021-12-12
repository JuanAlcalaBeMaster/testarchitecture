/**
 * @author Juan David Alcala Sanchez
 * @file Principal file of the general routes control
 * @date 2021-12-10
 * @version 1.0.0
 */

import express from 'express'

import product from '../api/product/routes';

const router = express.Router();

router.use('/product', product);

export = router;