var app=require('./app.js');
exports.login = function(req, res){
   var message = '';
   var sess = req.session;

   if(req.method == "POST"){
      var dbconnect=require('./dbconnect');
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var sql="SELECT user_name,password FROM users where user_name='"+name+"' and password='"+pass+"'";
      db.query(sql, function(err, results){
         if(results.length){
            message=name;
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            console.log('succesfully logged in'+message);
            msg ='welcome'+''+message;
            res.render('profile',{msg: msg});
         }
         else{
            messages = 'incorrect username or password.';
            res.render('login',{messages: messages});
         }

      });
   } else {
      res.render('index.ejs',{message: message});
   }
};
