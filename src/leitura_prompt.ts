import PromptSync from "prompt-sync";

const prompt = PromptSync();

const nome: string = prompt("Digite seu nome: ");
const idade: number = Number(prompt("Digite sua idade: "));

console.log(`Ola ${nome}! Voce tem ${idade} anos.`);

