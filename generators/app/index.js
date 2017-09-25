var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  // The name `constructor` is important here
  constructor(args, opts) {
    super(args, opts);
    // this.option('babel'); // This method adds support for a `--babel` flag
  }
  
  initializing() {
    // this.cfg = this.config.getAll();
  }
  
  prompting() { }
  
  configuring() { }
  
  default() { }
  
  writing() {
      this.composeWith('nge:interface');
      this.composeWith('nge:classe');
      this.composeWith('nge:service');
  }

  conflicts() { }
  
  install() { }
  
  end() { }
  
};
