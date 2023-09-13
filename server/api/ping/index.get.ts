import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const URL = process.env.URL;

  try {
    /*console.log(event);*/
    const body = await event.fetch(`${URL}/ping`)
      .then(res => res.json())
      .catch(err => err.json());
    return {
      type: 'get',
      status: body.error ? body.error.statusCode : 200,
      body: {
        ...body,
        url: body.error && URL,
      },

    };
  } catch (err) {
    console.log('err-ping >>>', err);

    event.res.statusCode = 500;
    return {
      status: 500,
    };
  }
});
