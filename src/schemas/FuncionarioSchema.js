const Realm = require('realm');

class FuncionarioSchema {
  static schema = {
    name: 'Funcionário',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      nome: 'string',
      cpf: 'string',
      senha: 0,
    },
  };
}

export default FuncionarioSchema;
