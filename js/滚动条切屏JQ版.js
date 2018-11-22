$(function(){
    // 监测滚动条滚动距离事件
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $(".mainNav").css({"position":"fixed","margin-top":"0","top":"0px","left":"0px","right":"0px","margin":"auto"});
        }else{
            $(".mainNav").css({"position":"static","margin":"18px auto"});
        }
    })

    // 窗口固定导航栏圆的点击事件
    $(".UL_fixed").children().each(function(index,ele){
        console.log(index,ele);
        $(ele).click(function(){
            
            $(".UL_fixed").children().each(function(){
                $(this).removeClass("active");
            })
            $(this).addClass("active");
            if(index == 0){
                console.log("!");
                $(window).scrollTop(0);
            }
            if(index == 1){
                $(window).scrollTop(680);
            }
            if(index == 2){
                $(window).scrollTop(1450);
            }
            
        });

        function add(){
            $(".UL_fixed").children().each(function(){
                $(this).removeClass("active");
            })
        }

        $(window).scroll(function(){
            
            if($(window).scrollTop() <= 300){
                if(index == 0){
                    add();
                    $(ele).addClass("active");
                }
            }
            else if($(window).scrollTop() >=300 && $(window).scrollTop() < 950){
                if(index == 1){
                    add();
                    $(ele).addClass("active");
                }
            }
            else if($(window).scrollTop() >= 1100){
                if(index == 2){
                    add();
                    $(ele).addClass("active");
                }
            }
        })
    })

})