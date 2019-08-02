Vue.component('headers',{
    template: //html
    `
    <div>
        <header>
            <div class="headers">
            <ul>
                <li v-on:click="navhome">
                    <div id="on" class="resicon"></div>
                </li>
                <li v-on:click="navweare">
                    <div id="tw" class="resicon"></div>
                </li>
                <li v-on:click="navserv">
                    <div id="th" class="resicon"></div>
                </li>
                <li v-on:click="navproy">
                    <div id="fo" class="resicon"></div>
                </li>
                <li v-on:click="navcont">
                    <div id="fi" class="resicon"></div>
                </li>
            </ul>
        </div>
        </header>
    </div>
    `,
    data() {
        return {
            active:true,
        }
    },
    mounted() {
        
    },
    methods:{
        navhome(){router.push('/');},
        navweare(){router.push('/weare');},
        navserv(){
            this.$router.push({
                name: 'services',
            }) 
        },
        navproy(){router.push('/projects')},
        navcont(){router.push('/contact')},
    },
})