import express, { Request, Response } from 'express';
import session from 'express-session';
import customerRoutes from './routes/CustomerRoutes';
// import generalRoutes from './routes/GeneralRoutes';
import authRoutes from './routes/AuthRoutes'
import authMiddleware from './middleware/authMiddleware';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/customer", session({ secret: "fingerprint_customer", resave: true, saveUninitialized: true }))
app.use("/customer/auth", authRoutes); // Authentication endpoints
app.use("/customer", authMiddleware, customerRoutes); // Routes that require authentication

// app.use("/", generalRoutes)

export default app;
