const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { user } = require('firebase-functions/lib/providers/auth');
const async = require("async");
const express = require("express");
const apps = express();
const ejs = require("ejs");
const path = require("path");

var firebaseConfig = {
    apiKey: "AIzaSyBumokVt-b5PwUAE5nzglNYivZxRfOiUd8",
    authDomain: "print4startup.firebaseapp.com",
    databaseURL: "https://print4startup-default-rtdb.firebaseio.com",
    projectId: "print4startup",
    storageBucket: "print4startup.appspot.com",
    messagingSenderId: "164068409709",
    appId: "1:164068409709:web:28d9ead5b4b589b3f35a64"
};

firebase = firebaseConfig.firebase;
const app = admin.initializeApp(firebaseConfig);
let db = admin.firestore();


apps.set('views', path.join(__dirname, './views'));
apps.set('view engine', 'ejs');
apps.engine('ejs', require('ejs').renderFile);

// site
apps.get('/', (request, response)=>{
    var params = {gubun:"1", deg:"abc"};
    response.render('main.ejs',params);
});

exports.helloWorld = functions.https.onRequest((request, response) => {
   //functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello World");
});

 // 공지사항
apps.get('/notices', (request, response)=>{
    var params = { product:request.query.product };
    response.render('notices.ejs',params);
});


// 스타트업인쇄소란
apps.get('/intro', (request, response)=>{
    var params = { product:request.query.product };
    response.render('intro.ejs',params);
});

// 인쇄물주문하기
apps.get('/products', (request, response)=>{
    var params = { product:request.query.product };
    response.render('products.ejs',params);
});

// 회원가입하기
apps.get('/join', (request, response)=>{
    var params = { product:request.query.product };
    response.render('join.ejs',params);
});

// 주문,장바구니
apps.get('/commodity', (request, response)=>{
    var params = { product:request.query.product };
    response.render('commodity.ejs',params);
});


exports.apps = functions.https.onRequest(apps);