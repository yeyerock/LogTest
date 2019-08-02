const messages = {
    name:'home',
    template:'#hometemplate',

    template: //html
    `
    <div id="hometemplate">
      <div class="ban grl">
      
        <div class="banner cont">
          <div class="bb">
            <!-- <img src="/assets/images/logo.svg" alt=""> -->
          </div>
          <div class="bb2">
            <div>
              <h1 v-for="tit in [currentNumber]" :key="tit" v-if="esidiom">{{currentTites.t1}} {{currentTites.t2}} {{currentTites.t3}}</h1>
              <h1 v-for="tit in [currentNumber]" :key="tit" v-if="enidiom">{{currentTiten.t1}} {{currentTiten.t2}} {{currentTiten.t3}}</h1>
            </div>
            <div>
              <p v-for="txt in [currentNumber]" :key="txt" v-if="esidiom">
              {{currentTx.t1}} {{currentTx.t2}} {{currentTx.t3}}</p>

              <p v-for="txt in [currentNumber]" :key="txt" v-if="enidiom">
              {{currentTxen.t1}} {{currentTxen.t2}} {{currentTxen.t3}}</p>
              <div>
                <button v-on:click="toen()" v-if="esidiom">En</button>
              </div>
              <button v-on:click="toes()" v-if="enidiom">Es</button>
            </div>
          </div>
        </div>
        <headers></headers>
      </div>
    </div>
    `,
    en:{
      banner:{
        title:'Welcome!',
      },
      weare:{
        title:'We Are',
      },
      services:{
        title:'Services',
      }
    },
    es:{
      banner:{
        title:'Bienvenido!',
      },
      weare:{
        title:'Nosotros',
        gonzalo: 'Gonzalo | Developer',
        jose: 'José | Developer',
        erik: 'Erik | Project Lead'
      },
      services:{
        title:'Servicios',
      }
    },
    data() {
      return {
        bantites:[{t1:'Creamos'},{t2:'Hacemos'},{t3:'Integramos'}],

        bantiten:[{t1:'We Create'},{t2:'We Make'},{t3:'We Integrate'}],

        bantxtes:[{t1:'Un cambio de perspectiva digital para tu negocio en Internet.'},
        {t2:'Software, Cursos y Asesoría Tech para Startups y la Industria.'},
        {t3:'Lo más nuevo en Tech con una aplicación custom a tus necesidades.'}],

        bantxten:[{t1:'High impact experiences for your internet business.'},
        {t2:'Software, Courses and Tech Consulting for Startups and Industry.'},
        {t3:'The newest in Tech with a custom application to your needs.'}],

        currentNumber:0,
        timer:null,
        esidiom:true,
        enidiom:false,
      }
    },
    mounted() {
      this.starRotation();
    },
    methods: {
      starRotation(){this.timer = setInterval(this.next, 10000);},
      next(){this.currentNumber +=1;},

      toen(){
        this.esidiom = false; this.enidiom = true;
         if(this.$i18n.locale === 'es'){
           return this.$i18n.locale = 'en';
         }
      },
      toes(){
        this.enidiom = false; this.esidiom= true;
        if(this.$i18n.locale === 'en'){
          return this.$i18n.locale = 'es';
        }
      },
    },
    computed: {
      currentTites(){
        return this.bantites[Math.abs(this.currentNumber) % this.bantites.length];
      },
      currentTiten(){
        return this.bantiten[Math.abs(this.currentNumber) % this.bantiten.length];
      },

      currentTx(){
        return this.bantxtes[Math.abs(this.currentNumber) % this.bantxtes.length];
      },

      currentTxen(){
        return this.bantxten[Math.abs(this.currentNumber) % this.bantxten.length];
      },

     

    },
}



//VueI18n
const i18n = new VueI18n({
    locale: 'es', // set locale
    messages,
    
  })

  var router = new VueRouter({
    //mode:'history',
    routes:[
      {path:'/', name:'home', component:messages},
      {path:'/weare', name:'weare', component:Weare},
      {path:'/services', name:'services', component:Services},
      {path:'/projects', name:'projects', component:Projects},
      {path: '*', component: Notfound },
    ]
  });

  const routes = new VueRouter({
    linkExactActiveClass: "active"
  })

  var vm = new Vue({
    element:'#app',
    i18n,
    components:{
    Services,
    Weare
    //  messages,
    },

    router,
    template:'#templates',

}).$mount('#app')

