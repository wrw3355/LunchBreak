var App = App || Ember.Application.create();
App.User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  userName: DS.attr('string'),
  avatar: DS.attr('string')
  // role: DS.attr('role') -- TODO
});

App.User.FIXTURES = [{
  id: 0,
  firstName: "William",
  lastName: "Wenzel",
  userName: "wwenzel",
  avatar: ""
}];