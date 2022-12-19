import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "POST"){
    return res.status(400).json({"message": "Bad Request"});
  }

  try{
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${req.body.token}`, {
      method: "POST"
    }).then(res => res.json());
    if (response.success) {
      return res.status(200).json({
        "message": "captcha verified!"
      });
    }else{
      return  res.status(401).json({
        "message": "invalid captcha!"
      });
    }
  }catch(e) {
    return res.status(500).json({
      "message": "oops! something wrong happened!"
    })
  }
}