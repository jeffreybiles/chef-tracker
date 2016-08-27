import Ember from 'ember';

export default Ember.Service.extend({
  cookies: Ember.inject.service(),
  store: Ember.inject.service(),
  firebaseApp: Ember.inject.service(),

  currentUser: null,
  isAuthenticated: Ember.computed.notEmpty('currentUser'),
  login(email, password){
    let auth = this.get('firebaseApp').auth();
    return auth.signInWithEmailAndPassword(email, password).then((firebaseUser)=>{
      return this.get('store').findRecord('user', firebaseUser.uid).then((user)=>{
        this.set('currentUser', user);
        this.get('cookies').write('currentUserId', user.get('id'));
      });
    });
  },
  logout(){
    this.set('currentUser', null);
    this.get('cookies').clear('currentUserId');
  },
  init(){
    this._super(...arguments);
    let currentUserId = this.get('cookies').read('currentUserId');
    if(currentUserId){
      this.get('store').findRecord('user', currentUserId).then((user)=>{
        this.set('currentUser', user)
      })
    }
  },
  register(email, password, displayName){
    let auth = this.get('firebaseApp').auth();

    return this.get('store')
        .createRecord('user',
            {email: email,
             displayName: displayName})
        .validate().then(({model, validations})=>{
          if(validations.get('isValid')){
            return auth.createUserWithEmailAndPassword(email, password).then((userResponse)=>{
              model.set('id', userResponse.uid);
              return model.save();
            })
          } else {
            return Ember.RSVP.reject(validations.get('errors'))
          }
        })
        .then((user)=>{
          return this.login(email, password);
        })
  }
});
