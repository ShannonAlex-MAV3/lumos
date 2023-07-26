`use strict`;

//wait until all Content has been loaded to execute the logic
window.addEventListener('DOMContentLoaded', function(){

    //inintial tranistion of the sitemap
    mainHeading = document.querySelector('.main-heading');
    blackLayer = document.querySelector('.black-layer');
    sitemapSvgOne = document.querySelector('.sitemap-svg');
    
    mainHeading.classList.add('show');
    blackLayer.classList.add('black-layer-hide');
    setTimeout(() => {
        mainHeading.classList.add('heading-scale-transistion');
    }, 4000)
    sitemapSvgOne.classList.add('show');
    
    //hover effect logic related to sitmap node and arrow head lines
    let sitemapBtns = document.querySelectorAll('g a');
    let sitemapArrowLines = document.querySelectorAll('path');

    sitemapBtns.forEach((btn, index) => {
        btn.addEventListener('mouseover', () => {
            sitemapArrowLines[index].classList.add('highlight');
        });
        btn.addEventListener('mouseout', () => {
            sitemapArrowLines[index].classList.remove('highlight');
        });
    });
    
});