const nome=["Monica","Arthur","Paulo"]
const media=[8      , 9       , 10]
const dado=[nome,media]
function Buscamedia(Nome,dado){
    Lnome = dado.slice(0,0)
    Lmedia = dado.slice(1,1)
    if(Lnome.include(nome)){
       return Lmedia[Lnome.indexOF(nome)]
    }
    return -1
}
