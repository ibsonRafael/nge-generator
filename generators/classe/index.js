var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    private cfg = {};

    // The name `constructor` is important here
    constructor(args, opts) {
        super(args, opts);
        // this.option('babel'); // This method adds support for a `--babel` flag
    }

    initializing() {
        this.cfg = this.config.getAll();
    }

    prompting() { }

    configuring() { }

    default() { }

    writing() {
        this.log('Creating classes...');
        for (var i=0; i<this.cfg.classes.length; i++){
            this.fs.copyTpl(
                this.templatePath('class.ts'),
                this.destinationPath(
                    'src/app/' + this.cfg.module.ucfname +  '/' + this.cfg.classes[i].name + '.ts',
                    { cfg: this.cfg.classes[i] }
                )
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
