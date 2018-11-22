window.onload = function(){
    var nav = document.getElementsByClassName("mainNav")[0];
    var page1 = document.getElementsByClassName("page1")[0];
    var page2 = document.getElementsByClassName("page2")[0];
    var page3 = document.getElementsByClassName("page3")[0];
    var UL_fixed = document.getElementsByClassName("UL_fixed")[0];
    var UL_li = document.getElementsByTagName("li");
    var oTop = nav.offsetTop+100;
    for(var i = 0;i<UL_li.length;i++){
        UL_li[i].index = i;
        UL_li[i].onclick = function(){
            for(var j = 0;j<UL_li.length;j++){
                UL_li[j].className = "";
            }
            this.className = "active";
            if(this.index == 0){
                window.scrollTo(0,0);
            }else if(this.index == 1){
                window.scrollTo(0,680);
            }else if(this.index == 2){
                window.scrollTo(0,1430);
            }
        }
        var timer = null;
        var sc =window.scrollY;
        window.onscroll = function(){
            if(window.pageYOffset > oTop){
                nav.style.cssText = "position:fixed;top:0;left:0;right:0;margin:auto;";
            }else{
                nav.style.cssText = "position:none;margin:18px auto;";
            }
            for(var j = 0;j<UL_li.length;j++){
                UL_li[j].className = "";
            }
            if(window.scrollY  <= 320){
                UL_li[0].className = "active";
            }
            else if(window.scrollY >= 320&&window.scrollY < 950){
                UL_li[1].className = "active";
            }
            else if(window.scrollY >= 950){
                UL_li[2].className = "active";
            }
        }
    }
}