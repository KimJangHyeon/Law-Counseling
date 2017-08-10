module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('mainpage.html')
     });
     app.post('/',function(req,res){
        res.render('mainpage.html')
     });
     app.get('/profil',function(req,res){
        res.render('Message_Board.html');
    });
     app.get('/write',function(req,res){
        res.render('write.html');
    });
       app.get('/route',function(req,res){
        res.render('direction.html');
    });
       app.get('/read',function(req,res){

        res.render('read.html');
    });
}