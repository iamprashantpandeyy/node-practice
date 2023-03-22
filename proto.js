const obj={
    myFunc(){
        console.log(`Hi, I am function called by ${this.name}`);
    }
}
class Helper{
    constructor(name){
        this.name=name;
    }

}
Object.assign(Helper.prototype,obj);//1
Helper.prototype.myHelperFunc=obj.myFunc;//2
console.log(new Helper("Prashant").myHelperFunc());
// console.log(new Helper("Prashant").myFunc());