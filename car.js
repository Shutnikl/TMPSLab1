// Single Responsibility Principle - fiecare clasă are o singură responsabilitate
class Car {
    constructor(make, model, year, engine) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.engine = engine;
    }
  
    getDescription() {
      return `${this.year} ${this.make} ${this.model} with a ${this.engine} engine`;
    }
  }
  
  // Open-Closed Principle - clasele sunt deschise pentru extensie, dar închise pentru modificare
  class ElectricCar extends Car {
    constructor(make, model, year, battery) {
      super(make, model, year, 'electric');
      this.battery = battery;
    }
  
    getDescription() {
      return `${super.getDescription()} and a ${this.battery} kWh battery`;
    }
  }
  
  // Liskov Substitution Principle - subclasele pot fi folosite în locul claselor părinte
  class HybridCar extends Car {
    constructor(make, model, year, engine, battery) {
      super(make, model, year, engine);
      this.battery = battery;
    }
  
    getDescription() {
      return `${super.getDescription()} and a ${this.battery} kWh battery`;
    }
  }
  
  // Interface Segregation Principle - interfețele sunt specializate pentru fiecare client
  class CarList {
    constructor(cars) {
      this.cars = cars;
    }
  
    getDescriptionList() {
      return this.cars.map(car => car.getDescription());
    }
  }
  
  class ElectricCarList extends CarList {
    getDescriptionList() {
      return this.cars.map(car => {
        if (car instanceof ElectricCar) {
          return car.getDescription();
        } else {
          return `${car.getDescription()} (not electric)`;
        }
      });
    }
  }
  
  class HybridCarList extends CarList {
    getDescriptionList() {
      return this.cars.map(car => {
        if (car instanceof HybridCar) {
          return car.getDescription();
        } else {
          return `${car.getDescription()} (not hybrid)`;
        }
      });
    }
  }
  
  // Dependency Inversion Principle - interfețele sunt folosite pentru a decupla clasele
  class CarService {
    constructor(carList) {
      this.carList = carList;
    }
  
    getCarDescriptions() {
      return this.carList.getDescriptionList();
    }
  }
  
  const cars = [
    new Car('Ford', 'Mustang', 2022, 'V8'),
    new ElectricCar('Tesla', 'Model S', 2021, 100),
    new HybridCar('Toyota', 'Prius', 2020, 'gasoline', 2.4),
    new Car('Chevrolet', 'Corvette', 2023, 'V8'),
    new ElectricCar('Ford', 'Mustang Mach-E', 2021, 75),
    new HybridCar('Honda', 'Accord', 2019, 'gasoline', 1.5)
  ];
  
  const carService = new CarService(new CarList(cars));
  console.log(carService.getCarDescriptions());
  
  const electricCarService = new CarService(new ElectricCarList(cars));
  console.log(electricCarService.getCarDescriptions());
  
  const hybridCarService = new CarService(new HybridCarList(cars));
  console.log(hybridCarService.getCarDescriptions());
  