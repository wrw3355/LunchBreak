App.User = DS.Model.extend({
  id: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  userName: DS.attr('string'),
  description: DS.attr('string'),
  avatar: DS.attr('string'),
  // role: DS.attr('role') -- TODO
});

App.User.FIXTURES = [];