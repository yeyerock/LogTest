const Services = Vue.component('services',{
    template: //html
    `
    <div>
        <div class="se grl">
            <div class="services cont">
                
                <div class="logcards">
                    <!--<p>{{$t("message.hello")}}</p>-->
                    <div class="box">
                        <div class="imgbx">
                            <img src="/assets/images/dev1.jpg" alt="">
                        </div>
                        <div class="contbx">
                            <h1>{{$t("message.t1")}}</h1>
                            <p>{{$t("message.p1")}}</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgbx">
                            <img src="/assets/images/dev3.jpg" alt="">
                        </div>
                        <div class="contbx">
                            <h1>{{$t("message.t2")}}</h1>
                            <p>{{$t("message.p2")}}</p>
                        </div>
                    </div>
                   <div class="box">
                        <div class="imgbx">
                            <img src="/assets/images/dev4.jpg" alt="">
                        </div>
                        <div class="contbx">
                            <h1>{{$t("message.t3")}}</h1>
                            <p>{{$t("message.p3")}}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="dir">
                        <i class="material-icons-round" @click="scroll_left()">keyboard_arrow_left</i>
                        <i class="material-icons-round" @click="scroll_right()">keyboard_arrow_right</i>
                    </div>
                </div>
            </div>
            <headers></headers>
        </div>
    </div>
    `,

    i18n: { // `i18n` option, setup locale info for component
        messages: {
        en: { 
            message: { 
                t1: 'Software Development',
                t2:'Useful Tech Courses', 
                t3:'Innovation Projects',
                p1:'For Startups and Industry. Single Page Applications, Desktop Apps and PWAs Coming Soon.',
                p2:'¿What are your company tech needs?. We give you custom solutions.',
                p3:'We change the digital perspective of your company with the newest Internet technologies.',
                } 
            },
        es: { 
            message: { 
                t1: 'Desarrollo de Software',
                t2:'Cursos Tech Personalizados', 
                t3:'Proyectos de innovacion',
                p1:'Para Startups y la Industría. Single Page Applications, Desktop Apps y Proximamente PWAs.',
                p2:'¿Cual es tu necesidad tecnológica para tu empresa?. Te brindamos soluciones a la medida.',
                p3:'Cambiamos la perspectiva digital de tu empresa con las nuevas tecnologias de Internet.', 
            }   
        }
        }
    },

    data() {
        return {

            prueba:[{t1:i18n.locale}],

            serves:[{t1:'Desarrollo de Software'},
            {t2:'Cursos Tech Personalizados'},
            {t3:'Proyectos de innovacion'}],

            serven:[{t1:'Software Development'},
            {t2:'Tech Custom Courses'},
            {t3:'Innovation Projects'}],

            stxtes:[{tx1:'Para Startups y la Industría. Single Page Applications, Desktop Apps y Proximamente PWAs.'},
            {tx2:'¿Cual es tu necesidad tecnológica para tu empresa?. Te brindamos soluciones a la medida.'},
            {tx3:'Cambiamos la perspectiva digital de tu empresa con las nuevas tecnologias de Internet.'},],

            currentNumber:0,
            timer:null,            
            
        }
    },
    mounted() {
      
        
    },
    methods: {
    starRotation(){this.timer = setInterval(this.next, 15000);},
    
    next(){this.currentNumber +=1;},
    back(){this.currentNumber +=1;},

    scroll_left() {
        let content = document.querySelector(".logcards");
        content.scrollLeft -= 280;
      },
      scroll_right() {
        let content = document.querySelector(".logcards");
        content.scrollLeft += 280;
      }

    //  idioms(){
    //      if(this.$i18n.locale === 'en'){
    //          this.idiom = true;
    //      }else if(this.$i18n.locale === 'es'){
    //          return this.idiom = false;
    //      }else{

    //      }
    //  }

    },
    computed: {
        currentTites(){
            return this.serves[Math.abs(this.currentNumber) % this.serves.length];
        },
        currentTiten(){
            return this.serven[Math.abs(this.currentNumber) % this.serven.length];
        },
        currentTxes(){
            return this.stxtes[Math.abs(this.currentNumber) % this.stxtes.length];
        },

        p(){
            return this.prueba[Math.abs(this.currentNumber) % this.prueba.length];
        }
        
    },
})
