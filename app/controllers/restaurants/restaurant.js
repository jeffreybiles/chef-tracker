import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    buyRestaurant(restaurant){
      this.get('session.currentUser').then((user)=>{
        user.get('restaurants').addObject(restaurant);
        restaurant.save().then(()=>{
          user.save();
        });
      })
    },
    sellRestaurant(restaurant){
      this.get('session.currentUser').then((user)=>{
        user.get('restaurants').removeObject(restaurant);
        restaurant.save().then(()=>{
          user.save();
        });
      })
    }
  }
})
