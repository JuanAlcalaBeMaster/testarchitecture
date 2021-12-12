/**
 * @author Juan David Alcala Sanchez
 * @file Model with the bussiness logic of module Product
 * @date 2021-12-10
 * @version 1.0.0
 */

/** Imports */
import productDao  from './dao';

export = {
  async getProducts() {
    return productDao.getProducts();
  },
}