import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers["auth-token"] == undefined ){
        console.log(req.headers["auth-token"])
        return res.status(401).send('Token is missing. Please enter a valid token');
    }

    let token = req.headers["auth-token"].toString();

    try{
        let decoded = jwt.verify(token, "altaf");
        console.log(decoded);
    } catch(e){
        return res.status(401).send("Invalid Token");
    }

    return next();
}

export = verifyToken;
