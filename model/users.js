const db = require("../database/db.js");

// authentification login
const authLogin = (body, callback) => {
  //request body
  const { username, password } = body;
  
  db.query("SELECT * from users where username = ? and password = ?" , [username, password] , 
    function(err, result){
      if(err){
        callback(true, err);
      }else{
        callback(false, result)
      }       
  })

}



module.exports = {
  authLogin
}

// const authLoginPromise = () => {  
//   return new Promise((resolve, reject)=> {
//   })
// }
//metode async await
// try{
//   const prom = await authLoginPromise();
//   const prom1 = await authLoginPromise(prom);
//   const prom2 = await authLoginPromise();
//   const prom3 = await authLoginPromise();
// }catch(e){
//   error = e;
// }
// metode waterfall
// authLoginPromise().then((res)=>{
//   // res = hilmi
//   authLoginPromise(res).then(()=>{

//   })
//   .catch(()=>{

//   })
// })
// .catch((e)=>{
//   error = e;
// })


// const authLoginCallback = (callback) => {
//   authLoginPromise().then((res)=>{
//     callback(false, res);
  
//   }).catch((err)=>{
//     callback(true, err);
  
//   })
// }

// const login = () => {
//   authLoginCallback(function(error, result){

//   })
// }
