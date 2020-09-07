
$(document).ready(function(){

    var buttons_dimension = $('.dimensions').children().clone()

    // $('.dimensions').append(buttons_dimension)


    $('#button_shadow_off').on("click", function(){
        $('#myChart').css("box-shadow", "none")
        $('form.form_of_questions_and_statements').css("box-shadow", "none")

    })


    $('#button1').on("click", function(){

        //alert($(this).prev().val())

        $('form.form_of_questions_and_statements').css("margin", "0px 0px 0px 0px;")
        $('form.form_of_questions_and_statements').css("float", "left")

        l(
            $('form.form_of_questions_and_statements').css("float")
        )
    })

    $('#button2').on("click", function(){

        $('form.form_of_questions_and_statements').css("float", "right")

        l(
            $('form.form_of_questions_and_statements').css("float")
        )
    })

    $('#button2_A').on("click", function(){

        $('form.form_of_questions_and_statements').css("float", "none")

        l(
            $('form.form_of_questions_and_statements').css("float")
        )
    })

    $('#button3').on("click", function(){

        //alert($(this).prev().val())

        $('form.form_of_questions_and_statements').css("margin-top", "0px")

        l(
            $('form.form_of_questions_and_statements').css("margin-top")

        )
    })

    $('#button4').on("click", function(){

        //alert($(this).prev().val())

        $('form.form_of_questions_and_statements').css("margin-top", "-111px")

        l(
            $('form.form_of_questions_and_statements').css("margin-top")

        )

    })

    $('#button5').on("click", function(){

        //alert($(this).prev().val())

        $('form.form_of_questions_and_statements').css("margin-top", "50px")

        l(
            $('form.form_of_questions_and_statements').css("margin-top")

        )

    })


})




$(document).ready(function(){

    $('#control_width').on("click", function(){
        $('form.form_of_questions_and_statements').css("width", $('#control_width').val() + "%")
    })
})
