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
    email: string;
    role: string;
  }

  class User {

    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({
      email,
      role,
    }: UserProperties ){
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }

  }

  interface SettingsProperties {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {

    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProperties) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name, gender, birthdate,
      email, role,
      lastOpenFolder, workingDirectory
    }: UserSettingsProperties) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
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