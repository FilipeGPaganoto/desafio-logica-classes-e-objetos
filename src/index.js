class Heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atack() {
        let atackType;

        switch (this.type) {
            case 'mago':
                atackType = 'magia';
                break;
            case 'guerreiro':
                atackType = 'espada';
                break;
            case 'monge':
                atackType = 'artes marciais';
                break;
            case 'ninja':
                atackType = 'shuriken';
                break;
            default:
                atackType = 'ataque desconhecido';
        }

        console.log(`O ${this.type} atacou usando ${atackType}`);
    }
}

let genericHero = new Heroi('Paganoto', 700, 'mago');

genericHero.atack();