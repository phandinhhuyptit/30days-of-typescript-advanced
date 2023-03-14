class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }
  class Animal {
      #nickName? : string;
       name: string;
      protected account : string;
      constructor(theName: string,account :string,nickName?: string ) {
        this.name = theName;
        this.#nickName = nickName;
        this.account = account
      }
      move(distanceInMeters: number = 0) { 
        console.log(`${this.name} ${this.account} moved ${distanceInMeters}m.`);
      }
      
    }
     
    class Snake extends Animal {
      constructor(name: string, nickName : string,account: string) {
        super(name,nickName,account);
      }
      move(distanceInMeters = 5) {
        this.account = "1234"
        console.log("Slithering...", this.account);
        super.move(distanceInMeters);
      }
      get firstName() {
        return this.name
      }
      set firstName(name) {
        this.name = name

      }
    }
     
    // class Horse extends Animal {
    //   constructor(name: string) {
    //     super(name);
    //   }
    //   move(distanceInMeters = 45) {
    //     console.log("Galloping...",this.name);
    //     super.move(distanceInMeters);
    //   }
    // }
     
    let sam = new Snake("Sammy the Python","WWE","Messi");
    let animal = new Animal("Hello","sadasd","Fcuk")
    // let tom: Animal = new Horse("Tommy the Palomino");
     
    
    sam.move()