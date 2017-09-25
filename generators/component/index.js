var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {

    }

    prompting() { }

    configuring() { }

    default() { }

    writing() {
        this.log('Creating classes...');
        var cfg = this.config.getAll();
        for (var i=0; i < cfg.components.length; i++){
            this.log('\t' + 'src/app/' + cfg.module.ucfname.toLowerCase() +  '/'  + cfg.components[i].name.toLowerCase() + '/'  + cfg.components[i].name.toLowerCase() + '.component.ts' );
            cfg.components[i].author = cfg.author;
            cfg.components[i].copyright = cfg.copyright;

            this.fs.copyTpl(
                this.templatePath('component.ts'),
                this.destinationPath('src/app/' + cfg.module.ucfname.toLowerCase() +  '/' + cfg.components[i].name.toLowerCase() + '/' + cfg.components[i].name.toLowerCase() + '.component.ts'),
                cfg.components[i]
            );

            this.fs.copyTpl(
                this.templatePath('component.html'),
                this.destinationPath('src/app/' + cfg.module.ucfname.toLowerCase() +  '/' + cfg.components[i].name.toLowerCase() + '/' + cfg.components[i].name.toLowerCase() + '.component.html'),
                cfg.components[i]
            );

            this.fs.copyTpl(
                this.templatePath('component.css'),
                this.destinationPath('src/app/' + cfg.module.ucfname.toLowerCase() +  '/' + cfg.components[i].name.toLowerCase() + '/' + cfg.components[i].name.toLowerCase() + '.component.css'),
                cfg.components[i]
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
