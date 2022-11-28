function carregar_Footer(){
    $('footer').load('./footer.html');
}
function carregar_Nav(){
    $('header').load('./header.html');
}
function carregar_projeto_canvas(){
    $('#spa_projetos_canvas').load('./projeto_canvas.html');
}

function verifica_offcanvas(){
    var atual_width = document.getElementsByTagName('html')[0].offsetWidth;
    const offcanvas = document.querySelectorAll('.offcanvas');
        
    if (atual_width < 750){
        for (const offcanva of offcanvas){
            offcanva.classList.remove('w-50');
            offcanva.classList.add('w-100');
        }
    }else{
        for (const offcanva of offcanvas){
            offcanva.classList.remove('w-100');
            offcanva.classList.add('w-50');
        }
    }
}

function verifica_Scroll(){
    window.addEventListener('scroll', ()=>{
        const sections = document.querySelectorAll('section');
        const nav_a = document.querySelectorAll('.navbar-nav a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if(pageYOffset >= (sectionTop - sectionHeight / 3)){
                current = section.getAttribute('id');
            }
        });
        
        nav_a.forEach(a => {
            a.classList.remove('active');
            if(a.classList.contains(current)){
                a.classList.add('active');
            }
        });
    });

}