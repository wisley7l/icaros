var sub17 = [];
var sub15 = [];
var sub13 = [];
var sub11 = [];
var todos = [];

appA.controller('TelaHome', TelaHome);
function TelaHome ($http,localStorageService,$mdDialog,$scope){

function abreCadastro(){
    var classe = document.getElementById('cadastro').className;
    window.location.href="#!/Cadastro" 
}

function abreListaTodos(){
    var classe = document.getElementById('lista').className;
    window.location.href="#!/ListaTodos"

}

function Add(){
     $mdDialog.show({
            controller : TelaADD,
			controllerAs : 'Ctrl',
			templateUrl : '/pages/cadastro.html'
		}

        );

}


return{
    abreCadastro : abreCadastro,
    abreListaTodos : abreListaTodos,
    Add:Add,
}

}



    function carregaBD($interval,$timeout,$http,$scope){
    sub17 = [];
    sub15 = [];
    sub13 = [];
    sub11 = [];
    todos = [];
    

        $timeout( function(){getPessoas($http);}, 1 );
       
    }



    function AtualizaBD($interval,$timeout,$http,$scope){
    sub17 = [];
    sub15 = [];
    sub13 = [];
    sub11 = [];
    todos = [];
    
        console.log("Atualizando BD");
        $timeout( function(){getPessoas($http);}, 10 );
       
    }


 