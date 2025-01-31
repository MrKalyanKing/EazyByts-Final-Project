import express,{ Router } from "express";
import { booking } from "../Controllers/Booking.js";

const router=express.Router()


router.post('/booking',booking)


export default router