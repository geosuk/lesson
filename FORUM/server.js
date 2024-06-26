const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(8000, ()=>{
    console.log('http://localhost:8000 에서 서버 실행중');
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get('/news', (req, res)=>{
    res.send('뉴스에요');
})
app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/about.html');
})

