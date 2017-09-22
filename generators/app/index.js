var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    super(args, opts);
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  
  initializing() { }
  
  prompting() { }
  
  configuring() { }
  
  default() { }
  
  writing() {
    this.log('method 1 just ran');
    this.fs.copyTpl(
      this.templatePath('interface.ts'),
      this.destinationPath('public/IName.ts'),
      { name: 'Name' }
    );
  }

  conflicts() { }
  
  install() { }
  
  end() { }
  
};
