<template>
   <section class="src-componentes-formulario">
  <div class="jumbotron">

    <h2>Formulario</h2>
    <hr>
    <br>

    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"
          required
          :minlength="nombreLengthMin"
          :maxlength="nombreLengthMax"
          no-espacios
        >
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
          <div slot="no-espacios" class="alert alert-danger mt-1">
            No se permiten espacios intermedios en este campo
          </div>            
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
          </div>            
          <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-warning mt-1">
            Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
          </div>            
        </field-messages>

      </validate>
      <br>

      <validate tag="div">
        <label for="edad">Edad</label>
        <input 
          type="number" 
          id="edad" 
          name="edad" 
          class="form-control"
          autocomplete="off"
          v-model.number="formData.edad"
          required
          :min="edadMin"
          :max="edadMax"
        >
        <field-messages name="edad" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
          <div slot="min" class="alert alert-danger mt-1">La edad mínima es de {{edadMin}} años</div>            
          <div slot="max" class="alert alert-danger mt-1">La edad máxima permitida es de {{edadMax}} años</div>            
        </field-messages>

      </validate>
      <br>
      <validate tag="div">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.email"
          required
        >
        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
          <div slot="email" class="alert alert-danger mt-1">Email no válido</div>            
        </field-messages>

      </validate>
      <br>

      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>

    </vue-form>
  </div>
</section>
</template>


<script lang="js">
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    async enviar() {
      const usuario = { "nombre": this.formData.nombre, "mail": this.formData.email, "edad": this.formData.edad }
      this.$store.dispatch('enviarUsuarios', usuario)
      this.formData = this.getInicialData()
      this.formState._reset()
    }

  }
}

</script>

<style scoped lang="css">
.src-componentes-formulario {

}

.jumbotron {
    background-color: rgb(97, 8, 42);
    color: white;
}

hr {
    background-color: #eee;
}

pre {
    color: white;
}
</style>

