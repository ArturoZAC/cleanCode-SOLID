(() => {

  type Gender = 'M' | 'F';

  interface PersonProperties {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {

    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({birthdate, gender, name}: PersonProperties){
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }

  }

  interface UserProperties {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {

    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({
      birthdate,
      email,
      gender,
      name,
      role,
    }: UserProperties ){
      super({ birthdate, gender, name});
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }

  }

  interface UserSettingsProperties {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {

    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate
    }: UserSettingsProperties) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'arturoyz2105@gmail.com',
    role: 'Admin',
    name: 'Arturo',
    gender: 'M',
    birthdate: new Date('2004-05-21')
  });

  console.log({ userSettings });

})();