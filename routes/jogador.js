var express = require('express');
var router = express.Router();

var sql = require('mssql');

const config = {
    user: 'sa',
    password: 'alves9846',
    server: 'localhost',
    port: 54137,
    database:"icaros"
};

/* GET users listing. */
router.get('/', function (req, res, next) {
    //*
        sql.close();
        sql.connect(config, err => {
        if (err) return next(err)
        //envia consultas de pessoas 
        new sql.Request()
        .query('select matricula,nome_jog,data_nas,nome_mae,nome_pai,altura,peso,endereco,posicao from jogador '
        , (err, pessoas) => {
            if (err) return next(err)
           sql.close(); 
           //console.log(p);
            res.json(pessoas.recordset);                      
        })
        
    })// sql connect //*/
   
});// router.get 


//* adicionar jogador // editar
router.post('/', function (req, res, next) {
  
    
    console.log(req.body);
 //*           
  /*
    if(req.body.end_pessoa==null){
        req.body.end_pessoa ="";
    }
    */
        sql.close();
if(req.body.matricula!=null && req.body.nome!=null){
        sql.connect(config, err => {
         if (err) return next(err)
        
        
        //envia consultas de pessoas 
        new sql.Request()
        .query("insert into jogador values("+"'"+ req.body.nome +"'"+","+"'"+ req.body.matricula+"'"
        + ","+ "'" + req.body.datanas + "'" +","+"'"+req.body.nome_mae+"'" +","+"' "+req.body.nome_pai +"'"+","+req.body.altura+","
        +req.body.peso+","+"'"+req.body.endereco+"'"+","+"'"+req.body.posicao+"'" +")"
        , (err, pessoas) => {
            if (err) {
              console.log(':('+err);
              return next(err);
           }
           return res.send('Successfully inserted');                      
        })
        
    })// sql connect 
}// fim do if
else {
    console.log("Erro ao inserir");
}
//*/
});


router.post('/:id',function(req,res,next){
    console.log("Aki para editar");
    var pessoa = req.body ;
    console.log(pessoa);
//*
sql.close();
if(req.params.id!=null){
        sql.connect(config, err => {
         if (err) return next(err)        
        //envia consultas de pessoas 
        // converter a data. 
        //*
        new sql.Request()
        .query("update jogador set nome_jog = "+
        "'"+req.body.nome_jog+"',altura = "+ req.body.altura+",peso = "+req.body.peso+
        ",nome_mae = "+"'"+req.body.nome_mae+"'"+",nome_pai = "+"'"+req.body.nome_pai+"'"+
        ",data_nas = "+"'"+req.body.datanas+"'"+",posicao = "+"'"+req.body.posicao+"'"+
        " where matricula = "+"'"+req.params.id+"'"
        , (err, pessoas) => {
            if (err) {
              console.log(':('+err);
              return next(err);
           }
           console.log("Editado");
           return res.send(pessoa.recordsets);                      
        })
        //*/
        
    })// sql connect 
}// fim do if
else {
    console.log("Erro");
}
//*/


});// router.post


module.exports = router;
