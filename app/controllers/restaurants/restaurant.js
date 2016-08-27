import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    buyRestaurant(restaurant){
      let user = this.get('session.currentUser');
      user.get('restaurants').addObject(restaurant);
      restaurant.save().then(()=>{
        user.save();
      });
    },
    sellRestaurant(restaurant){
      let user = this.get('session.currentUser');
      user.get('restaurants').removeObject(restaurant);
      restaurant.save().then(()=>{
        user.save();
      });
    },
  }
});
