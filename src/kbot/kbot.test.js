const Kbot = require("./kbot");

/*console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");*/

describe("Saludor", () => {
    it("deberia Saludar a Andrés en idioma default", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 9)
        expect(resultado).toEqual("Buenos días Andrés");
      });
    
    it("Saludar a Andrés en espanol por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Buenas tardes Andrés");
      });

    it("Saludar a Ana en español por la mañana", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Ana", 10);
        expect(resultado).toEqual("Buenos días Ana");
    });

    it("Saludar a Carlos en español por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Carlos", 15);
        expect(resultado).toEqual("Buenas tardes Carlos");
    });
    
    it("Saludar a Elena en español por la noche", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Elena", 21);
        expect(resultado).toEqual("Buenas noches Elena");
    });
    
    it("Saludo a Fernando por defecto en español por la mañana", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Fernando", 8);
        expect(resultado).toEqual("Buenos días Fernando");
    });
    
    it("Saludo a Gabriela por defecto en español por la tarde", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Gabriela", 16);
        expect(resultado).toEqual("Buenas tardes Gabriela");
    });
    
    it("Saludo a Héctor por defecto en español por la noche", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Héctor", 23);
        expect(resultado).toEqual("Buenas noches Héctor");
    });
    
    it("Saludar a Isabella en inglés por la mañana", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Isabella", 7);
        expect(resultado).toEqual("Good morning Isabella");
    });
    
    it("Saludar a Joselito en inglés por la tarde", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Joselito", 14);
        expect(resultado).toEqual("Good afternoon Joselito");
    });
    
    it("Saludar a Lily en inglés por la noche", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Lily", 19);
        expect(resultado).toEqual("Good evening Lily");
    });
    
    
  });
  