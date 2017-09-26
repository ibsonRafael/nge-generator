var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }
  
  initializing() { }
  
  prompting() { }
  
  configuring() { }
  
  default() { }
  
  writing() {
      this.composeWith('nge:interface');
      this.composeWith('nge:classe');
      this.composeWith('nge:service');
      this.composeWith('nge:component');

      this.composeWith('nge:feature-module');
      this.composeWith('nge:service-module');
      this.composeWith('nge:routing-module');
  }

  conflicts() { }
  
  install() { }
  
  end() { }
  
};
