import Ember from 'ember';

export default Ember.Controller.extend({
  chefsHere: Ember.computed.filterBy('model', 'isHere'),
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
    },
    incrementStudents(chef){
      chef.set('numberStudents', chef.get('numberStudents') + 1);
      chef.save();
    },
    decrementStudents(chef){
      // convenience method
      chef.decrementProperty('numberStudents');
      chef.save();
    }
  }
});
