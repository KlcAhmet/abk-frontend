import { defineEventHandler, getHeaders, readBody } from 'h3';
import { ITicket, ITicketResponse, IUserInfo } from '~/server/dbModels';
import { CollectUsersInfo } from '~/server/api/mixins/collect-user-info';

export default defineEventHandler(async (event) => {
  const API_URL: string | undefined = process.env.API_URL;
  const headers: IUserInfo = new CollectUsersInfo(getHeaders(event)).getUserRemoteInfo();
  const { name, mail, message }: ITicket = await readBody<ITicket>(event);

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
        ...headers,
      },
      body: JSON.stringify({ name, mail, message }),
    });

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