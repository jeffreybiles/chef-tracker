import Ember from 'ember';

export default Ember.Controller.extend({
  otherChefs: Ember.computed.setDiff('model.chefs', 'model.restaurant.chefs'),
  actions: {
    addChef(chef){
      let restaurant = this.get('model.restaurant');
      restaurant.get('chefs').addObject(chef);
      chef.save().then(()=>{
        restaurant.save();
      });
    },
    removeChef(chef){
      let restaurant = this.get('model.restaurant');
      restaurant.get('chefs').removeObject(chef);
      chef.save().then(()=>{
        restaurant.save();
      })
    },
    save(){
      this.get('model.restaurant').save().then(()=>{
        this.transitionToRoute('restaurants.restaurant', this.get('model.restaurant'))
      });
    }
  }
});
