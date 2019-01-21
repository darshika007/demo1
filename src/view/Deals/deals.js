import DealsViewModel from '../../viewmodel/DealsViewModel'

export default {
    name: 'Deals',
    data(){
        return{

        }
    },

    methods: {
        deals:function(){
            var d = new DealsViewModel();
            alert(d.deals());
        }
    },
    components: {
        
    }
}

// export default {
//     name: 'Deals',
//     data(){
//         newtodoText:'',
//         Deals: [
//         {
//             id: 1,
//             title: 'Abc',

//         },
//         {
//             id: 2,
//             title: 'Cde',

//         },
//         {
//             id: 3,
//             title: 'Fgh',

//         }
//     ],
//     newtodoId: 4
//     },
//     methods: {
//         addNewTodo: function(){
//             this.Deals.push({
//                 id: this.newtodoId++,
//                 title: this.newtodoText
//             })
//             this.newtodoText = ''
//         }
//     }
// })
//     components: {
//         todoItem
//     }
// }