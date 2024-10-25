enum Gender {
    Man = "Man",
    Woman = "Woman",
    Diverse = "Diverse",
}

class Person {
    private _firstName: string;
    private _birthday: Date;
    private _gender: Gender;

    get name() {
        return this._firstName;
    }

    set name(value: string) {
        this._firstName = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get birthday() {
        return this._birthday;
    }

    constructor(birthday: Date) {
        this._birthday = birthday;
    }
}
