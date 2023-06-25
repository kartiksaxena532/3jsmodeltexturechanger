import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';
import openai from 'openai';
import axios from 'axios';

dotenv.config();

const router = express.Router();


const config = new Configuration({
  OPENAI_API_KEY='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';
  
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  console.log("func called")
  console.log(process.env.OPENAI_API_KEY)
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json' 
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;