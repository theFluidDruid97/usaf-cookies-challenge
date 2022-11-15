import express from 'express';
import cookieParser from 'cookie-parser';

const port = 8076;
const app = express();
app.use(cookieParser());

app.get('/login/:name', (req, res) => {
    let { name } = req.params;
    res.cookie('name', name);
    res.end();
})

app.get('/hello', (req, res) => {
    if(req.cookies.name) res.end('hello ' + req.cookies.name);
    else res.redirect('/login');
})

app.listen(port, () => console.log(`server running on port ${port}`));
