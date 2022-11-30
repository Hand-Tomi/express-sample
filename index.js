const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/calculator', (req, res) => {
    console.log(typeof req.query.num1);
    let result = Number(req.query.num1) + Number(req.query.num2);
    res.send(`계산결과 = ${result}`);
})

app.get('*', (req, res) => {
    res.status(404).send('찾을 수 없는 페이지입니다!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})