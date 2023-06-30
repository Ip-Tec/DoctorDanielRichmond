<template>
  <main id="contacts">
    <h2>Contact Us</h2>
    <div class="contact-form">
      <form @submit.prevent="handleSubmit()">
        <div class="con-form">
          <label for="name">Name</label>
          <input type="text" name="name" v-model="name" />
          <span class="error">{{ errors.name }}</span>
        </div>
        <div class="con-form">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email" />
          <span class="error">{{ errors.email }}</span>
        </div>
        <div class="con-form">
          <label for="message">Message</label>
          <textarea v-model="message"></textarea>
          <span class="error">{{ errors.message }}</span>
        </div>
        <p>{{ success.message }}</p>
        <button type="submit">Send</button>
      </form>

      <div class="info">
        <p>Connect with a Doctor</p>
        <div class="icon">
          <i>
            <a
              href="https://www.facebook.com/Doctordanielrichmond?mibextid=LQQJ4d "
              target="_blank"
            >
              <LazyIconFacebook width="30px" height="30px" fill="none" />
            </a>
          </i>
          <i>
            <a href="https://wa.me/18482570968" target="_blank" rel="noopener noreferrer">
              <LazyIconWhatsapp width="30px" height="30px" />
            </a>
          </i>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const errors = ref({
  name: "",
  email: "",
  message: "",
});
const success = ref({
  message: "",
});

const validateForm = () => {
  errors.value = {};

  if (!name.value.trim()) {
    errors.value.name = "Please enter your name";
  }

  if (!email.value.trim()) {
    errors.value.email = "Please enter your email";
  } else if (!isValidEmail(email.value)) {
    errors.value.email = "Please enter a valid email";
  }

  if (!message.value.trim()) {
    errors.value.message = "Please enter your message";
  }

  return Object.keys(errors.value).length === 0;
};

const isValidEmail = (email) => {
  // Add your email validation logic here
};

const handleSubmit = () => {
  const isValid = validateForm();

  if (isValid) {
    // Perform your form submission logic here
    success.value.message = "Form submitted successfully"
    console.log("Form submitted successfully");
    // Reset form fields
    name.value = "";
    email.value = "";
    message.value = "";
  } else {
    errors.value.message = "Form submission failed. Please fix the errors."
    console.log("Form submission failed. Please fix the errors.");
  }
};
</script>

<style scoped>
main {
  width: 80%;
  z-index: 90;
  margin: auto;
  /* margin-top: -1rem; */
  text-align: center;
}
main h2 {
  font-size: 3em;
  color: var(--white);
}
div.contact-form {
  padding: 1em;
  display: flex;
  margin: 0 1rem;
  align-items: center;
  height: fit-content;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  justify-content: space-between;
  -webkit-backdrop-filter: blur(6.2px);
  background: rgba(255, 255, 255, 0.39);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.36);
}
form {
  width: 50%;
  padding: 1rem;
}
form.con-form {
}
label,
input,
textarea {
  display: block;
  margin: 0.5rem;
  text-align: left;
  color: var(--white);
}
input,
textarea,
button {
  width: 90%;
  border: none;
  padding: 0.5rem;
  background: transparent;
  border-bottom: 1px solid var(--green);
}
input:focus-visible {
  outline: none;
  outline-offset: 0 !important;
}
textarea {
  height: 5rem;
}
textarea:focus-visible {
  outline: none;
}
button {
  width: 55%;
  padding: 0.7rem;
  cursor: pointer;
  color: var(--white);
  transition: all 2s;
  border-radius: 2rem;
  background: var(--lightgreen);
  border-color: var(--lightgreen) !important;
  border: 1px solid var(--green);
}
button:hover {
  color: var(--white);
  background: transparent;
}
.error {
  display: block;
  margin: 0.3rem;
  padding: 0.2rem;
  font-size: 14px;
  text-align: justify;
  color: var(--error);
}
div.info {
  width: 60%;
  padding: 1rem;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info p {
  font-size: larger;
  color: var(--white);
}
.info i {
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 1s;
  background: rgba(255, 255, 255, 0.36);
}
.info i:hover {
  border-radius: 2rem;
  border: 1px solid #ffffff5c;
}
info i svg {
  margin: 0.4rem !important;
}
@media screen and (max-width: 767px) {
  main {
    width: 95%;
    margin-top: -6rem;
  }
  main h2 {
    font-size: 30px;
  }
  div.contact-form {
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
  }
  form,
  .info {
    width: 80%;
    margin: auto;
  }
  button {
    width: 80%;
  }
}
</style>
