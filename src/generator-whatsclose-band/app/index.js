var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    this.argument('bandName', { type: String, required: true });
    this.bandName = this._.humanize(this.bandName);
  },

  asking_website: function () {
    var done = this.async();

    var prompts = [{
      type    : 'input',
      name    : 'website',
      message : 'Band WebSite'
    },{
      type    : 'input',
      name    : 'tourUrl',
      message : 'Tour URL'
    }];

    this.prompt(prompts, function (props) {
      this.website = props.website;
      this.tourUrl = props.tourUrl;
      this.styles = [];
      this.inputDateFormat = 'yyyy-MM-dd';

      done();
    }.bind(this));
  },

  scaffoldFolders: function(){
    this.mkdir("app");
  },

  render: function(){
 
    var context = {
      tourUrl: this.tourUrl,
      bandName: this.bandName,
      website: this.website,
      styles: this.styles,
      inputDateFormat: this.inputDateFormat
    };
    
    this.template("_band.js", "app/band.js", context);
  }
});
