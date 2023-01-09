//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue

createApp({
  data() {
    return {
      listEmail: [],
    }
  },
  methods: {
      generateEmail(){
          for(let i=0; i< 10; i++){
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
              this.listEmail.push(response.data.response);
          }
          );
      }
      }
  },
}).mount('#app')

  

