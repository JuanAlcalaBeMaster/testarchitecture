/**
 * @author Juan David Alcala Sanchez
 * @file Object configuration variables of the Development enviroment
 * @date 2021-12-10
 * @version 1.0.0
 */
require('dotenv').config();

export default {
    "server": {
        "domain": process.env.CORS,
        "port": process.env.PORT,
        "cors": process.env.CORS
    },

    // Base de datos
    "MySql" : {
        "host": process.env.DB_HOST,
        "user": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
    },

    "Credentials" : {
        "creationUsersMasterTools" : {
            "user": process.env.EMAIL_CREATION_USERS,
            "password": process.env.PASSWORD_CREATION_USERS
        },
        "funnels" : {
            "token": process.env.TOKEN_FUNNELS
        },
        "shorter" : {
            "token": process.env.TOKEN_SHORTER
        }
    }
}