$(document).ready(function(){
	$('.navbar-brand').click(function () {
	    $('#aEquipe').removeClass("opcao-ativa");
	    $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
        $('#aInstalacoes').removeClass("opcao-ativa");
        $('#aDepoimentos').removeClass("opcao-ativa");
	});
	
    $('#aQuemSomos2').click(function () {

        $('#aQuemSomos').addClass("opcao-ativa");
        $('#aEquipe').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
        $('#aInstalacoes').removeClass("opcao-ativa");
        $('#aDepoimentos').removeClass("opcao-ativa");
    });
    $('#aQuemSomos').click(function () {

	    $('#aQuemSomos').addClass("opcao-ativa");
	    $('#aEquipe').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
        $('#aInstalacoes').removeClass("opcao-ativa");
        $('#aDepoimentos').removeClass("opcao-ativa");
	});
	$('#aInicio').click(function () {
	    $('#aEquipe').removeClass("opcao-ativa");
	    $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
        $('#aInstalacoes').removeClass("opcao-ativa");
        $('#aDepoimentos').removeClass("opcao-ativa");
	});
	$('#aEquipe').click(function () {

	    $('#aEquipe').addClass("opcao-ativa");
	    $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
        $('#aInstalacoes').removeClass("opcao-ativa");
        $('#aDepoimentos').removeClass("opcao-ativa");
	});
    $('#aContato').click(function () {

        $('#aContato').addClass("opcao-ativa");
        $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aEquipe').removeClass("opcao-ativa");
        $('#aInstalacoes').removeClass("opcao-ativa");
        $('#aDepoimentos').removeClass("opcao-ativa");
    });
    $('#aInstalacoes').click(function () {

        $('#aInstalacoes').addClass("opcao-ativa");
        $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aEquipe').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
        $('#aDepoimentos').removeClass("opcao-ativa");
    });
    $('#aDepoimentos').click(function () {

        $('#aDepoimentos').addClass("opcao-ativa");
        $('#aQuemSomos').removeClass("opcao-ativa");
        $('#aEquipe').removeClass("opcao-ativa");
        $('#aContato').removeClass("opcao-ativa");
        $('#aInstalacoes').removeClass("opcao-ativa");
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
$('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
});
$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
});
});

(function($) {
    "use strict"; // Start of use strict

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
