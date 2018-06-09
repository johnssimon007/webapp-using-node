exports.add = function(req, res){
   if(req.method == "POST"){
     var dbconnect=require('./dbconnect');
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;

      var sql = "INSERT INTO users(first_name,last_name,mob_no,user_name,password) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";
      var query = db.query(sql, function(err, result) {

         messages = "account registered successfully.login to activate youe acccount";
         console.log('signed up,');
         setTimeout(function() {
            res.render('signup', { messages:messages});
            console.log('redirecting user to login');
              }, 3000);
          res.render('login');

      });

   } else {
      res.render('signup');
   }
};
