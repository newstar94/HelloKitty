var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
function loadmore(){
    var p=[];
    $.ajax({
        url:"data/recipes.json",
        method: "GET",
        success: function (rs){
            p=rs;
            var covid = $("#covid");
            for (var i=0;i<p.length;i++){
                var ct = "<div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
                    "                        <div class=\"recipes\">\n" +
                    "                            <a href=\""+p[i].link+"\">\n" +
                    "                                <img class=\"cover\" src=\""+p[i].image+"\">\n" +
                    "                                <h3>"+p[i].name+"</h3>\n" +
                    "                                <p>"+p[i].description+"</p>\n" +
                    "                            </a>\n" +
                    "                        </div>";
                covid.append(ct);
            }
        }
    });
};
function showhide1() {
    var x = document.getElementById("sub1");
    var y=document.getElementById("button1");
    if (x.style.display === "none"){
        x.style.display = "block";
        y.innerHTML="–";
    } else {
        x.style.display = "none";
        y.innerHTML="+";
    }
}
function showhide2() {
    var x = document.getElementById("sub2");
    var y=document.getElementById("button2");
    if (x.style.display === "none"){
        x.style.display = "block";
        y.innerHTML="–";
    } else {
        x.style.display = "none";
        y.innerHTML="+";
    }
}
function showhide3() {
    var x = document.getElementById("sub3");
    var y=document.getElementById("button3");
    if (x.style.display === "none"){
        x.style.display = "block";
        y.innerHTML="–";
    } else {
        x.style.display = "none";
        y.innerHTML="+";
    }
}