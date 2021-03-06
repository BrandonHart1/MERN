class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}`)
        console.log(`Strength: ${this.strength}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Health: ${this.health}`)
        return this;
    }

    drinkSake() {
        this.health += 10
        console.log(`${this.name}`);
        return this;
    }
}