import LoginViewModel from '../../viewmodel/LoginViewModel.js'
export default {
  name: 'Login',
  data(){
    return{
      uname : '',
      pass : ''
    }
  },
  methods:{
    login:function(){
      var VM = new LoginViewModel(this.uname,this.pass);
      alert(VM.login());
    }
  },
  components: {
  }
}