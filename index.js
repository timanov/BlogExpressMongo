import exress from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://admin:wwwwww@cluster0.zabcece.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = exress();

app.use(exress.json());

app.get('/', (req, res) => {
    res.send('1  Hello World');
});

app.post('/auth/login', (req, res) => {
    console.log(req.body);
    
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Вася Пупкин',
    },
    'secret123'
    );

    res.json({
        success: true,
        token,
    });
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
})