

module.exports = Ganger;

function Ganger(properties){
    properties = properties || {};
    
    if(!properties.workerNumber){
        throw new Error('missing workerNumber');
        return;
    }

    this.finishedWorkerNumber = 0;

    for(var p in properties){
        this[p] = properties[p];
    }
}

Ganger.prototype.start = function(){
    for(var i = 0, len = this.workerNumber; i < len; i++){
        this.check();
    }
};

Ganger.prototype.report = function(){
    this.finishedWorkerNumber++;
    if(this.finishedWorkerNumber == this.workerNumber){
        this.done && this.done();
    }
};