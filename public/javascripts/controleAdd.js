// nomei a controle para a page ADD 
appA.controller('TelaADD', TelaADD);

var diaS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var meS = [
    {nome: "Janeiro", n:0},
    {nome: "Fevereiro", n:1},
    {nome: "Março", n:2},
    {nome: "Abril", n:3},
    {nome: "Maio", n:4},
    {nome: "Junho", n:5},
    {nome: "Julho", n:6},
    {nome: "Agosto", n:7},
    {nome: "Setembro", n:8},
    {nome: "Outubro", n:9},
    {nome: "Novembro", n:10},
    {nome: "Dezembro", n:11},
];
var anoS = [1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,
1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,
1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];

var posicoes = ["Goleiro","Lateral Direito","Zagueiro","Lateral Esquerdo","Volante","Meia Central","Meia Direita",
"Meia Esquerda","Meia Atacante","Atacante" ];

function TelaADD ($http,localStorageService,$mdDialog,$scope){
    //mudaBt2();
    
    //ordenarCidade(city);
      //  cidadeSelect = city[0];
        
        escolhidoDia = diaS[0];
        escolhidoMes = meS[0];
        escolhidoAno = anoS[0];

        //$scope.escolhido = cidadeSelect;
        
        $scope.SelectDia = escolhidoDia;
        $scope.SelectMes = escolhidoMes;
        $scope.SelectAno = escolhidoAno;
        $scope.SelectPos = posicoes[0];

   function btOk(){
        //console.log($scope.matricula);
        var matricula = parseInt($scope.matricula);
        var nome =$scope.nome_jog;
        var datanas = converteData($scope.SelectDia,$scope.SelectMes,$scope.SelectAno);       
        var peso = $scope.peso;
        var altura = $scope.altura;
        var nome_mae = $scope.nome_mae;
        var nome_pai = $scope.nome_pai;
        var endereco = $scope.endereco;
        var posicao = $scope.SelectPos;
        var trata = trataNulos(nome_mae,nome_pai,peso,altura,endereco);
        //console.log(trata);
        //*
        p = {
            matricula : matricula,
            nome: nome,
            datanas : datanas,
            peso : trata.peso,
            altura : trata.altura,
            nome_mae : trata.nome_mae,
            nome_pai : trata.nome_pai,
            endereco : trata.endereco,
            posicao:posicao,
         
        }

        console.log(p);

        if( matricula == undefined || nome == undefined){ // trata idade para nao aparecer NaN na tela.
           console.log("matricula ou nome são nulos");
           alert("Matricula ou nome não defenida");
        }
        else{
            console.log("FOII");
            setPessoa($http,p,$mdDialog);
        }
        //window.location.href="#!/home";
        window.location.reload();
        //*/
        }

function atualizar (){
    console.log('Atualiza');
    getPessoas($http);
    window.location.reload();
}
function cancela(){
        $mdDialog.hide();
    }



    return{  
        //pessoa: p,
        salvar: btOk,
        cancelar:cancela,
        dias: diaS,
        meses:meS,
        anos:anoS,
        pos:posicoes,
    }
} // fim do controle telaADD







//* *******************************************************
function converteData(dia,mes,ano){
      
    var data = new Date(ano, mes.n, dia);
    //console.log(data);
    return data;
    
}



function trataNulos(nome_mae,nome_pai,peso,altura,endereco){
    if(nome_mae == undefined ){
        nome_mae = "";
    }

    if(nome_pai == undefined){
        nome_pai = "";
    }

    if(peso == undefined || peso == ""){
        peso=0.00;
    }

    if(altura == undefined || altura == ""){
        altura = 0.0;
    }

    if(endereco == undefined){
        endereco = "";
    }


    return{
        nome_mae:nome_mae,
        nome_pai:nome_pai,
        peso:peso,
        altura:altura,
        endereco:endereco
    }

}

