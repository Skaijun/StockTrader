<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Stock Trader Platform</span>
      <div class="input-field">
        <input
          class="email-input"
          type="text"
          placeholder="Email"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email),
          valid: ($v.email.$dirty && $v.email.email && email.length)}"
        />
        <label for="email"></label>
        <small
          class="heler-text invalids"
          v-if="$v.email.$dirty && !$v.email.required"
        >Enter your email</small>
        <small
          class="heler-text invalids"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Enter correct email</small>
      </div>
      <div class="input-field">
        <input
          class="password-input"
          type="password"
          placeholder="Password"
          v-model="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength),
          valid: ($v.email.$dirty && $v.password.minLength && password.length)}"
        />
        <label for="password"></label>
        <small
          class="heler-text invalids"
          v-if="$v.password.$dirty && !$v.password.required"
        >Enter your password</small>
        <small
          class="heler-text invalids"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Password must contain at least {{ $v.password.$params.minLength.min }} characters</small>
      </div>
      <div class="input-field" v-if="isNewUser">
        <input
          class="name-input"
          type="text"
          placeholder="Name"
          :class="{invalid: $v.name.$dirty && !$v.name.required && !name.length, valid: $v.name.$dirty && $v.name.required && name.length}"
          v-model="name"
        />
        <label for="name"></label>
      </div>
      <div class="input-field" v-if="isNewUser">
        <input
          class="age-input"
          type="number"
          placeholder="Age"
          :class="{invalid: $v.age.$dirty && !$v.age.required && age !== undefined, valid: $v.age.$dirty && $v.age.required}"
          v-model="age"
        />
        <label for="age"></label>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="card-submit" type="submit">{{ isNewUser ? 'Sign Up' : 'Sign In' }}</button>
      </div>
      <div class="card-registration">
        <p>
          {{ isNewUser ? 'Already registered? Then ' : "Still don't have an acc?" }}
          <span
            @click="switchLoginForm"
          >{{ isNewUser ? 'Sign In' : 'Sign Up' }}</span>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "../../axios-auth/axios-auth.js";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
    name: "",
    age: null,
    isNewUser: false
  }),
  validations: {
    name: { required },
    age: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
      this.$router.push("/stocks");
    },
    switchLoginForm() {
      this.isNewUser = !this.isNewUser;
      this.email = "";
      this.password = "";
      this.name = "";
      this.age = null;
    },
    signUp() {
      const formData = {
        email: this.emal,
        password: this.password,
        age: this.age,
        name: this.name
      };
      axios
        .post("/users.json", formData)
        .the(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Piedra&display=swap");
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap");
.card {
  max-width: 500px;
  padding: 0 15px;
  margin: 0 auto;
}
.card-content {
  padding: 20px 30px 30px 30px;
  min-width: 400px;
  background-color: white;
}
.card-title {
  font-family: "Piedra", cursive;
  font-size: 24px;
}
.input-field {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.input-field input {
  color: rgb(82, 79, 79);
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  padding: 3px 5px;
  width: 100%;
}
.input-field .email-input,
.input-field .password-input,
.input-field .age-input,
.input-field .name-input {
  border-bottom: 2px solid rgb(82, 79, 79);
}
.email-input.invalid,
.password-input.invalid,
.age-input.invalid,
.name-input.invalid {
  border-bottom: 2px solid red;
}
.email-input.valid,
.password-input.valid,
.age-input.valid,
.name-input.valid {
  border-bottom: 2px solid rgb(44, 175, 17);
}
.heler-text {
  margin-top: 5px;
  padding-left: 4px;
}
.heler-text.invalids {
  color: red;
}
.card-action {
  padding: 0 30px 10px 30px;
  background-color: white;
}
.card-action button {
  font-family: "MuseoModerno", cursive;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  line-height: 24px;
  border: none;
  border-radius: 5px;
  height: 50px;
  opacity: 0.8;
  transition: all 0.4s ease-in-out;
}
.card-submit {
  width: 100%;
  background-color: rgb(174, 217, 219);
}
.card-submit:hover {
  opacity: 1;
  background-color: rgb(150, 200, 202);
}
.card-signup {
  background-color: thistle;
  margin-left: 10px;
  padding: 0 20px;
}
.card-registration {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.card-registration p {
  font-size: 18px;
  line-height: 22px;
}
.card-signup:hover {
  opacity: 1;
  background-color: rgb(240, 129, 109);
}
.card-action span {
  color: blue;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.4s ease-in-out;
}
.card-action span:hover {
  opacity: 1;
}
</style>