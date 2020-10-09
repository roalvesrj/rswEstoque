import Realm from 'realm';
import ProdutoSchema from '../schemas/ProdutoSchema';

function getRealm() {
  return Realm.open({
    schema: [ProdutoSchema],
  });
}

export default getRealm;
