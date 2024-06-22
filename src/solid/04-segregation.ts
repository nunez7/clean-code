
interface Bird {
    eat(): void;
}
interface FlyringBird{
    fly(): number;
}

interface RunningBird{
    run(): void;
}

interface SwimmerBird{
    swim(): void;
}

class Tucan implements Bird, FlyringBird {
    public fly() { return 100;}
    public eat() { }
}

class Humminbird implements Bird, FlyringBird {
    public fly() { return 200;}
    public eat() { }
}

class Ostrich implements Bird, RunningBird {
    public eat(): void {
    }
    public run(): void { }
}

class Penguin implements Bird, SwimmerBird {
    public eat(): void {}
    public run(): void {}
    public swim() { }

}