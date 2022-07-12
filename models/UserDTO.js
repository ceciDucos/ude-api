class UserDTO {
  idUser;
  password;
  name;
  cellphone;
  slackID;
  telegramID;
  profile;
  typeDocument;
  document;
  active;
  company;
  email;
  createDate;
  expiredPassword;
  passwordDate;
  token;

  constructor() {
    this.typeDocument = DocumentType.CI;
    this.profile = Profile.BASIC;
    this.active = true;
    this.createDate = LocalDate.now();
  }

  get getIdUser() {
    return idUser;
  }

  set setIdUser(id) {
    this.idUser = id;
  }

  get getPassword() {
    return password;
  }

  set setPassword(password) {
    this.password = password;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getTypeDocument() {
    return typeDocument;
  }
  
  set setTypeDocument(typeDocument) {
    this.typeDocument = typeDocument;
  }

  get getDocument() {
    return document;
  }

  set setDocument(document) {
    this.document = document;
  }

  get getCellphone() {
    return cellphone;
  }

  set setCellphone(cellphone) {
    this.cellphone = cellphone;
  }

  isActive() {
    return active;
  }

  set setActive(active) {
    this.active = active;
  }

  get getCreateDate() {
    return createDate;
  }

  set setCreateDate(createDate) {
    this.createDate = createDate;
  }

  get getCompany() {
    return company;
  }

  set setCompany(company) {
    this.company = company;
  }

  get getProfile() {
    return profile;
  }

  set setProfile(profile) {
    this.profile = profile;
  }

  get getEmail() {
    return email;
  }

  set setEmail(email) {
    this.email = email;
  }

  get getToken() {
    return token;
  }

  set setToken(token) {
    this.token = token;
  }

  isExpiredPassword() {
    return expiredPassword;
  }

  set setExpiredPassword(expiredPassword) {
    this.expiredPassword = expiredPassword;
  }

  get getPasswordDate() {
    return passwordDate;
  }

  set setPasswordDate(passwordDate) {
    this.passwordDate = passwordDate;
  }

  isAdministrator() {
    return (profile == Profile.ADMINISTRATOR);
  }

  setAdministrator() {
    this.profile = Profile.ADMINISTRATOR;
  }

  isManager() {
    return (profile == Profile.MANAGER);
  }

  setManager() {
    this.profile = Profile.MANAGER;
  }

  isBasic() {
    return (profile == Profile.BASIC);
  }

  setBasic() {
    this.profile = Profile.BASIC;
  }

  get getSlackID() { 
    return slackID; 
  }

  set setSlackID(slackID) { 
    this.slackID = slackID;
  }

  get getTelegramID() {
    return telegramID;
  }

  set setTelegramID(telegramID) {
    this.telegramID = telegramID;
  }
}