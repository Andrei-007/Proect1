
// КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP! 

// Когда пользователь прокручивает вниз 20 пикселей от верха документа, показываем кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Когда пользователь нажимает кнопку, прокручиваем до верхней части документа
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  КНОПКА UP!  




window.onload = function(){



    var btn = document.getElementById("theme-button");
    var link = document.getElementById("theme-link");
    
    btn.addEventListener("click", function () { ChangeTheme() })
    

    function ChangeTheme()
    {
        let lightTheme = "light.css";
        let darkTheme = "dark.css";
        let proectTheme = "proect.css";

        var currTheme = link.getAttribute("href");
        var theme = "";
    
        if(currTheme == lightTheme)
        {
         currTheme = darkTheme;
         theme = "dark";
        }
        else if (currTheme == darkTheme)
        {    
         currTheme = proectTheme;
         theme = "proect";
        }
        else{
            currTheme = lightTheme;
            theme = "light";
        }
    
        link.setAttribute("href", currTheme);
    
        Save(theme);
    }
    
    }
    
    function Save(theme)
{
    var Request = new XMLHttpRequest();
    Request.open("GET", "./themes.php?theme=" + theme, true); //У вас путь может отличаться
    Request.send();
}