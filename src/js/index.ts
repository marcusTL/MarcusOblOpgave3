new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        greeting: "",
        change: ""
    },
    methods: {
        sayHello() {
            console.log("Say Hello " + this.name)
            if (this.name == "") {
                this.greeting = "Hello NoName"
            }
            else {
                this.greeting = "Hello " + this.name
            }
        },
        determin(){
            if(this.change=="SayHello"){
                this.sayHello()
            }
            if(this.change=="Uppercase"){
                this.uppercase()
            }
            if(this.change == "Lowercase"){
                this.lowercase()
            }
            if(this.change == "Fuk"){
                this.fukoff()
            }
            if(this.change == "FirstWord"){
                this.first()
            }
            else{this.greeing = "invalid change"}

        },
        uppercase(){
            let name = this.name.toUpperCase()
            this.greeting = name
        },
        lowercase(){
            let name = this.name.toLowerCase()
            this.greeting = name
        },
        first(){
             var str = this.name.split(" ")
             this.greeting = str[0]
             
        },
        fukoff(){
            let name = this.name.replace(this.name,"f***")
            this.greeting = name
        }
    }
})