for(let i = 0; i<5; i++){
    console.log(`interação: ${i}`)
}

let cont = 0;
while(cont < 5){
    console.log("Interação: ", cont);
    cont++;
}

let num: number = 5;

do{
    console.log("Numeros: ", num);
    num++;
}while (num <5);

let numeros: number[] = [10, 20, 30];

for(const num of numeros){
    console.log("Resultado: ", num);
}

/*

const pessoa = {nome: "Alice", idade: 25, cidade: "Boituva"};
for(const chave in pessoa){
    console.log(`${chave}:`, pessoa[chave])
}
*/