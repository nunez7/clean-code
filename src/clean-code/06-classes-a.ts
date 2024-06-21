

(() => {
    //No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date) { }
    }

    class User extends Person {

        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(email, role, name, gender, birthDate);
        }
    }

    const newPerson = new Person('Felix', 'M', new Date('1993-07-05'));
    console.log({ newPerson });

    const userSettings = new UserSettings(
        '/home',
        '/user/homne',
        'felixjavier0@gmal.com',
        'admin',
        'Felix',
        'M',
        new Date('1993-07-05')
    )
    console.log({ userSettings });

})();