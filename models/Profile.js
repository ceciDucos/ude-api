class Profile {
  static ADMINISTRATOR = "Administrador";
  static MANAGER = "Gestor";
  static BASIC = "Usuario básico";

  constructor(name) {
    this.name = name
  }

  get getProfileName() {
    return profileName;
  }
}

