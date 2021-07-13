export class Cat {
    /**
     * @param {String} name 
     * @param {String} type 
     * @param {Number} height 
     * @param {Number} weight 
     */

    constructor(type, name, height, weight) {
        this.name = name;
        this.type = type;
        this.height = height;
        this.weight = weight;
    }
    sound() {
        console.log("Cat makes meow")
    }
}