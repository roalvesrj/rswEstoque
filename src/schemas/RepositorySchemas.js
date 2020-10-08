const Realm = require('realm');

class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      categoria: 0,
      nome: 'string',
      funcionario: 0,
      nomeCategoria: 'string',
      nomeFuncionario: 'string',
      qtdEstoque: 0,
      valor: 0,
      dataFabricacao: "yyyy-MM-dd'T'HH:mm:ss'Z'",
      descricao: 'string',
      fotoLink: 'string',
    },
  };
}

export default RepositorySchema;
