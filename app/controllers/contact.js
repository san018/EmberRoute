import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['id'],
  id: null,

  filteredContact : computed('id', 'model', function() {
    let id= this.id;
    let contact = this.model;

    if (id) {
      return contact.filterBy('id', id);
    } else {
      return contact;
    }
  })
});
