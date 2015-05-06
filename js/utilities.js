
$(function () {
    var mainPlaceHolder = $("#mainPlaceHolder");
    mainPlaceHolder.load("main.html");
    /* single page application using jQuery & Ajax */

    $("body").on('click', '*[data-url]', function (e) {
        e.preventDefault();
        var siteUrl = $(this).attr("data-url"); // get url

        $.ajax({
            type: "GET",
            url: siteUrl,
            dataType: "html",
            beforeSend: function () {
                mainPlaceHolder.html("<div class='preloader'><img src='images/prealoader.gif' /></div>");

            },
        })
        .done(function (html) {
            mainPlaceHolder.html(html);
        })
        .fail(function () {
            //alert( "error" );
        })
        .success(function () {
            //alert("success");
        })
    });


    $(window).scroll(function () {
        /* scroll top arrow */
        if ($(this).scrollTop() > 500) {
            $('.bs-docs-sidebar').addClass("affix");
        } else {
            $('.bs-docs-sidebar').removeClass("affix");
        }
    });


})