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
  }

  conflicts() { }
  
  install() { }
  
  end() { }
  
};
