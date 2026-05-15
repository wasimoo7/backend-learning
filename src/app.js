import express from 'express';
import morgan from 'morgan';
import autheRouter from "./routes/auth.routes.js"

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/auth",autheRouter);

export default app