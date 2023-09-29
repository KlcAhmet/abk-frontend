import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const API_URL = process.env.API_URL;

  try {
    return await $fetch(`${API_URL}/ping`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return {
      error: err,
      statusCode: 500,
    };
  }
});