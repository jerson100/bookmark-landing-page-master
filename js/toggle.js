export const toggleMenu = (itemClick,elementR,classs) => {
    const itemCl = document.querySelectorAll(itemClick);
    const $elementR = document.querySelector(elementR);
    itemCl[0].addEventListener('click',()=>{
        $elementR.classList.toggle(classs);
    });
    itemCl[1].addEventListener('click',()=>{
        $elementR.classList.toggle(classs);
    });
}