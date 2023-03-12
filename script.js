function calcularMedia() {

    // DECLARANDO CONST E TRANSFORMANDO OS VALORES EM NUMBERS E TEXTO EM STRING
    var aluno = String(document.getElementById('caixa_aluno').value);
    var n1 = Number(document.getElementById('caixa_n1').value);
    var n2 = Number(document.getElementById('caixa_n2').value);
    var n3 = Number(document.getElementById('caixa_n3').value);
    var n4 = Number(document.getElementById('caixa_n4').value);
    var media = (n1+n2+n3+n4)/4;

    // CHECANDO NO CONSOLE DO NAVEGADOR SE AS VARIÁVEIS ESTÃO CORRETAS
    console.log(media);
    console.log(`${aluno} possui média igual a ${media}.`)
    
    //-------------WHILE FUNCIONARIA?---------------------------------

    // VERIFICAÇÃO DE NUMEROS MENORES OU IGUAS A 10
    if ((n1 || n2 || n3 || n4) > 10) {
        alert("ATENÇÃO!!!! Insira valores menor ou igual a 10!! ")
        return document.getElementById('resultado').innerHTML = "INSIRA VALORES VÁLIDOS!"
    } 

    // INFORMANDO SE O ALUNO PASSOU, REPROVOU OU ESTÁ DE RECUPERAÇÃO
    if (media <= 3) {
        document.getElementById('resultado').innerHTML = `${aluno} possui média ${media}, está REPROVADO!`;

    } else {
        if (media <= 7) {
            document.getElementById('resultado').innerHTML = `${aluno} possui média ${media}, está de RECUPERAÇÃO!`;
        } else {
            document.getElementById('resultado').innerHTML = `${aluno} possui média ${media}, PASSOU!`;
        }
    }
}

