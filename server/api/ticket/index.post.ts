import { createRouter, defineEventHandler, readBody, useBase } from 'h3';
import { ticket } from '~/server/dbModels';

interface IRequestBody {
  name: String,
  mail: String,
  message: String,
}

const router = createRouter();

router.post('/api/ticket', defineEventHandler(async (event) => {
  const { name, mail, message }: IRequestBody = await readBody<IRequestBody>(event);
  try {
    if (![name, mail, message].every(Boolean)) {
      event.res.statusCode = 400;
      return {
        status: 400,
      };
    }
    const newTicket = await ticket.create({
      name,
      mail,
      message,
    });
    return {
      status: 200,
    };
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      status: 500,
    };
  }
}));

export default useBase('/api/hello', router.handler);