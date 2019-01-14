import Route from '@ember/routing/route';

export default Route.extend({
  redirect : function(){
        //App.LOG.warn("No Route for given URL found. Will transition to Contact Route instead.");
        this.transitionTo("contact");
    }
});
