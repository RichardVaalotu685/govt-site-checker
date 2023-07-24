import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { ping } from "@network-utils/tcp-ping";

const PORT = 80
const TIMEOUT = 3000

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const url = event.queryStringParameters?.url
  if(!url){
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Provide a url query parameter'})
    }
  }

  const pingResult = await ping({ address: url, attempts: 1, port: PORT, timeout: TIMEOUT});
  const online = pingResult.errors.length === 0
  return {
    statusCode: 200,
    body: JSON.stringify({ status: online }),
  };
};

export { handler };
