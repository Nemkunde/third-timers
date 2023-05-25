import express from 'express';
import cors from 'cors';
import authRouter from '../server/src/router/authRouter.js';
import bookRouter from '../server/src/router/bookRouter.js';
import adminRouter from '../server/src/router/adminRouter.js';
import guestRouter from '../server/src/router/guestRouter.js';
import authFormatFilter from '../server/src/middleware/authFormatFilter.js';
import jwtFilter from '../server/src/middleware/jwtFilter.js';
import profileController from '../server/src/controller/profileController.js';

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/library", guestRouter);
app.use("/auth", authFormatFilter, authRouter);
app.use("/library/profile", jwtFilter.bind({role: ["USER", "ADMIN"]}), profileController.getProfile);
app.use("/library/user", jwtFilter.bind({role: ["USER", "ADMIN"]}), bookRouter);
app.use("/admin", jwtFilter.bind({role: "ADMIN"}), adminRouter);


app.listen(port, () => console.log("Server started on port: " + port));