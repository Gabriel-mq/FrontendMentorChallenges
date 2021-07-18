const d = document,
    $modal = d.querySelector(".rps__modal-container")

export default function modal(rules,close){
    d.addEventListener("click", e => {
        if(e.target.matches(rules) || e.target.matches(close) || e.target === $modal){
            $modal.classList.toggle("rps__modal-containerTg");
        }
    });
    
    d.addEventListener("keyup", e => {
        if(e.key === "Escape"){
            $modal.classList.toggle("rps__modal-containerTg");
        }
    })
}