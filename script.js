//Desafio 06 lógica

   // Crie um objeto que receba ao menos três propriedades sobre você.
   let sobremim = {
    nome:"joseane",
    idade:31,
    estilomusical:[ "pop", "axé","sertanejo"]
}
console.log(sobremim)
// Adicione uma nova propriedade sem alterar seu objeto inicial.

sobremim.corDeCabelo = "Preto"
console.log(sobremim)



// Remova uma propriedade desse objeto.
delete sobremim.corDeCabelo
console.log(sobremim)

//Mostre no console todas as propriedades desse objeto.
console.log(sobremim)








// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro =[


    {
       nome:"Maria",
       idade:20,
       telefone:111111,
       Amigos1:"Célia",
       Amigos2:"julia",
       Amigos3:"gil",
       Amigos4:"gal"


       
       
      
    },
    {   nome:"José",
        idade:21,
        telefone:111111,
       Amigos5:"Rosa",
       Amigos6:"Ruth",
       Amigos7:"Cida",
       Amigos8:"Silvia"
   },
   {
        nome:"João",
        idade:22,
        telefone:111111,
       Amigos9:"Amora",
       Amigos10:"Ana",
       Amigos11:"Bela",
       Amigos12:"Bia"
    },

    {
        nome:"Rosa",
        idade:23,
        telefone:111111,
       Amigos13:"Juliana",
       Amigos14:"Juju",
       Amigos15:"Gigi",
       Amigos16:"Gabi"
     },


   {   nome:"Marcos",
        idade:24,
        telefone:111111,
       Amigos17:"Lulu",
       Amigos18:"Lua",
       Amigos19:"Lele",
       Amigos20:"lili"
       

   }




   ]
   console.log(cadastro)
  





// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].Amigos1);
console.log(cadastro[1].Amigos8);
console.log(cadastro[2].Amigos12);
console.log(cadastro[3].Amigos16);
console.log(cadastro[4].Amigos20);

