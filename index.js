import exress from 'express';

const app = exress();

app.get('/', (req, res) => {
    res.send('1  Hello World');
});



app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
})