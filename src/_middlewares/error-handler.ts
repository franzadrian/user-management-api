import { Request, Response, NextFunction } from "express";

export default function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err); // Log the error
    res.status(500).json({ message: err.message || "Internal Server Error" });
}