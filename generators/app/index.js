var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    super(args, opts);
    this.option('babel'); // This method adds support for a `--babel` flag
}};
