
function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    let palavrasQueAtendemCriterio = 0;
    
    for(const palavra of palavras) {
        if(primeiraLetra === palavra[0] && segundaLetra === palavra[1]){
            palavrasQueAtendemCriterio = palavra
            console.log(palavrasQueAtendemCriterio)
        }
        
        }
    if(palavrasQueAtendemCriterio < 1) {
          console.log("NENHUMA")
    }
        
}