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
        this.log('Creating ServicesModule...');
        //@TODO

        this.log('Creating Services...');
        var cfg = this.config.getAll();

        var path = 'src/app/' + cfg.module.ucfname.toLowerCase() +  '/' + cfg.module.name.toLowerCase() + '.module.ts';
        this.log('\t' + path  );

        this.fs.copyTpl(
            this.templatePath('feature.module.ts'),
            this.destinationPath(path),
            cfg
        );

    }

    conflicts() { }

    install() { }

    end() { }

};
