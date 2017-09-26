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

            var s = 'src/app/' + cfg.module.ucfname +  '/' + cfg.classes[i].name + '.ts';
            var path = s.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "").split("/-").join("/");
            this.log('\t' + path  );

            cfg.classes[i].author = cfg.author;
            cfg.classes[i].copyright = cfg.copyright;

            this.fs.copyTpl(
                this.templatePath('class.ts'),
                this.destinationPath(path),
                cfg.classes[i]
            );
        }
    }

    conflicts() { }

    install() { }

    end() { }

};
