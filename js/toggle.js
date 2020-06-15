export const toggleMenu = (itemClick,elementR,classs) => {
    const itemCl = document.querySelectorAll(itemClick);
    const $elementR = document.querySelector(elementR);

    const addAndRemoveClass = () => {
        $elementR.classList.toggle(classs);
        document.body.classList.toggle("no-scroll");
    };

    itemCl[0].addEventListener('click',addAndRemoveClass);
    itemCl[1].addEventListener('click',addAndRemoveClass);
}
