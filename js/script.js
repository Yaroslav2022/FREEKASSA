

var btn = document.getElementById("theme-button1");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "light.css";
    let darkTheme = "dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "light.css";
    let darkTheme = "dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}


function Save(theme)
{
    var Request = new XMLHttpRequest();
    Request.open("GET", "./themes.php?theme=" + theme, true); //У вас путь может отличаться
    Request.send();
}



$(document).ready(function(){
    $('.icon__sommer,.icon__moon').click(function(event){
        $('.icon__sommer').toggleClass('icon__sommer_no-active ');
        $('.icon__moon').toggleClass('moon__active');
        
    });
});





$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger').toggleClass('open-menu');
        $('.content, .footer').toggleClass('lock__block');
        $('.header__burger').toggleClass('burger__active');
        $('.block__menu').toggleClass('active')
        $('.header').toggleClass('active_header');
        $('.icon__sommer').toggleClass('lock__block');
        $('.black, .black2').toggleClass('white');
       
    });
});



$(document).ready(function() {
    $('.block__language').click(function(event) {
       $('.lock').toggleClass('land__active');
       $('.none').toggleClass('land__lock ');
       $('.footer__lock').toggleClass('footer__land__active');
       

    });
});


