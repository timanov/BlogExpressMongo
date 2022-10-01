import exress from 'express';
import jwt from 'jsonwebtoken';

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