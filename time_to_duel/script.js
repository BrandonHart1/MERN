class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {  // resilience goes here?
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack( target ) {
        // reduce target resiliance by power
        // instanceof??
        if ( target instanceof Unit) {
            target.resilience -= this.power;
            console.log
            console.log(`${this.name} attacked ${target.name} causing ${this.power} damage`);
        } else {
            throw new Error("Target must be a unit!") 
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        let rzLo = "";
        if (magnitude > 0) {
            rzLo = "Raise"
        }
        else {
            rzLo = "Lower"
        }
        this.text = `$(rzLo} the target's ${this.stat} by ${Math.floor(this.magnitude)})`;
    }
    play(target) {
        if (target instanceof Unit) {
        if (this.stat === "power") {
            target.power += this.magnitude;
            console.log(this.text);
        } else if (this.stat === "resilience") {
            target.resilience += this.magnitude;
            console.log(this.text);
        } else {
            console.log(`Loser`);
        }
        } else {
        throw new Error("Target must be a unit!");
        }
    }
}


// 1	Make an instance of "Red Belt Ninja"
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3);

// 2	Make an instance "Black Belt Ninja"
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

// 2	Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resiliance", -2);

// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const pairProgrammin = new Effect("Pair Programming", 3, "power", 2);


