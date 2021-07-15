const d = document;

export default function accordion(items,arrow){
    d.addEventListener("click", e => {
        if(e.target.matches(arrow)){
            return null;
        }
        if(e.target.matches(items)){
            e.target.classList.toggle("faq__list-itemWg");
            e.target.lastChild.classList.toggle("faq__arrowDg");
            e.target.nextElementSibling.classList.toggle("faq__list-descriptionTg");
        }
        if(e.target.matches(`${items} *`)){
            e.target.parentElement.parentElement.classList.toggle("faq__list-itemWg");
            e.target.parentElement.classList.toggle("faq__arrowDg");
            e.target.parentElement.parentElement.nextElementSibling.classList.toggle("faq__list-descriptionTg");
        }
    })
}