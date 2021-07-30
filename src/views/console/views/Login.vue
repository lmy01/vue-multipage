<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 offset-sm2 sm8 offset-md3 md6 offset-lg4 lg4>
        <v-card hover color="#eee">
          <v-carousel hide-controls hide-delimiters :height="80" >
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
          <v-tabs fixed-tabs v-ripple="false" v-model="activeTab" color="#eee" slider-color="primary">
            <v-tab href="#login">
              login
            </v-tab>
            <v-tab href="#register">
              register
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="activeTab">
            <v-tab-item value="login">
              <v-form
                ref="l_form"
                v-model="l_valid"
                lazy-validation
              >
                <v-text-field
                  v-model="l_email"
                  :rules="l_emailRules"
                  label="E-mail"
                  required
                  autofocus
                ></v-text-field>

                <v-text-field
                  v-model="l_password"
                  :counter="16"
                  :rules="l_passwordRules"
                  label="Password"
                  type="password"
                  required
                  append-icon="mdi-help-circle-outline"
                  @click:append="ForgotPassword"
                ></v-text-field>

                <v-checkbox
                  v-model="l_checkbox"
                  label="Remember E-mail?"
                  required
                  color='success'
                  :height="10"
                ></v-checkbox>

                <v-btn
                  :disabled="!l_valid"
                  color="success"
                  @click="validate('l_form')"
                >
                  Login
                </v-btn>

                <v-btn
                  color="error"
                  @click="reset('l_form')"
                >
                  Reset
                </v-btn>
              </v-form>
            </v-tab-item>
            <v-tab-item value="register">
              <v-form
                ref="r_form"
                v-model="r_valid"
                lazy-validation
              >
                <v-text-field
                  v-model="r_email"
                  :rules="r_emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="r_password"
                  :counter="16"
                  :rules="r_passwordRules"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="r_password2"
                  :counter="16"
                  :rules="r_password2Rules"
                  label="Password2"
                  type="password"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="r_code"
                  :rules="r_codeRules"
                  label="Code"
                  required
                  append-icon="mdi-send"
                  @click:append="sendCode"
                >
                </v-text-field>

                <v-checkbox
                  v-model="r_checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Read and agree to the User Terms?"
                  required
                  color="success"
                ></v-checkbox>

                <v-btn
                  :disabled="!r_valid"
                  color="success"
                  @click="validate('r_form')"
                >
                  Register
                </v-btn>

                <v-btn
                  color="error"
                  @click="reset('r_form')"
                >
                  Reset
                </v-btn>
              </v-form>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  mounted(){
    // console.log(this.$route.path)
    this.activeTab = this.$route.path==='/console/register'?'register':'login'
  },
  data: () => ({
    items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        }
      ],
    activeTab:'',
    l_valid: true,
    l_email: '111@163.com',
    l_emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    l_password: '123456',
    l_passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length <= 16) || 'Password must be less than 16 characters'
    ],
    l_checkbox: true,
    r_valid: true,
    r_email: 'test@163.com',
    r_emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    r_password: '111',
    r_passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length <= 16) || 'Password must be less than 16 characters'
    ],
    r_password2: '111',
    r_code:'1111',
    r_codeRules: [
      v => !!v || 'Code is required'
    ],
    r_checkbox: false
  }),
  computed: {
    r_password2Rules () {
      const rules = [
        v => !!v || 'Password2 is required',
        v => (v && v.length <= 16) || 'Password must be less than 16 characters',
        v => (v && v===this.r_password) || 'Inconsistent password input twice'
      ]
      return rules
    }
  },
  watch:{
    '$route.path':{
      handler(val){
        val==='/console/register'?this.activeTab='register':this.activeTab='login'
      },
      deep:true
    },
    activeTab(val){
      val==='register'?this.$router.push('register'):this.$router.push('login')
    }
  },
  methods: {
    ForgotPassword(){
      console.log('forget')
    },
    sendCode(){
      console.log('send code')
    },
    validate (form) {
      if (this.$refs[form].validate()) {
        this.$router.push("/console/dashboard")
      }
    },
    reset (form) {
      this.$refs[form].reset()
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    padding:15px;
  }
  .v-card{
    margin-top:100px;
    padding:10px;
    .form_checkbox_forgotCon{
      display:flex;
    }
  }
  .v-tabs{
    margin:5px;
  }
  @media (max-width: 1200px){
    .v-card{
      margin-top:50px;
    }
  }
  @media (max-width: 640px){
    .container{
      padding:5px;
    }
    .v-card{
      height:100%;
      margin-top:0px;
      box-shadow:none;
      -webkit-box-shadow:none;
    }
  }
  @media (max-width: 480px){
    .container{
      padding:0px;
    }
    .v-card{
      margin-top:0px;
    }
  }
  
</style>