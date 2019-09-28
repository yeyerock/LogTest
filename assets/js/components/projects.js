const Projects = Vue.component('projects', {
    template://html
    `
    <div>
        <div class="pro grl">
            <div class="projects cont">
                <h1 class="txtcenter">{{$t("projects.title")}}</h1>

                <div class="logcards cont-proyectos">
                    <a href="https://thermofick.com/" target="_blank"><div class="logo-proyecto"></div> </a> 
                    <a href="https://biclaparkingspot.com/pwa" target="_blank"><div class="logo-proyecto"></div></a>
                    <a href="https://occpack.com/" target="_blank"><div class="logo-proyecto"></div> </a> 
                    <a href="http://www.agrconsultores.com.mx/" target="_blank"><div class="logo-proyecto"></div> </a> 
                    <a href="https://geraldinecortes.com/" target="_blank"><div class="logo-proyecto"></div> </a> 
                    <a href="https://thermofick.com/" target="_blank"><div class="logo-proyecto"></div> </a> 
            </div>
            </div>
            
            <headers></headers>
        </div>
    </div>
    `,

    i18n: { // `i18n` option, setup locale info for component
    messages: {
        en: { 
            projects:{
                title:'Our Clients'
            }
        },
        es:{    
            projects:{
                title:'Clientes'
            }
        },
    }
},
})