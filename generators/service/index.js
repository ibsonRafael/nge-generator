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
        for (var i=0; i < cfg.services.length; i++){
            this.log('\t' + 'src/app/' + cfg.module.ucfname.toLowerCase() +  '/services/' + cfg.services[i].name.toLowerCase() + '.service.ts' );
            cfg.services[i].author = cfg.author;
            cfg.services[i].copyright = cfg.copyright;

            this.fs.copyTpl(
                this.templatePath('service.ts'),
                this.destinationPath('src/app/' + cfg.module.ucfname.toLowerCase() +  '/services/' + cfg.services[i].name.toLowerCase() + '.service.ts'),
                cfg.services[i]
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
