import { createRouter, defineEventHandler, useBase } from 'h3';

interface IRequestBody {
  name: String,
  mail: String,
  message: String,
}

const router = createRouter();
router.get('/api/ping', defineEventHandler(async (event) => {
  try {

    console.log('>ping<');
    return {
      type: 'get',
      status: 200,
    };
  } catch (err) {
    console.dir('err-ping >>>', err);

    event.res.statusCode = 500;
    return {
      status: 500,
    };
  }
}));

export default useBase('ping', router.handler);