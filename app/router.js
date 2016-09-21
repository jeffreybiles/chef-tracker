import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chefs', function() {
    this.route('chef', {path: ':chef_id'});
    this.route('chef.edit', {path: ':chef_id/edit'});
  });
  this.route('about');
  this.route('training');
  this.route('restaurants', function() {
    this.route('restaurant', {path: ':restaurant_id'});
    this.route('restaurant.edit', {path: ':restaurant_id/edit'});
  });
  this.route('login');
  this.route('register');
  this.route('me', function(){
    this.route('update-password')
    this.route('update-email')
  });
});

export default Router;
