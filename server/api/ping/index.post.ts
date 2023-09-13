import { createRouter, defineEventHandler, readBody, useBase } from 'h3';

interface IRequestBody {
  name: String,
  mail: String,
  message: String,
}

const router = createRouter();
router.post('/api/ping', defineEventHandler(async (event) => {
  const { name, mail, message }: IRequestBody = await readBody<IRequestBody>(event);
  try {
    if (![name, mail, message].every(Boolean)) {
      event.res.statusCode = 400;
      return {
        status: 400,
      };
    }
    /*const newTicket = await ticket.create({
      name,
      mail,
      message,
    });*/
    return {
      type: 'post',
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

export default useBase('ping', router.handler);