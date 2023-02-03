/*$(document).ready(function(){
alert("ola mundo")
})

$(window).on('load',function(){
    alert("olá mundo")
})*/

$(function(){

    $('body').click(function(){
        $('.box').css('background-color','green');
    })



    /*

    Gostaria de informar que esse código abaixo foi gerado por uma tecnologia da OpenIA
    chamada ChatGPT, uma IA em formato de chat que soluciona dúvidas de forma
    eficiênte e ainda da a explicação. Vou deixar aqui relatado o meu chat com a ferramenta:

    "Lucas Slechticius: Pode fazer um código em JavaScript usando a biblioteca JQuery para que caso 
    eu clique em qualquer parte da minha página html, o H1 se torne da cor azul?"

    "ChatGPT: Sim, você pode fazer isso adicionando o seguinte código ao seu arquivo JavaScript:"


    $(document).click(function() {
        $("h1").css("color", "blue");
      });

    "ChatGPT: Este código usa o método click do JQuery para escutar o evento de clique em todo o documento 
    (representado pelo objeto $(document)). Quando esse evento é disparado, a função anônima que você forneceu
     é executada, mudando a cor do elemento h1 para azul usando o método css do JQuery.

Lembre-se de incluir a biblioteca JQuery em seu projeto antes de usar o código acima."


Simplesmente sensacional a tecnologia.




*/

});