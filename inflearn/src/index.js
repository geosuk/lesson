const express = require('express');
const app = express();

let users = [
    {
    id : 1, 
    name : 'labil',
    age: 12
}
]

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "700mb"}));

// 유저 정보 가져오기
// 성공하게 되면 status : 200
app.get("/users", (req, res)=>{
    res.status(200).json({users});
})

// 유저 생성
// 성공하게 되면 status : 201
app.post('/users', (req, res)=>{
    const {name, age} = req.body;
    console.log('body: ', req.body);

    users.push({
        id: new Date().getTime(), 
        name : 'labil2',
        age,
    })
    res.status(201).json({users});
})

// 유저 수정
// 성공하게 되면 status : 204
// req.params.id
app.patch('/users/:id', (req, res)=>{
    const { id } = req.params;
    const {name, age} = req.body;
    console.log('param', req.params);
    const targetUserIdx = users.findIndex((user)=> user.id === Number(id))
    users[targetUserIdx] = {
        id : users[targetUserIdx].id,
        name: name ? name : users[targetUserIdx].name,
        age: age ?? users[targetUserIdx].age
    };
    res.status(204).json();
})

// 유저 삭제
// 성공하게 되면 status : 204
app.delete('/users/:id', (req, rew)=>{
    const {id} = req.params;

    const deletedUsers = users.filter((user)=>user.id !== Number(id));
    users = deletedUsers;

    res.status(204).json();
})

app.use('/', (req, res)=>{
    res.send('서버 실행중');
});
app.listen(8000, ()=>{
    console.log('http://localhost:8000 에서 서버 실행중');
})