import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyCkCDqUAxFbucy_7ALxNf2Mu6_Ue3UFqno",
  authDomain: "coupon-spider.firebaseapp.com",
  databaseURL: "https://coupon-spider.firebaseio.com",
  projectId: "coupon-spider",
  storageBucket: "coupon-spider.appspot.com",
  messagingSenderId: "321942637149"
};
firebase.initializeApp(config);
var db = firebase.firestore();
export default db;