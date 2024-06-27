const cors = require('cors');
const helmet = require('helmet');
const dayjs = require('dayjs');
const express = require('express');
const app = express();
app.use(cors());
app.use(helmet());

const today = new Date();
const todayToDayjs = dayjs(today).formet("YYYY-<<-DD");

app.use('/', (req, res)=>{
    res.send('서버 실행중');
});
app.listen(8000, ()=>{
    console.log('http://localhost:8000 에서 서버 실행중');
})