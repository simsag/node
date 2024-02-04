const Sequelize = require('sequelize');
const config = require('../config/config');

const db = {};

const sequelize = new Sequelize({...config, sync: false});

db.sequelize = sequelize;

db.write = require('./write')(sequelize, Sequelize); // db를 작성할거잖아 테이블을, 클래스는 대문자 시작

module.exports = db;