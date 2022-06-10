
class ArrayList {
    constructor() {
      this.array = [];
    }
    length(){
        return this.array.length;
    }
    count(value){
        var temp = 0;
        for(var i = 0; i < this.array.length; i++){
            if(this.array[i] == value){
                temp++;
            }
        }
        return temp;
    }
    print(){
        for(var i = 0; i < this.array.length; i++){
            console.log(this.array[i])
        }
    }
    every(boolCallback){
        for(var i = 0; i < this.array.length; i++){
            if(boolCallback(this.array[i]) != true){
                return false
            }
        }
        return true
    }
    add(value){
        this.array.push(value);
    }
    remove(value){
        this.array.pop(value);
    }
    removeIndex(index){
        this.array.splice(index, 1);
    }
    addFront(value){
        this.array.unshift(value);
    }
    getArray(){
        return this.array;
    }
}

module.exports = ArrayList;
