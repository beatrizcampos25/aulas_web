let nomes: string[] = ["Ana", "Joao", "Elvis"];
console.log (nomes);

let numeros: number[] = [1, 2, 3 ,4];
console.log ("Numeros pos 01: ", numeros[1]);

console.log (nomes.indexOf("joão"));

nomes.splice(1, 1);
console.log("Depois do splice ", nomes);

let idades:  Array<number> = [20, 30, 40];

let frutas: string[] = ["Banana", "Maçã"];
frutas.push("Pera");
console.log(frutas);

frutas.unshift("Uva");

frutas.pop();

frutas.shift();

console.log(frutas[0]);
console.log(frutas.length);
