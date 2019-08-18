function loadFunction(e) {
    var body = document.querySelector('body');
    var astro = document.getElementById('lua')
    var btnAman = document.getElementById('aman')
    var btnAnoi = document.getElementById('anoi')
    var nuvemEsquerda =  document.getElementById('nuvem-esquerda')
    var nuvemDireita =  document.getElementById('nuvem-direita')
    var estrelas =  document.getElementById('estrelas') 
    var css = { 
        fill: '#fbd42e',
        cx: '115',
        cy: '-10',
        r: '200',  
    }


    btnAman.addEventListener('click', function (e) { 
        nuvemEsquerda.style.transform  =  "translate(120px, 25px)"; 
        nuvemDireita.style.transform  =  "translate(1200px, 95.937px)"; 
        Object.assign(astro.style, css);
        estrelas.style.display = 'none';
        body.classList.remove('noite')
        body.classList.add('dia')
        astro.classList.add('dia')
        astro.classList.remove('noite')
    })
    btnAnoi.addEventListener('click', function (e) { 
        if (astro.attributes.getNamedItem('style')) {  
           nuvemEsquerda.attributes.removeNamedItem('style')
           nuvemDireita.attributes.removeNamedItem('style')
           astro.attributes.removeNamedItem('style')
        } 
        body.classList.remove('dia')
        body.classList.add('noite')
        astro.classList.add('noite')
        astro.classList.remove('dia')
        estrelas.style.display = 'block';
    })
}