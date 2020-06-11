export const tabs = (container,class_links,class_sections) => {
    if(container && class_links && class_sections){
        let d = document;
        const links = Array.from(d.querySelectorAll(class_links));
        const sections = Array.from(d.querySelectorAll(class_sections));
        document.querySelector(container).addEventListener('click',evt=>{
            evt.preventDefault();
            if(evt.target.classList.contains("tabs__link")){
                clearClass(links,"tabs__link--active");
                evt.target.classList.add("tabs__link--active");
                clearClass(sections,"tabs__section--active");
                d.getElementById(evt.target.hash.replace("#","")).classList.add("tabs__section--active");
            }
        });
    }
};

const clearClass = (array,classremove) => {
    array.forEach(item=>item.classList.remove(classremove));
};