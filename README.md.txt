PPrincipiul SRP (Single Responsibility Principle): Fiecare clasă (Shape, Rectangle, Circle, AreaCalculator) 
are o singură responsabilitate și este responsabilă de a-și îndeplini responsabilitatea respectivă.

Principiul OCP (Open-Closed Principle): Nu modificăm codul existent în timp ce adăugăm noi funcționalități. 
În exemplul de mai sus, am adăugat noi clase (Rectangle și Circle) fără a modifica codul existent în interfața Shape sau în clasa AreaCalculator.

Principiul LSP (Liskov Substitution Principle): Putem folosi obiectele unor clase derivate (Rectangle și Circle) în locul obiectelor interfeței Shape,
iar programul va funcționa corect și fără probleme.

Principiul ISP (Interface Segregation Principle): Interfața Shape este simplă și include doar metoda area(), 
care este relevantă pentru toate formele. Astfel, nu adăugăm metode inutile sau nerelevante în interfața Shape.

Principiul DIP (Dependency Inversion Principle): Clasa AreaCalculator depinde doar de interfața Shape și nu de clasele concrete Rectangle sau Circle. 
Aceasta face ca clasa AreaCalculator să fie mai flexibilă și să poată lucra cu alte clase care implementează interfața Shape fără a fi nevoie să fie schimbat codul din clasa AreaCalculator.
