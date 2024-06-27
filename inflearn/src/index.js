const cors = require('cors');
const helmet = require('helmet');
const dayjs = require('dayjs');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(cors());
app.use(helmet());

const today = new Date();
const todayToDayjs = dayjs(today).format("YYYY-MM-DD");
console.log(todayToDayjs);

const password = '1234';
const hashedPassword = bcrypt.hashSync(password, 10);
console.log(hashedPassword);

const token = jwt.sign('1234', 'dsfasf232werg');
console.log({token});

app.use('/', (req, res)=>{
    res.send('서버 실행중');
});
app.listen(8000, ()=>{
    console.log('http://localhost:8000 에서 서버 실행중');
})