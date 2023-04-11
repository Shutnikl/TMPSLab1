        Single Responsibility Principle (SRP) - fiecare clasă are o singură
        responsabilitate: Clasele Car, ElectricCar și HybridCar au responsabilitatea
        de a crea obiecte de tip mașină cu anumite caracteristici și de a returna 
        descrierea lor. Clasele CarList, ElectricCarList și HybridCarList au 
        responsabilitatea de a gestiona o listă de mașini și de a returna descrieri
        specifice tipului de mașină. Clasa CarService are responsabilitatea de a 
        prelua o listă de mașini și de a returna descrierile lor.

        Open-Closed Principle (OCP) - clasele sunt deschise pentru extensie,
        dar închise pentru modificare: Clasele ElectricCar și HybridCar extind 
        clasa de bază Car, adăugând noi comportamente fără a modifica clasa de bază.

        Liskov Substitution Principle (LSP) - subclasele pot fi folosite în locul 
        claselor părinte: Obiectele de tip ElectricCar și HybridCar pot fi utilizate 
        în locul obiectelor de tip Car fără a afecta funcționalitatea codului.

        Interface Segregation Principle (ISP) - interfețele sunt specializate pentru
        fiecare client: Clasele CarList, ElectricCarList și HybridCarList folosesc
        metode specifice tipului de mașină pentru a returna descrierile, iar clasa 
        CarService utilizează aceste metode specializate în funcție de tipul de obiect
        pe care îl primește.

        Dependency Inversion Principle (DIP) - interfețele sunt folosite pentru a 
        decupla clasele: Clasa CarService primește o interfață de tip CarList în loc 
        de o clasă concretă, ceea ce permite schimbarea tipului de listă de mașini fără 
        a afecta funcționalitatea codului. De asemenea, interfețele utilizate în clasele
        CarList, ElectricCarList și HybridCarList permit decuplarea acestora de clasele 
        ConcreteCarList, ConcreteElectricCarList și ConcreteHybridCarList.
