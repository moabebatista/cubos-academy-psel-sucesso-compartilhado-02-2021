function solucao(cor1, cor2) {
    //seu codigo aqui
    let corPrimaria1 = "azul";
    let corPrimaria2 = "amarelo";
    let corPrimaria3 = "vermelho";
    
    if((cor1 === corPrimaria1 && cor2 === corPrimaria2) || (cor2 === corPrimaria1 && cor1 === corPrimaria2)) {
        console.log("verde")
    }else if((cor1 === corPrimaria1 && cor2 === corPrimaria3) || (cor2 === corPrimaria1 && cor1 === corPrimaria3)) {
        console.log("roxo")
    }else if((cor1 === corPrimaria2 && cor2 === corPrimaria3) || (cor2 === corPrimaria2 && cor1 === corPrimaria3)) {
        console.log("laranja")
    }else if(cor1 === corPrimaria1 && cor2 === corPrimaria1) {
        console.log("azul")
    }else if(cor1 === corPrimaria2 && cor2 === corPrimaria2) {
        console.log("amarelo")
    }else if(cor1 === corPrimaria3 && cor2 === corPrimaria3) {
        console.log("vermelho")
    }
    
}
