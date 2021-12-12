/**
 * @author Juan David Alcala Sanchez
 * @file Controller of module Product
 * @date 2021-12-10
 * @version 1.0.0
 */

/** Imports */
import Express from 'express';

import productModel from './model';
import { ProductInterface } from './interfaces/product';
import {messageData} from './utils/lang/message'

/** External dependencies */
import ResponseDTO from './utils/requestDto';

export = {
  
  /**
   * @author Juan David Alcala Sanchez
   * @description This method have the functionality of get All data of the products
   * @param req Express functionality of the request event
   * @param res Express functionality of the response event
   * @returns data of the products
   */
  async getProducts (req:Express.Request, res:Express.Response):Promise<object> {
    try {
      const responseDTO = new ResponseDTO(res);

      const products:ProductInterface[] = await productModel.getProducts();

      return responseDTO.successResponse({message: messageData.Success["001"], data:products});
    } catch (error) {
      return res.sendStatus(500);
    }
  }

}

