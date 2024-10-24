type TMonster = {
    name: string;
    type: string;
    health?: number | 100;
    strength: number;
    speed: number;
};

function createMonster1(user: TMonster): TMonster {
    const meinMonster = {
        name: user.name,
        type: user.type,
        health: user.health,
        strength: user.strength,
        speed: user.speed,
    };
    return meinMonster;
}

const firstMonster = createMonster1({
    name: "Joker",
    type: "poision",
    strength: 50,
    speed: 99,
});

console.log(firstMonster);

type Monster = {
    name: string;
    type: string;
    health: number;
    strength: number;
    speed: number;
};

function createMonster(
    name: string,
    type: string,
    health: number = 100,
    strength: number = 50,
    speed: number = 25
): Monster {
    return {
        name,
        type,
        health,
        strength,
        speed,
    };
}

const Monster_1 = createMonster("Joker", "Human", 80);

console.log(Monster_1);
