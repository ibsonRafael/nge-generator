var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    private cfg = {};

    // The name `constructor` is important here
    constructor(args, opts) {
        super(args, opts);
        // this.option('babel'); // This method adds support for a `--babel` flag
    }

    initializing() {

    }

    prompting() { }

    configuring() { }

    default() { }

    writing() {
        this.log('Creating interfaces...');
        var cfg = this.config.getAll();
        for (var i=0; i<this.cfg.interfaces.length; i++){
            this.fs.copyTpl(
                this.templatePath('interface.ts'),
                this.destinationPath(
                    'src/app/interfaces/I' + cfg.interfaces[i].name + '.ts',
                    { cfg: cfg.interfaces[i] }
                )
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
