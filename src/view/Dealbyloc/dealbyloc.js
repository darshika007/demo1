import DealbylocViewModel from '../../viewmodel/DealbylocViewModel'

export default {
    name: 'Dealbyloc',
    data(){
        return{

        }
    },

    methods: {
        deals:function(){
            var d = new DealbylocViewModel();
            alert(d.deals());
        }
    },
    components: {
        
    }
}