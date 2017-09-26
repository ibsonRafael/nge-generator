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
            var s = 'src/app/' + cfg.module.ucfname +  '/' + cfg.components[i].name + '/' + cfg.components[i].name;
            var path = s.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "").replace("/-", "/");
            this.log('\t' + path  );

            cfg.components[i].author = cfg.author;
            cfg.components[i].copyright = cfg.copyright;

            this.fs.copyTpl(
                this.templatePath('component.ts'),
                this.destinationPath(path + '.component.ts'),
                cfg.components[i]
            );

            this.fs.copyTpl(
                this.templatePath('component.html'),
                this.destinationPath(path + '.component.html'),
                cfg.components[i]
            );

            this.fs.copyTpl(
                this.templatePath('component.css'),
                this.destinationPath(path + '.component.css'),
                cfg.components[i]
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
