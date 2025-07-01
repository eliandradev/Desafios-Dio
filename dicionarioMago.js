// TODO: Implemente um dicionário de feitiços pré-definido, simule um JSON:
const dicionarioFeiticos = {
  "Lumus": "Cria uma luz na ponta da varinha",
  "Expelliarmus": "Desarma o oponente, fazendo com que ele solte o que estiver segurando",
  "Expecto Patronum": "Invoca um Patrono, uma manifestacao magica que afasta Dementadores",
  "Wingardium Leviosa": "Faz objetos levitarem",
  "Alohomora": "Destranca portas e objetos trancados"
};

// TODO: Adicione uma função buscarFeitico, para buscar a descrição de um feitiço e retornar caso não seja encontado:
function buscarFeitico(nomeFeitico) {
  if (dicionarioFeiticos.hasOwnProperty(nomeFeitico)) {
    return dicionarioFeiticos[nomeFeitico];
  } else {
    return "Feitico nao encontrado";
  }
}

const feitico = gets().trim(); // Removendo espaços extras

print(buscarFeitico(feitico));