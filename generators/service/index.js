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

            var s = 'src/app/' + cfg.module.ucfname +  '/services/' + cfg.services[i].name + '.service.ts';
            var path = s.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^[-]/, "").replace("/-", "/");
            this.log('\t' + path  );

            cfg.services[i].author = cfg.author;
            cfg.services[i].copyright = cfg.copyright;

            this.fs.copyTpl(
                this.templatePath('service.ts'),
                this.destinationPath(path),
                cfg.services[i]
            );

        }
    }

    conflicts() { }

    install() { }

    end() { }

};
