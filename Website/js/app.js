App = Ember.Application.create();

App.Router.map(function() {
    this.resource("index", { path: "/" });
    this.resource("location", function() {
        this.route("new");
    });
    this.resource("restaurant", function() {
        this.route("new");
    });
    this.resource("events");
    this.resource("event", function() {
        this.route(":event_id");
        this.route("new");
    });
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.IndexRoute = Ember.Route.extend({
  actions: {
  },
  model: function() {
      return this.store.find('resturant');
  }
});

App.Resturant = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  img: DS.attr('string'),
  menu: DS.attr('string')
});

App.Resturant.FIXTURES = [
  {
    id: 0,
    title: 'Chilis',
    description: "Boring",
    img: "data:image/jpeg;base64,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",
    menu: "https://www.chilistogo.com/menu/appetizers.aspx"
  },
  {
    id: 1,
    title: 'Dennys',
    description: "Gross",
    img: "http://mojosavings.com/wp-content/uploads/2010/11/Dennys-logo.png",
    menu: "http://www.dennys.com/#/menu"
  },
  {
    id: 2,
    title: 'Fridays',
    description: "TGIF",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTj1ZQa9parPSiWez2RiaDUUbBI4HnfxyPm2uli_8yslFgYCsA",
    menu: "https://www.tgifridays.com/greatfood"
  }
];


App.LocationBlockComponent = Ember.Component.extend({
  actions: {
    showMenu: function(menuUrl) {
        window.open(menuUrl, "_blank");
    }
  }
});