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

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>", 
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

