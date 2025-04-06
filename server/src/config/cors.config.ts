export const corsConfig = {
  origin: process.env.FRONTEND_URL,
  methods: 'GET,POST,PUT,DELETE,OPTIONS,PATCH',
  credentials: true,
};
export const corsConfigDev = {
  origin: '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS,PATCH',
  credentials: true,
};
