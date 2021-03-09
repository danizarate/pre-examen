class ServicioDatos {
  apiUrlUser;
  apiUrlCursos;
  apiUrlDesarrolloWeb;
  apiUrlCss;
  apiUrlJs;
  constructor() {
    this.apiUrlUser = "https://rest-courses-api.herokuapp.com/api/v1/users/me";
    this.apiUrlCursos = "https://rest-courses-api.herokuapp.com/api/v1/courses";
    this.apiUrlDesarrolloWeb =
      "https://rest-courses-api.herokuapp.com/api/v1/courses/fundamentos-de-desarrollo-web";
    this.apiUrlCss =
      "https://rest-courses-api.herokuapp.com/api/v1/courses/css-avanzado";
    this.apiUrlJs =
      "https://rest-courses-api.herokuapp.com/api/v1/courses/javascript ";
  }
  getAll() {
    return fetch(this.apiUrlUser)
      .then(this.apiUrlCursos)
      .then(this.apiUrlDesarrolloWeb)
      .then(this.apiUrlCss)
      .then(this.apiUrlJs);
  }
  /* getForUid(uid){
        let url = this.apiUrlAves + "/" + uid;
        return fetch(url);
    } */
}
export default ServicioDatos;
