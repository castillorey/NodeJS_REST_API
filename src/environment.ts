enum Environments {
  local = 'local',
  dev = 'dev',
  prod = 'prod',
  qa = 'qa'
}

class Environment {
  private environment: string;

  constructor(environment: string) {
    this.environment = environment;
  }

  getPort(): Number {
    if (this.environment === Environments.prod) {
      return 8081;
    } else if (this.environment === Environments.dev) {
      return 8082;
    } else if (this.environment === Environments.qa) {
      return 8083;
    } else {
      return 3000;
    }
  }

  getDBName(): String {
    if (this.environment === Environments.prod) {
      return 'db_test_project_prod';
    } else if (this.environment === Environments.dev) {
      return 'db_test_project_dev';
    } else if (this.environment === Environments.qa) {
      return 'db_test_project_qa';
    } else {
      return 'db_test_project_local';
    }
  }

}
export default new Environment(Environments.local);