import express from "express";
import { OpenAIStream, streamToResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
const router = express.Router();

const configuration = new Configuration({
  organization: process.env.organization,
  apiKey: process.env.apiKey,
  basePath: process.env.basePath || "",
});

const openai = new OpenAIApi(configuration);

router.post("/chat", async function (req, res, next) {
  const body = req.body || {};
  let reqMessages = body.messages;

  const char_res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: reqMessages,
    stream: true,
  });
  const stream = OpenAIStream(char_res);
  return streamToResponse(stream, res);
});

export default router;
