// nome o controle da rota Edit
appA.controller('TelaEdit',TelaEdit);


function TelaEdit(localStorageService,$http,$mdDialog,$scope, $location,$timeout,$interval){
    //mudaBt2();
    
    //ordenarCidade(city);
    
    var tmatricula = window.sessionStorage.getItem('matricula');    
    
    var  p = buscaPmatricula(tmatricula);
    //console.log(diaS);

    var jogador ={
        matricula : p.info.matricula,
        nome_jog : p.info.nome_jog,
        dia : p.dia,
        mes : p.mes,
        ano : p.ano,
        nome_mae : p.info.nome_mae,
        nome_pai : p.info.nome_pai,
        altura : p.info.altura,
        peso : p.info.peso,
        endereco : p.info.endereco,
        posicao : p.info.posicao,
        
    }
    //console.log(jogador.dia);
    $scope.SelectDia = jogador.dia;
    $scope.SelectAno = jogador.ano;
    $scope.SelectMes = meS[jogador.mes - 1];
    $scope.SelectPos = jogador.posicao;
    //console.log(meS[jogador.mes-1]);


    function fsalvar(){

        
        
        jogador.nome_jog = document.getElementById("nome").value;
        jogador.dia = $scope.SelectDia;
        jogador.ano = $scope.SelectAno;
        jogador.mes = $scope.SelectMes;
        nome_mae = document.getElementById("nome_mae").value;
        nome_pai = document.getElementById("nome_pai").value;
        altura = document.getElementById("altura").value;
        peso = document.getElementById("peso").value;
        endereco = document.getElementById("endereco").value;
        trata = trataNulos(nome_mae,nome_pai,peso,altura,endereco);
        jogador.nome_mae = trata.nome_mae;
        jogador.nome_pai = trata.nome_pai;
        jogador.endereco = trata.endereco;
        jogador.altura = trata.altura;
        jogador.peso = trata.peso;
        jogador.posicao = $scope.SelectPos,
        jogador.datanas = converteData(jogador.dia,jogador.mes,jogador.ano);
        console.log(jogador.posicao);

        //console.log(trata.peso);
        //console.log(month.n+1);

     var posJogador = buscaJogador(jogador.matricula);
     //console.log(todos);
    //todos.splice(posJogador,1);
    updatePessoa(jogador,$http,$mdDialog);
    //atualizaJogador(posJogador,jogador);
    
      

     // AtualizaBD($interval,$timeout,$http,$scope);
     //getPessoas($http);
    
    //ordenarPessoas(people);

    //$mdDialog.hide();     
    
    
    window.location.reload();
}
    function cancela(){
        $mdDialog.hide();
    }

/*
    $scope.Selectsexo = Selectsexo;
    $scope.escolhidoCidade = cidadeSelect;
    var posEstado = cidadeSelect.cidade.id_estado-1;
    $scope.escolhidoEstado = states[posEstado];
*/
    function geraListaCidades(estado){
        //console.log(estado);
        var id = estado.estados.id_estado;
        console.log(id);
        if(!id){
            return;
        }
        var listaCidades =[];
        //*
        for(var cont= 0; cont< city.length;cont++){
            var c = city[cont];
            if(city[cont].cidade.id_estado==id){
                listaCidades.push(c);
            }//fim do if
        }// fim do for */
        return listaCidades;
    }
    //var listaC = [];

    function geraLista(){
        var e = $scope.escolhidoEstado;
        listaC = geraListaCidades(e);
        console.log(listaC);
        $scope.cidades = listaC;    
    }
    
   // $scope.cidades = listaC;
    return{
     //   vecSexo : vecSexo,
        dias : diaS,
        meses : meS,
        anos : anoS,
        pessoa: jogador,
        cancelar:cancela,
        Bok:fsalvar,
        pos : posicoes,
        //estados : states,
        //gListaC : geraLista,
    }
}

function buscaPmatricula(matricula){
    if(!matricula){
            return undefined;
        }
        for(var cont = 0; cont< todos.length;cont++){
            if(todos[cont].info.matricula==matricula){
                return todos[cont];
            }
        }
        return undefined;
}


 function buscaJogador(matricula){

    if(!matricula){
        return undefined;
    }

    for(var cont= 0;cont<todos.length;cont++){
        if(todos[cont].info.matricula==matricula){ 
            return cont;
        }
    }
 }

 function atualizaJogador(pos,jogador) {

     todos[pos].info.matricula = jogador.matricula;
     todos[pos].info.nome_jog = jogador.nome_jog;
     todos[pos].info.altura = jogador.altura;
     todos[pos].info.peso = jogador.peso;
     todos[pos].info.endereco = jogador.endereco;
     todos[pos].info.nome_mae = jogador.nome_mae;
     todos[pos].info.nome_pai = jogador.nome_pai;
     todos[pos].info.data_nas = jogador.datanas;
     todos[pos].dia = jogador.dia;
     todos[pos].mes = jogador.mes.n + 1;
     todos[pos].ano = jogador.ano;
     
	}