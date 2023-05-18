
/*
 * Js Masonry
 * javascript library create gallery with main image
 * https://ujw0l.github.io/
 * MIT license
 *  
 */

class ctclImgGal{


    constructor(elems,opt){

      

        Array.from(document.querySelectorAll(elems)).map(x=>{
            this.createGal(x,opt)});

    }


    createGal(el,opt){

        console.log(el);
        let galWd = undefined != opt && undefined != opt.mainImgWd ? opt.mainImgWd : el.offsetWidth;
        let galHt = undefined != opt && undefined != opt.mainImgHt ? opt.mainImgHt : el.offsetHeight;
        el.classList.add('ctclig-image-list');
        let mainImgDiv =  document.createElement('div');
        mainImgDiv.classList.add('ctclig-main-image');
        mainImgDiv.style = `width:${galWd}px; height :${galHt}px ;background: url("") center center / contain no-repeat rgb(255, 255, 255,0.5); margin-left:auto;margin-right:auto;display: block;`;
       mainImgDiv.innerHTML = `<span style='position:relative; top: ${(galHt/2)-5}px; left: ${(galWd/2)-5}px ;' >Loading</span>`; 
        el.insertBefore(mainImgDiv,el.querySelector('img'));

      

        let carouselDivCont = document.createElement('div')
        carouselDivCont.style.width = `${galWd}px`,
        carouselDivCont.style.overflowX = 'scroll';
        carouselDivCont.style.overflowY = "hidden"
        carouselDivCont.style.marginLeft = 'auto';
        carouselDivCont.style.marginRight = 'auto';
        carouselDivCont.style.display = 'block';

        let carouselDiv =  document.createElement('div');
        carouselDiv.style.width = `0px`;
        carouselDiv.style.marginLeft = 'auto';
        carouselDiv.style.marginRight = 'auto';
        carouselDiv.style.display = 'block';
    
        carouselDivCont.appendChild(carouselDiv);

        el.insertBefore(carouselDivCont,el.querySelector('img'));

            Array.from(el.querySelectorAll('img')).map((y,i) => {


              y.style.display = 'none';
                y.addEventListener('load',e =>{

                   
                    if(i== 1){

                       // mainImgDiv.innerHTML = '';
               
                       // mainImgDiv.style.backgroundImage = `url("${el.querySelector('img').src}")`;
                    }

                  
                    let imgHtWdRatio = e.target.width/e.target.height;
                    let imgResizeWd = imgHtWdRatio * 70;
                   e.target.style.border =  '1px solid rgba(0,0,0,1)';
                   e.target.style.width = `${imgResizeWd}px`;
                   e.target.style.height = '70px';
                   e.target.style.margin = '2px';
                    e.target.style.display = '';
                    e.target.addEventListener('mouseover', e => {
                        mainImgDiv.setAttribute('data-num',i);
                        mainImgDiv.style.backgroundImage = `url("${e.target.src}")`;
                    });

                    carouselDiv.style.width = `${parseFloat(carouselDiv.style.width)+imgResizeWd+7}px` 
                    
                    carouselDiv.appendChild(e.target)
                    
                });
            });
    }

}
