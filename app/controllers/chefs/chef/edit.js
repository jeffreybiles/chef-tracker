import Ember from 'ember';

export default Ember.Controller.extend({
  otherRestaurants: Ember.computed.setDiff('model.restaurants', 'model.chef.restaurants'),
  actions: {
    save(){
      this.get('model.chef').save();
      this.transitionToRoute('chefs.chef', this.get('model.chef.id'));
    },
    joinRestaurant(restaurant){
      let chef = this.get('model.chef');
      chef.get('restaurants').addObject(restaurant);
      chef.save().then(()=>{
        restaurant.save();
      });
    },
    leaveRestaurant(restaurant){
      let chef = this.get('model.chef');
      chef.get('restaurants').removeObject(restaurant);
      chef.save().then(()=>{
        restaurant.save();
      });
    }
  }
});
