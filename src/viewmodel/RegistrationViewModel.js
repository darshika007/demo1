import RegistrationModel from '../model/RegistrationModel';
class RegistrationViewModel{

  constructor(uname, email, mob, pass){
      this.data = {
          uname : uname,
          email : email,
          mob : mob,
          pass : pass
      }
      this.register = new RegistrationModel(this.data);
  }
  register(){
    //   if(this.register.isValid()){
    //     return "Success";
    //   }
    //   else{
    //     return "Failed";
    //   }
  }
}
export default RegistrationViewModel;