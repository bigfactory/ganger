
var Ganger = require('../');
var fs = require('fs');
var path = require('path');

describe('ganger', function() {
    it('should run in the right way', function(done) {
        var ganger = new Ganger({
            workerNumber: 2,
            files: [
                path.join(__dirname, './files/a.txt'),
                path.join(__dirname, './files/b.txt')
            ],
            contents: [],
            check: function(){
                var file;
                if(this.files.length){
                    file = this.files.shift();
                    this.work(file);
                }
                else{
                    this.report();
                }
            },
            work: function(file){
                var content = fs.readFileSync(file).toString();
                this.contents.push(content);
                this.check();
            },
            done: function(){
                this.contents.length.should.be.eql(2);
                this.contents[0].should.be.eql('aaa');
                this.contents[1].should.be.eql('bbb');
                done();
            }
        });

        ganger.start();
    });
});