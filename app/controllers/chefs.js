import Ember from 'ember';

export default Ember.Controller.extend({
  chefsHere: Ember.computed.filterBy('model', 'isHere'),
  actions: {
    saveNewItem(){
      this.store.createRecord('chef', {
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    }
  }
});
