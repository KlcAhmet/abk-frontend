import { defineEventHandler, readBody } from 'h3';
import { ITicket, ITicketResponse } from '~/server/dbModels';

export default defineEventHandler(async (event) => {
  const API_URL = process.env.API_URL;

  const { name, mail, message }: ITicket = await readBody<ITicket>(event);
  //console.log('event >>>', event.node.req.rawHeaders);
  try {
    if (![name, mail, message].every(Boolean)) {
      return {
        status: 400,
      };
    }

    const response: ITicketResponse = await $fetch(`${API_URL}/ticket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, mail, message }),
    });
    console.log(response);
    return {
      statusCode: response.statusCode,
      headers: response.headers,
    };
  } catch (err) {
    return {
      error: err,
      statusCode: 500,
    };
  }
});