//procurar o botao
document.querySelector("#add-time")

// quando clicar no botao
.addEventListener("click", cloneField)

//executar uma ação
function cloneField(){

// quero que duplique os campos, que campo?    
   const newFieldContainer = document.querySelector(".cronograma-item").cloneNode(true)

// pegar os campos. Que campos?
   const fields = newFieldContainer.querySelectorAll("input")

// para cada campo
   fields.forEach(function(item){
       // pegar o field do momento elimpa ele
       item.value=""

   })

// colocar onde na pagina?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

   
}


  