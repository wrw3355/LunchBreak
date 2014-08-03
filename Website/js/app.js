var App = App || Ember.Application.create();

App.Router.map(function() {
    this.resource("index", { path: "/" });
    this.resource("locations", function() {
        this.route("new");
    });
    this.resource("location", { "path": "/location/:location_id" });

    this.resource("restaurants", function() {
        this.route("new");
    });
    this.resource("restaurant", { "path": "/restaurant/:restaurant_id" });

    this.resource("events", function() {
      this.route("new");
    });
    this.resource("event", { "path": "/event/:event_id" });

    this.resource("users", function() {
      this.route("new");
    });
    this.resource("user", { "path": "/user/:user_id" });

    this.route("fourOhFour", { "path": "*path" });
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Event routes
App.EventsRoute = Ember.Route.extend({
  actions: {
    transitionToRecord: function(type, record) {
      this.transitionTo(type, record);
    },
    createRecord: function() {
      this.transitionTo("events.new");
    }
  },
  model: function() {
      return this.store.find('event');
  }
});

App.EventRoute = Ember.Route.extend({
  actions: {
  },
  model: function(params) {
      return this.store.find('event', params.event_id);
  }
});


// Restaurant routes
App.RestaurantsRoute = Ember.Route.extend({
  actions: {
    transitionToRecord: function(type, record) {
      this.transitionTo(type, record);
    },
    createRecord: function(type) {
      this.transitionTo("restaurants.new");
    }
  },
  model: function() {
      return this.store.find('restaurant');
  }
});

App.RestaurantRoute = Ember.Route.extend({
  actions: {
  },
  model: function(params) {
      return this.store.find('restaurant', params.restaurant_id);
  }
});

// Location routes
App.LocationsRoute = Ember.Route.extend({
  actions: {
    transitionToRecord: function(type, record) {
      this.transitionTo(type, record);
    },
    createRecord: function() {
      this.transitionTo("locations.new");
    }
  },
  model: function() {
      return this.store.find('location');
  }
});

App.LocationRoute = Ember.Route.extend({
  actions: {
  },
  model: function(params) {
      return this.store.find('location', params.location_id);
  }
});

// Components
App.RecordTableComponent = Ember.Component.extend({
  actions: {
    select: function(record) {
      this.sendAction("transitionToRecord", record.get("constructor.typeKey"), record);
    },
    createRecord: function() {
      this.sendAction("createRecord");
    }
  }
});

App.LocationBlockComponent = Ember.Component.extend({
  actions: {
    showMenu: function(menuUrl) {
        window.open(menuUrl, "_blank");
    }
  }
});

App.GoogleMapComponent = Ember.Component.extend({
  href: function() {
    return "https://www.google.com/maps/embed/v1/place?key=AIzaSyB17-nqo0YY71URBunoRlndEV5VkcfG1Js&q=" + this.place.get("address");
  }.property("place")
});