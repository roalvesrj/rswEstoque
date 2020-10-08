import Realm from 'realm';
import RepositorySchema from '../schemas/RepositorySchemas';

function getRealm() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}

export default getRealm;
