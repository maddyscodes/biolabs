define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates'
  ],
  function(jQuery, _, Backbone, templates) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        events: {
            'click .backtostate': 'onBackClick'
        },
        className: 'iapp-panel upcoming',
        template: templates['labView.html'],
        render: function() {
            console.log(this.model.toJSON());
            
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        onBackClick: function() {
            Backbone.trigger('app:goBack');
        }
    });


});
