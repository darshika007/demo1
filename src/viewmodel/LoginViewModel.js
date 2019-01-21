import LoginModel from '../model/LoginModel';
class LoginViewModel{

  constructor(uname,pass){
      this.data = {
          uname : uname,
          pass : pass
      }
      this.login = new LoginModel(this.data);
  }
  login(){
      if(this.login.isValidLogin()){
        return "Success";
      }
      else{
        return "Failed";
      }
  }
}
export default LoginViewModel;
