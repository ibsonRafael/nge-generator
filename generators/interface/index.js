var Generator = require('yeoman-generator');

module.exports = class extends Generator {

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
        for (var i=0; i < cfg.interfaces.length; i++){
            this.log('\t' + 'src/app/interfaces/' + cfg.interfaces[i].name + '.ts' );
            cfg.interfaces[i].author = cfg.author;
            cfg.services[i].copyright = cfg.copyright;

            this.fs.copyTpl(
                this.templatePath('interface.ts'),
                this.destinationPath('src/app/interfaces/' + cfg.interfaces[i].name + '.ts'),
                cfg.interfaces[i]
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
