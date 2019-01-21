const axios = require('axios');
class RegistrationModel{
  constructor(register){
      this.uname = register.uname;
      this.email = register.email;
      this.mob = register.mob;
      this.pass = register.pass;
      this.cpass = register.cpass;
  }


 
}
export default RegistrationModel;
