$(document).ready(function () {

    $(".search").click(function (evt){
        // console.log(e);
        // console.log(this);
        var container = $(this).closest('.search-wrapper');
        if (!container.hasClass('active')) {
            container.addClass('active');
            evt.preventDefault();
        } else if (container.hasClass('active') && $(this).closest('.input-holder').length == 0) {
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
    })


        $("#search-input").keyup(function (e) {
            console.log(`/search${$("#search-input").val()}`);
            if ($("#search-input").val()==="") {
                $("#search_href").attr("href", `/home`)
            }else{
                $("#search_href").attr("href", `/${$("#search-input").val()}`)
            }

        });

})