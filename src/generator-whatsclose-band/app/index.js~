var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    this.argument('bandName', { type: String, required: true });
  },

  prompting: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'website',
      message : 'Band WebSite'
    }, function (answers) {
      this.log(answers.name);
      done();
    }.bind(this));
  }
});
