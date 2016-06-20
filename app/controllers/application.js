import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makePresent(chef){
      Ember.set(chef, 'isHere', true)
      chef.save()
    },
    makeAbsent(chef){
      Ember.set(chef, 'isHere', false)
      chef.save()
    },
    saveNewItem(){
      this.store.createRecord('chef', {
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    },
    fire(chef){
      chef.destroyRecord()
    }
  }
});
