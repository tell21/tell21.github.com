$(document).ready(function(){
	$('.navbar-brand').click(function () {

	    $('#aInicio').addClass("opcao-ativa");
	    $('#aEquipe').removeClass("opcao-ativa");
	    $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
	});
	
    $('#aQuemSomos2').click(function () {

        $('#aQuemSomos').addClass("opcao-ativa");
        $('#aEquipe').removeClass("opcao-ativa");
        $('#aInicio').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");

    });
    $('#aQuemSomos').click(function () {

	    $('#aQuemSomos').addClass("opcao-ativa");
	    $('#aEquipe').removeClass("opcao-ativa");
	    $('#aInicio').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");

	});
	$('#aInicio').click(function () {

	    $('#aInicio').addClass("opcao-ativa");
	    $('#aEquipe').removeClass("opcao-ativa");
	    $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");

	});
	$('#aEquipe').click(function () {

	    $('#aEquipe').addClass("opcao-ativa");
	    $('#aInicio').removeClass("opcao-ativa");
	    $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");

	});
    $('#aContato').click(function () {

        $('#aContato').addClass("opcao-ativa");
        $('#aInicio').removeClass("opcao-ativa");
        $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aEquipe').removeClass("opcao-ativa");

    });
});

$(document).ready(function() {
$("#formacao1").click(function () {
    $("#formacao1").removeClass("btn-default").addClass("btn-primary");
    // $(".tab").addClass("active"); // instead of this do the below 
    $("#contato1").removeClass("btn-primary").addClass("btn-default");
    $("#descricao1").removeClass("btn-primary").addClass("btn-default");   
});
$("#contato1").click(function () {
    $("#contato1").removeClass("btn-default").addClass("btn-primary");
    // $(".tab").addClass("active"); // instead of this do the below 
    $("#formacao1").removeClass("btn-primary").addClass("btn-default");
    $("#descricao1").removeClass("btn-primary").addClass("btn-default");   
});
$("#descricao1").click(function () {
    $("#descricao1").removeClass("btn-default").addClass("btn-primary");
    // $(".tab").addClass("active"); // instead of this do the below 
    $("#contato1").removeClass("btn-primary").addClass("btn-default");
    $("#formacao1").removeClass("btn-primary").addClass("btn-default");   
});
$("#formacao2").click(function () {
    $("#formacao2").removeClass("btn-default").addClass("btn-primary");
    // $(".tab").addClass("active"); // instead of this do the below 
    $("#contato2").removeClass("btn-primary").addClass("btn-default");
    $("#descricao2").removeClass("btn-primary").addClass("btn-default");   
});
$("#contato2").click(function () {
    $("#contato2").removeClass("btn-default").addClass("btn-primary");
    // $(".tab").addClass("active"); // instead of this do the below 
    $("#formacao2").removeClass("btn-primary").addClass("btn-default");
    $("#descricao2").removeClass("btn-primary").addClass("btn-default");   
});
$("#descricao2").click(function () {
    $("#descricao2").removeClass("btn-default").addClass("btn-primary");
    // $(".tab").addClass("active"); // instead of this do the below 
    $("#contato2").removeClass("btn-primary").addClass("btn-default");
    $("#formacao2").removeClass("btn-primary").addClass("btn-default");   
});
});
