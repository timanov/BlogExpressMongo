import exress from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js'

mongoose.connect(
    'mongodb+srv://admin:wwwwww@cluster0.zabcece.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = exress();

app.use(exress.json());

app.post('/', (req, res) => {
    console.log('hello world')
});

app.post('/auth/register', registerValidation, (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
    return res.status(400).json(errors.arraya());
   }

   res.json({
    success: true,
   });
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
})