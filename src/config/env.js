const envVars = {
  WEATHER_API_KEY: import.meta.env.VITE_WEATHER_API_KEY,
  EMAIL_SERVICE_ID: import.meta.env.VITE_EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL,
};

Object.freeze(envVars);

export default envVars;
