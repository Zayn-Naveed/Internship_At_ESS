
//  *****CLASS & OBJECT*****
class Person {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
  
    introduce() {
      console.log(`Hi! myself ${this.name}. I'm ${this.age} years old and I'm from ${this.city}.`);
    }
  }
  
  const zain = new Person("Zain Naveed", 22, "Lahore");
  zain.introduce();
  

  
  //  ****INHERITANCE*****

  class Employee extends Person {
    constructor(name, age, city, role, company) {
      super(name, age, city); // Parent constructor
      this.role = role;
      this.company = company;
    }
  
    introduce() {
      console.log(`Hi! myself ${this.name} & I'm on ${this.role} role at ${this.company}.`);
    }
  
    work() {
      console.log(`${this.name} here....`);
    }
  }
  
  const emp = new Employee("Zain Naveed", 22, "Lahore", "Frontend Developer", "Expert System Solution");
  emp.introduce();
  emp.work();
  

  
  //  *****ENCAPSULATION*****
  class BankAccount {
    #balance; // Private field
  
    constructor(owner, balance) {
      this.owner = owner;
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`${amount} is deposit. Balance: ${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        console.log("Insufficient balance!");
        return;
      }
      this.#balance -= amount;
      console.log(`${amount} is withdraw. Balance: ${this.#balance}`);
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount("Zain Naveed", 10000);
  account.deposit(5000);
  account.withdraw(3000);
  console.log("Balance:", account.getBalance());
  

  
  //  *****POLYMORPHISM******
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      console.log(`${this.name} awaaz nikaalta hai`);
    }
  }
  
  class Dog extends Animal {
    sound() {
      console.log(`${this.name} kehta hai: Woof!`);
    }
  }
  
  class Cat extends Animal {
    sound() {
      console.log(`${this.name} kehti hai: Meow!`);
    }
  }
  
  class Cow extends Animal {
    sound() {
      console.log(`${this.name} kehti hai: Moo!`);
    }
  }
  
  const animals = [
    new Dog("Tommy"),
    new Cat("Kitty"),
    new Cow("Gaaye")
  ];
  
  animals.forEach(animal => animal.sound());
  
  
  //  ******ABSTRACTION******
  class Vehicle {
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
    }
  
    // Abstract method — child mein implement hoga
    move() {
      throw new Error("move() method implement karo!");
    }
  
    details() {
      console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h`);
    }
  }
  
  class Car extends Vehicle {
    move() {
      console.log(`${this.brand} road pe chal rahi hai!`);
    }
  }
  
  class Boat extends Vehicle {
    move() {
      console.log(`${this.brand} paani mein chal rahi hai!`);
    }
  }
  
  const car = new Car("Honda", 120);
  car.details();
  car.move();
  
  const boat = new Boat("Yamaha", 60);
  boat.details();
  boat.move();
  
  
  //  *****PROTOTYPE*****
  function Student(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  
  Student.prototype.study = function() {
    console.log(`${this.name} is studying. — Grade: ${this.grade}`);
  };
  
  const s1 = new Student("Zain", "A");
  s1.study();

  const s2 = new Student("Talha", "A+");
  s2.study();