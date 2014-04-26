App.Location = DS.Model.extend({
  id: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string')
});

App.Location.FIXTURES = [];