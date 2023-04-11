        Principiul responsabilității unice (Single Responsibility Principle) este respectat în clasa Car,
        care are o singură responsabilitate: de a descrie mașina. Aceasta nu conține logica specifică 
        pentru mașinile electrice sau hibride, care este gestionată de clasele derivate ElectricCar și HybridCar.

        Principiul deschis-închis (Open-Closed Principle) este respectat prin intermediul claselor 
        derivate ElectricCar și HybridCar. Aceste clase sunt deschise pentru extensie prin adăugarea
        de noi funcționalități și închise pentru modificare, deoarece modificările aduse clasei de 
        bază Car nu afectează codul acestor clase derivate.

        Principiul substituției lui Liskov (Liskov Substitution Principle) este respectat în relația
        dintre clasa de bază Car și clasele derivate ElectricCar și HybridCar. Aceste clase derivate 
        pot fi utilizate în locul clasei de bază Car fără a afecta comportamentul programului.

        Principiul segregării interfeței (Interface Segregation Principle) este respectat prin 
        intermediul claselor CarList, ElectricCarList și HybridCarList, care implementează interfețe 
        specializate pentru fiecare tip de mașină. Astfel, fiecare client poate utiliza interfața 
        adecvată pentru tipul de mașină dorit.

        Principiul inversării dependențelor (Dependency Inversion Principle) este respectat prin 
        intermediul clasei CarService, care folosește interfețe pentru a decupla clasele.
        Astfel, CarService depinde de interfața CarList, iar ElectricCarList și HybridCarList 
        implementează această interfață, fără a depinde direct de CarService.
