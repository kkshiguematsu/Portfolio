function carregar_Footer(){
    $('footer').load('./footer.html');
}
function carregar_Nav(){
    $('header').load('./header.html');
}

function verifica_Active(){
    var path = './'+location.pathname.split("/")[2]; 
    $(document).ready(function(){
        console.log(path); // Debug
        $('.navbar-nav a').each(function() {
            console.log($(this).attr('href')); // Debug
            if ($(this).attr('href') == path) {
                $(this).addClass('active');
            }
        });
    });

}
