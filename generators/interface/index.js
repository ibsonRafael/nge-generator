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
        this.log('Creating interfaces...');
        for (var i=0; i<this.cfg.interfaces.length; i++){
            this.fs.copyTpl(
                this.templatePath('interface.ts'),
                this.destinationPath(
                    'src/app/interfaces/I' + this.cfg.interfaces[i].name + '.ts',
                    { cfg: this.cfg.interfaces[i] }
                )
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
