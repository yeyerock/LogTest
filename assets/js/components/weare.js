const Weare = Vue.component('weare',{
    template: //html
    `
    <div>
        <div class="we grl">
            <div class="weare cont ">
                <h1>{{$t("weare.title")}}</h1>
            </div>
            <div class="container">			
                <ul id="elasticstack" class="elasticstack">
                    <li><div class="foto"></div><div class="titulo-foto"><h5>{{$t("weare.gonzalo")}}</h5></div></li>
                    <li><div class="foto"></div><div class="titulo-foto"><h5>{{$t("weare.jose")}}</h5></div></li>
                    <li><div class="foto"></div><div class="titulo-foto"><h5>{{$t("weare.erik")}}</h5></div></li>
                </ul>			
            </div>
            <headers></headers>
        </div>
    </div>
    `,
   
})