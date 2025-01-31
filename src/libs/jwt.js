import jwt from 'jsonwebtoken'
import { JWT_SECRET} from '../config.js'
 export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
        JWT_SECRET,
        {
            expiresIn: "2h"
        },
        (err, token) => {
            if (err) reject(err);
            resolve(token)
            
        }
        );
    })
}