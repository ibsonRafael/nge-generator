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
            var s = 'src/app/interfaces/' + cfg.interfaces[i].name + '.ts';
            var path = s.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "").replace("/-", "/");
            this.log('\t' + path  );

            cfg.interfaces[i].author = cfg.author;
            cfg.interfaces[i].copyright = cfg.copyright;

            console.log(cfg.interfaces[i]);

            this.fs.copyTpl(
                this.templatePath('interface.ts'),
                this.destinationPath(path),
                cfg.interfaces[i]
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
