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
        this.log('Creating classes...');
        var cfg = this.config.getAll();
        for (var i=0; i < cfg.classes.length; i++){
            this.log('\t' + 'src/app/' + cfg.module.ucfname +  '/' + cfg.classes[i].name + '.ts' );
            cfg.classes[i].author = cfg.author;

            this.fs.copyTpl(
                this.templatePath('class.ts'),
                this.destinationPath('src/app/' + cfg.module.ucfname +  '/' + cfg.classes[i].name + '.ts'),
                cfg.classes[i]
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
