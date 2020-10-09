const Realm = require('realm');

class ProdutoSchema {
  static schema = {
    name: 'Produto',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      idcategoria: 0,
      nome: 'string',
      idfuncionario: 0,
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

export default ProdutoSchema;
