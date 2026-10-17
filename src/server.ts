import { createApp } from "./app.ts";

// Heroku sets PORT; locally it comes from .env or defaults to 3000.
const port = Number(process.env.PORT ?? 3000);

createApp().listen(port, () => {
  console.log(`listening on port ${port}`);
});
