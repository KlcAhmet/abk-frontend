import mongoose from 'mongoose';

const options = {
  dbName: 'abk-frontend',
};

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();
  try {
    await mongoose.connect(config.mongoUrl, options);
    console.log('DB connection established.');
  } catch (err) {
    console.log('DB connection failed.', err);
  }
});