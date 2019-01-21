import LoginViewModel from '../../viewmodel/RegistrationViewModel.js'
export default {
  name: 'Registration',
  data(){
    return{
      uname : '',
      email : '',
      mob : '',
      pass : '',
      cpass : ''
    }
  },
  methods:{
    register:function(){
      var VM = new RegistrationViewModel(this.uname, this.email, this.mob, this.pass, this.cpass);
      alert(VM.register());
    }
  },
  components: {
  }
}