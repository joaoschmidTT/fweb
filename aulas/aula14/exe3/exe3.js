fetch("./exe.json")
.then(response=>response.json())
.then(cursos=>{
    for (const curso in cursos)
    {
        
        let newCursos = document.createElement("p");
        newCursos.innerHTML = cursos[curso];
        document.querySelector('h1').appendChild(newCursos)
        
    }
}
)