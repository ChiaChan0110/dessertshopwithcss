function toggleMenu(){
    document.querySelector(".mobile-navbar .menu").classList.toggle("show");
}
function likeSelect(){
    if(this.children[0].classList.contains("fa-regular")){
        this.children[0].classList.remove("fa-regular");
        this.children[0].classList.add("fa-solid");
    }else{
        this.children[0].classList.remove("fa-solid");
        this.children[0].classList.add("fa-regular");
    }
}   
function tabControl(){
    $(".tabs .active").each(function () {
        var tablink = $(this).data("tab");
        $('#' + tablink).show().siblings(".tab-inner").hide();
    });

    $(".tabs a").click(function () {
        $('#' + $(this).data("tab")).show().siblings(".tab-inner").hide();
        $(this).addClass("active").siblings(".active").removeClass("active");
    });
}