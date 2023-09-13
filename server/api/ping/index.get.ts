import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    /*console.log(event);*/
    const body = await event.fetch('https://dev.ahmetbatukilic.com:3000/ping')
      .then(res => res.json())
      .catch(err => console.log(err));
    console.log(body);
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
