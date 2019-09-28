const Weare = Vue.component('weare',{
    template: //html
    `
    <div>
        <div class="we grl">
            <div class="weare cont">
                <div>
                    <h1 class="txtcenter">{{$t("names.title")}}</h1>
                </div>
                <div class="container">			
                    <ul id="elasticstack" class="elasticstack">
                        <li><div class="foto"></div><div class="titulo-foto"><h5>{{$t("names.gonzalo")}}</h5></div></li>
                        <li><div class="foto"></div><div class="titulo-foto"><h5>{{$t("names.jose")}}</h5></div></li>
                        <li><div class="foto"></div><div class="titulo-foto"><h5>{{$t("names.erik")}}</h5></div></li>
                    </ul>			
                </div>
            </div>
            <headers></headers>
        </div>
    </div>
    `
    ,

    i18n: { // `i18n` option, setup locale info for component
    messages: {
        en: { 
            names:{
                gonzalo:'Gonzalo | Co - Founder',
                jose:'José | Developer',
                erik:'Erik | Project Lead',
                title:'We Are'
            }
        },
        es:{    
            names:{
                gonzalo:'Gonzalo | Cofundador',
                jose:'Desarrollador',
                erik:'Erik | Lider de Proyectos',
                title:'Nosotros'

            }
        },
    }
},
data() {
    return {
        
    }
},
mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', './assets/js/elastickstack/elastiStack.js')
    document.head.appendChild(recaptchaScript);
},
})

