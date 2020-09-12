
$(document).ready(function(){

    var buttons_dimension = $('.dimensions').children().clone()

    // $('.dimensions').append(buttons_dimension)


    $('a').each(function(index, element){
        var attr = $(element).attr("href")
        var html = $(element).html()
        var sub = html.substring(8)
        $(element).html(sub)

    })

    $('#position_switch').on("click", function() {
        var target = $('#target_switch').val()
        var value = $(this).val()
        $(target).css("position", value)
    })

    $('#button_shadow_off').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("box-shadow", "none")

    })

    $('#button_shadow_on').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("box-shadow", "0px 0px 5px 5px black")

    })


    $('#button1').on("click", function(){
        // $('form.form_of_questions_and_statements').css("margin", "0px 0px 0px 0px;")
        var target = $('#target_switch').val()
        $(target).css("float", "left")
        l(
            $(target).css("float")
        )
    })

    $('#button2').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("float", "right")
        l(
            $(target).css("float")
        )
    })

    $('#button2_A').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("float", "none")
        l(
            $(target).css("float")
        )
    })

    $('#button3').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("margin-top", "0px")
        l(
            $(target).css("margin-top")
        )
    })

    $('#button4').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("margin-top", "-111px")
        l(
            $(target).css("margin-top")
        )
    })

    $('#button5').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("margin-top", "50px")
        l(
            $(target).css("margin-top")
        )
    })


})




$(document).ready(function(){
    $('#control_width').on("click", function(){
        var target = $('#target_switch').val()
        $(target).css("width", $('#control_width').val() + "%")
    })
})
