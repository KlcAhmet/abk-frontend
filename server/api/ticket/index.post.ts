import { defineEventHandler, getHeaders, readBody } from 'h3';
import { ITicket, ITicketResponse, IUserInfo } from '~/server/dbModels';
import { CollectUsersInfo } from '~/server/api/mixins/collect-user-info';
import { createTicketValidate } from '~/server/validations';

export default defineEventHandler(async (event) => {
  const API_URL: string | undefined = process.env.API_URL;
  const headers: IUserInfo = new CollectUsersInfo(getHeaders(event)).getUserRemoteInfo();
  const ticket: ITicket = await readBody<ITicket>(event);
  const ticketResponse: ITicketResponse = {
    statusCode: 200,
  };

  try {
    const { isValid } = await createTicketValidate(ticket);

    if (isValid) {
      const response: ITicketResponse = await $fetch(`${API_URL}/ticket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(ticket),
      });
      ticketResponse.statusCode = response.statusCode;
    } else {
      ticketResponse.statusCode = 400;
    }

    return ticketResponse;
  } catch (err) {
    return {
      statusCode: 500,
    };
  }
});