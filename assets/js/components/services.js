const Services = Vue.component('services',{
    template: //html
    `
    <div>
        <div class="se grl">
            <div class="services cont">
                <div>
                    <h1 class="txtcenter">{{$t("message.ptit")}}</h1>
                </div>
                <div class="logcards">
                    <div class="box">
                        <div class="imgbx">
                            <img src="/assets/images/dev1.jpg" alt="">
                        </div>
                        <div class="contbx">
                            <h1 class="cardtit">{{$t("message.t1")}}</h1>
                            <p>{{$t("message.p1")}}</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgbx">
                            <img src="/assets/images/dev3.jpg" alt="">
                        </div>
                        <div class="contbx">
                            <h1 class="cardtit">{{$t("message.t2")}}</h1>
                            <p>{{$t("message.p2")}}</p>
                        </div>
                    </div>
                   <div class="box">
                        <div class="imgbx">
                            <img src="/assets/images/dev4.jpg" alt="">
                        </div>
                        <div class="contbx">
                            <h1 class="cardtit">{{$t("message.t3")}}</h1>
                            <p>{{$t("message.p3")}}</p>
                        </div>
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
                ptit:'Services', 
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
                ptit:'Servicios',
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
            currentNumber:0,
            timer:null,
        }
    },
    mounted() {
        
    },
    methods: {
    scroll_left() {
        let content = document.querySelector(".logcards");
        content.scrollLeft -= 280;
      },
      scroll_right() {
        let content = document.querySelector(".logcards");
        content.scrollLeft += 280;
      }
    },
})
