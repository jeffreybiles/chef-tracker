import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model.chef').save();
      this.transitionToRoute('chefs.chef', this.get('model.chef.id'));
    },
    selectRestaurant(selection, component){
      let chef = this.get('model.chef');
      chef.set('restaurant', selection).save().then(()=>{
        selection.save()
      });
    }
  }
});
