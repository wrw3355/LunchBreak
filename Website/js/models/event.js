var App = App || Ember.Application.create();
App.Event = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.belongsTo('location', {async: true}),
  whenDate: DS.attr('date'),
  recurring: DS.attr('boolean'),
  frequency: DS.attr('string'),
  restaurants: DS.hasMany('restaurant', {async: true}),
  public: DS.attr('boolean'),
  invitees: DS.hasMany('user', {async: true})
});

App.Event.FIXTURES = [
  {
      id: 0,
      name: "Fancy Friday",
      description: "Lunch at a sit down restaurant.",
      location: 0,
      whenDate: new Date(2014, 5, 11, 11, 45, 0, 0),
      recurring: false,
      frequency: "",
      restaurants: [0, 1, 2],
      public: true,
      invitees: [0]
  },
  {
      id: 1,
      name: "Monday Dinner",
      description: "No, really, who goes out on Mondays?",
      location: 0,
      whenDate: new Date(2014, 5, 11, 11, 45, 0, 0),
      recurring: false,
      frequency: "",
      restaurants: [0, 1, 2],
      public: true,
      invitees: [0]
  }
];