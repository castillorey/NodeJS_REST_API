import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Book from '../models/book';
import { insufficientParameters, mongoError, successResponse, failureResponse } from './common';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    return book.save()
        .then((result) => successResponse('Data was saved to the database successfully', result, res))
        .catch((error) => mongoError(error, res));
};

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
        .exec()
        .then((books) => successResponse('Data was saved to the database successfully', {
            books: books,
            count: books.length
        }, res)).catch((error) => mongoError(error, res));
};

export default { createBook, getAllBooks };