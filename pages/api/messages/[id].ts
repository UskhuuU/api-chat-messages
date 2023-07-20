import type { NextApiRequest, NextApiResponse } from "next";

type Date = {
  name:string;
}

export default function handler(req:NextApiRequest, res:NextApiResponse<Date>){
    switch(req.method){
        case 'PATCH':
            //update one message
            break;
        case 'GET':
            //read many messages
            break;
        case 'DELETE':
            //delete one message
            break;
        default:
            res.status(405).end();
            return;
    }
}