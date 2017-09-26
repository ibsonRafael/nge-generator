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
        this.log('Creating ServicesModule...');
        //@TODO

        this.log('Creating Services...');
        var cfg = this.config.getAll();

        var s = 'src/app/' + cfg.module.ucfname +  '/' + cfg.module.name + '-service.module.ts';
        var path = s.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "").split("/-").join("/");
        this.log('\t' + path  );

        this.fs.copyTpl(
            this.templatePath('service.module.ts'),
            this.destinationPath(path),
            cfg
        );

    }

    conflicts() { }

    install() { }

    end() { }

};
