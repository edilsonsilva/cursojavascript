function troca(){
 
    var imagem = document.getElementById("foto").src;

    console.log(imagem);
    //Vamos pegar a quantidade de caracteres da variável imagem
    //com o comando length;
    console.log(imagem.length);
    //Vamos utilizar o comando substring para obter um trecho de texto
    //do caminho do nome do arquivo
    console.log(imagem.substring(imagem.length - 13,imagem.length));
    
    var rsimg = imagem.substring(imagem.length - 13,imagem.length);

    rsimg = rsimg == "img/foto1.jpg" ? "img/foto2.jpg" : "img/foto1.jpg";

    document.getElementById("foto").src = rsimg;

    console.log(rsimg);
    
}

function infoData(){

    //vamos fazer uma instância da classe Date(). Esta classe 
    //possui muitas funções, tais como: getHours, getDate, getMonth
    const tempo = new Date();
    var datacompleta = tempo.toLocaleDateString();
    var diames = tempo.getDate();//traz o dia do mês
    var diasemana = tempo.getDay();//traz o dia da semana indexado de 0 a 6
    var mes = tempo.getMonth();//traz o mês indexado de 0 a 11
    var hora = tempo.getHours();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();
    
    var dias = "";
    
    //Desvio de fluxo multiplo com switch case
    switch(diasemana){

        case 0:
            dias = "Domingo";
            break;
        case 1:
            dias = "Segunda-feira";
            break;
        case 2:
            dias = "Terça-feira";
            break;
        case 3:
            dias = "Quarta-feira";
            break;
        case 4:
            dias = "Quinta-feira";
            break;
        case 5:
            dias = "Sexta-feira";
        case 6:
            dias = "Sábado";
            break;
        default:
            alert("Este dia de semana não existe")
            break;
    }

    switch (mes){
        case 0:
            m = "Janeiro";
            break;
            case 1:
            m = "Fevereiro";
            break;
            case 2:
            m = "Março";
            break;
            case 3:
            m = "Abril";
            break;
            case 4:
            m = "Maio";
            break;
            case 5:
            m = "Junho";
            break;
            case 6:
            m = "Julho";
            break;
            case 7:
            m = "Agosto";
            break;
            case 8:
            m = "Setembro";
            break;
            case 9:
            m = "Outubro";
            break;
            case 10:
            m = "Novembro";
            break;
            case 11:
            m = "Dezembro";
            break;
            default:
                alert("Este mês não existe");
                break;
    }




    console.log("Hoje é %d de %s O dia da semana é %s",diames,m,dias);

    console.log(datacompleta);
       
}