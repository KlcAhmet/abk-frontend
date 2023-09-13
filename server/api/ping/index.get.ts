import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const url = process.env.DEV_URL;

  try {
    /*console.log(event);*/
    const body = await event.fetch(`${url}/ping`)
      .then(res => res.json())
      .catch(err => console.log(err));
    return {
      type: 'get',
      status: 200,
      body: body,
    };
  } catch (err) {
    console.dir('err-ping >>>', err);

    event.res.statusCode = 500;
    return {
      status: 500,
    };
  }
});
