
/*
 * Js Masonry
 * javascript library create gallery with main image
 * https://ujw0l.github.io/
 * MIT license
 *  
 */


class ctclImgGal{


    constructor(elems,opt){

        Array.from(document.querySelectorAll(elems)).map(x=>this.createGal(x, opt));

    }


    createGal(el,opt){

        el.classList.add('ctclig-image-list');

      
        let mainImgDiv =  document.createElement('div');
        mainImgDiv.classList.add('ctclig-main-image');
        mainImgDiv.style.height = `${opt.mainImgHt}px`;
        mainImgDiv.style.width =`${opt.mainImgWd}px`;
        mainImgDiv.style.backgroundImage = `url("${el.querySelector('img').src}")`;
        el.insertBefore(mainImgDiv,el.querySelector('img'));

      
        let carouselDiv =  document.createElement('div');
        carouselDiv.style.width = `${opt.imgGal.length * 76}px`;
        carouselDiv.style.marginLeft = 'auto';
        carouselDiv.style.marginRight = 'auto';
        carouselDiv.style.display = 'block';
        
        let carouselDivCont = document.createElement('div')
        carouselDivCont.style.width = `${opt.mainImgWd}px`,
        carouselDivCont.style.overflowX = 'scroll';
        carouselDivCont.style.overflowY = "hidden"
        carouselDivCont.style.marginLeft = 'auto';
        carouselDivCont.style.marginRight = 'auto';
        carouselDivCont.style.display = 'block';

        carouselDivCont.appendChild(carouselDiv);

        el.insertBefore(carouselDivCont,el.querySelector('img'));

            Array.from(el.querySelectorAll('img')).map(y => {
                let galImg =  document.createElement('img');
                galImg.src =  y.src;
                galImg.style.border =  '1px solid rgba(0,0,0,1)';
                galImg.style.width = '70px';
                galImg.style.height = '70px';
                galImg.style.margin = '2px';
                
                galImg.addEventListener('mouseover', e => {
                    el.querySelector('.ctclig-main-image').style.backgroundImage = `url("${e.target.src}")`;
                })

                y.style.display = 'none';
                carouselDiv.appendChild(galImg)

            
            });
    }

}
