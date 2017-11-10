appA.controller('TelaLISTA', TelaLISTA);
//
function TelaLISTA ($http,$scope,localStorageService, $mdDialog,$timeout,$interval){
        //mudaBt2();
      //  console.log(localStorageService.keys());
      sub11 = [];
      sub13 = [];
      sub15 = [];
      sub17 = [];
      todos = [];

      carregaBD($interval,$timeout,$http,$scope);
      console.log(sub11);
      console.log(sub13);
      console.log(sub15);
      console.log(sub17);
      console.log(todos);
    //ordenarCidade(city);

function atualizar (){
    Bexibir = false;
    window.location.reload();
}

function limpa(){
   
     localStorageService.clearAll(); 
    window.location.href = "#!/home";// executa a page1      
}

function remove(cpf){
    
    deletePessoa(cpf,$http,$mdDialog);
    
}

function edit(cpf){
    window.sessionStorage.setItem('cpf', cpf);// envia para o proxima page o 'cpf'
    window.location.href="#!/EditPessoa"
}
      
function popup(cpf){
    window.sessionStorage.setItem('matricula', cpf);// envia para o proxima page o 'cpf'
    $mdDialog.show({
            controller : TelaEdit,
			controllerAs : 'Ctrl',
			templateUrl : '/pages/edit.html'
		}

        );

  };

function Add(){
     $mdDialog.show({
            controller : TelaADD,
			controllerAs : 'Ctrl',
			templateUrl : '/pages/cadastro.html'
		}

        );
        

}

       return{
           pessoas:todos,
           sub17:sub17,
           sub15:sub15,
           sub13:sub13,
           sub11:sub11,
           atualizar:atualizar,
           limpar : limpa,
           remove:remove,
           edit : edit,
           popup:popup,
           Add:Add,
           mes : meS,
          
       }
      
    };// fim do controle TelaLISTA