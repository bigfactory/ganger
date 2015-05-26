
### Usage

```
var Ganger = require('../');
var fs = require('fs');


var ganger = new Ganger({
    workerNumber: 2,
    files: [
        'file1',
        'file2'
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
        console.log(this.contents);
    }
});
```