import exress from 'express';

const app = exress();

app.use(exress.json());

app.get('/', (req, res) => {
    res.send('1  Hello World');
});

app.post('/auth/login', (req, res) => {
    console.log(req.body);
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