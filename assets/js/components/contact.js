const Contact = Vue.component('contact', {
    template://html
    `
    <div>
        <div class="con grl">
            <div class="contact cont">
                <div>
                    <h1 class="txtcenter">{{$t("contact.title")}}</h1>
                </div>  
                <div class="contenedor-iconos">
                    
                    <div class="icono-contacto">
                        <a target="_blank" href="https://wa.me/524421192205?text=Hola%20tengo%20una%20pregunta%20">
                            <svg id="whatsapp"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.67 197.67">
                                <path class="cls-1"  d="M8.42,189.14c-1.79,1.31.1-3.65.63-5.35,1.1-3.58,1.1-3.58,1.71-5.35,3.29-9.56,2.3-7,3.65-10.49q2.43-6.24,5.41-12.23c.9-1.8,1.84-2.87,1.32-4.77-.45-1.61-2.19-3.47-3-4.94a93.8,93.8,0,1,1,35.75,35.4c-1.64-.91-3.26-2.25-5-3-2.16-.93-3.09-.43-5.43.33q-6.25,2-12.4,4.34-4.65,1.77-9.24,3.7c-1,.44,1.37-.5-3.26.94-1.1.34-2.15.63-3.27,1a17.41,17.41,0,0,1-6.28,1l-.84.05a.49.49,0,0,1-.34-.05.38.38,0,0,1-.15-.24.8.8,0,0,1,0-.57" transform="translate(-0.77 -0.63)"/>
                                <path class="cls-1"  d="M21.12,152.84" transform="translate(-0.77 -0.63)"/>
                                <path class="cls-1"  d="M33.57,166.14" transform="translate(-0.77 -0.63)"/>
                                <path class="cls-1"  d="M48.44,179.37" transform="translate(-0.77 -0.63)"/>
                                <path class="cls-1"  d="M59.31,49.54c-2.87,4-3.45,9.11-3.68,14-.57,12,.49,24.26,5,35.37,4.38,10.67,11.87,19.92,20.85,27.17a104.81,104.81,0,0,0,30.23,16.53c6,2.19,12.26,4,18.66,4.29s13-1,18.36-4.46c1.83-1.21,4.29-2.43,5.61-4.17a11.52,11.52,0,0,0,1.78-6.66,8.44,8.44,0,0,0-.32-2.29c-.86-2.8-3.93-5.08-6-7l-10.34-9.94c-2.11-2-4.5-4.18-7.42-4.29-5.16-.2-8.24,5.73-12.92,7.93-3.39,1.6-7.5,1.06-10.88-.59s-6.15-4.29-8.79-7q-4.84-4.92-9.33-10.18c-3.58-4.2-7.16-9.19-6.56-14.68s5.2-9.55,9.2-13.39c3.38-3.24-.41-5.85-2.88-8.47q-5.07-5.39-10.52-10.38C77,49.06,74.29,47,71.85,44.66c-2-1.92-3.4-2.31-5.93-.76A22.15,22.15,0,0,0,59.31,49.54Z" transform="translate(-0.77 -0.63)"/>
                            </svg>
                        </a>
                    </div>
                    <div class="icono-contacto" >
                        <a href="mailto:creal@thermofick.com">
                            <svg id="correo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.87 156.7">
                                <rect class="cls-1"  x="5" y="5" width="188.87" height="146.7" rx="30"/>
                                <path class="cls-1"  d="M13.56,53.62l82.29,59.75a7.4,7.4,0,0,0,8.1,0l83-59.76" transform="translate(-0.46 -31.24)"/>
                            </svg>
                        </a>
                    </div>
                    <div class="icono-contacto">
                        <a  target="_blank" href="https://www.instagram.com/thermofick_ing_ambiental/" >
                            <svg id="instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188.98 188.98">
                                <circle class="cls-1"  cx="94.49" cy="94.49" r="41.62"/>
                                <circle class="cls-2"  cx="154.34" cy="35.26" r="11.83"/>
                                <rect class="cls-1"  x="5" y="5" width="178.98" height="178.98" rx="38"/>
                            </svg>
                        </a>
                    </div>
                    
                </div>
                <!-- <div class="an">
                    <div class="bg"></div>
                    <div class="bg bg2"></div>
                </div> -->
            </div>
            <headers></headers>
        </div>
    </div>
    `,

    i18n: { // `i18n` option, setup locale info for component
        messages: {
            en: { 
                contact:{
                    title:'Contact'
                }
            },
            es:{    
                contact:{
                    title:'Contacto'
                }
            },
        }
    },

    data() {
        return {
            
        }
    },
    methods: {
        mouseOver: function(){
            if(window.innerWidth > 1024){ this.active = true; }
          },
          mouseOut: function(){
            if(window.innerWidth > 1024){ this.active = false; }
          }
    },
})