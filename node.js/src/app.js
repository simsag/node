const express = require('express');
const cors = require('cors');
const { configDotenv } = require('dotenv');

const router = require("./router/index");
const { sequelize } = require('./model');

configDotenv();
const port = process.env.POPT || 8080;

const app = express();

app.use(express.urlencoded({extended: true})); // url 파싱할때 외부모듈 쓸지 내부모듈 쓸지

app.use(express.json());
app.use(cors({
    origin: 'localhost',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server has initted on ${port}!`)

    sequelize.sync({ force: false}) // db 연결
        .then(()=>{
            console.log(`DB has initted`);
        })
        .catch(err => {
            console.error(err);
        })
});