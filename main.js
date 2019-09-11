jQuery(document).ready(function){

    "use strict";
     $('#slider-carousel').carouFredSel({
        responsie:true,
        width: '100%' ,
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                min:1,
                max:1
            } ,
            height:"variable"
        },
        pagination:{
            container:".sliderpage"
            pageAnchorBuilder: false
        }


    });
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>=60){
            $('header')
        }

    }
});