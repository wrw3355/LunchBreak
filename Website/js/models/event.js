App.Event = DS.Model.extend({
  id: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.belongsTo('location'),
  whenDate: DS.attr('date'),
  recurring: DS.attr('boolean'),
  frequency: DS.attr('string'),
  resturants: DS.hasMany('resturant'),
  public: DS.attr('date'),
  invitees: DS.attr('user')
});

App.Event.FIXTURES = [];