const l1 = 5 ;
const l2 = 5 ;
const l3 = 7 ;

if(l1 === l2 & l1 === l3 & l2 === l3){
    console.log("Triâgulo Equilátero");
} else if (l1 === l2 || l1 === l3 || l2 === l3){
    console.log("Triângulo Isóscelo"); 
} else {
    console.log("Triângulo Escaleno")
}
