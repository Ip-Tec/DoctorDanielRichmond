<template>
  <div id="parallax-world-of-ugg">
    <section>
      <AppHeader />
    </section>
    <section id="home">
      <div class="parallax-one home">
        <h2>
          Hi I'm
          <strong>Doctor Daniel Richmond</strong>
        </h2>

        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill-opacity="1"
            d="M0,224L21.8,229.3C43.6,235,87,245,131,229.3C174.5,213,218,171,262,138.7C305.5,107,349,85,393,112C436.4,139,480,213,524,245.3C567.3,277,611,267,655,250.7C698.2,235,742,213,785,176C829.1,139,873,85,916,80C960,75,1004,117,1047,128C1090.9,139,1135,117,1178,90.7C1221.8,64,1265,32,1309,16C1352.7,0,1396,0,1418,0L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <section id="aboutInfo">
      <div class="aboutInfo">
        <div class="aboutInfo-p">
          <i><LazyIconDelivery fill="white" height="100px" width="100px" /> </i>
          <h3>We Deliver</h3>
          <p>Fast and Reliable Delivery Service</p>
          <p>Nationwide Coverage</p>
          <p>Timely Delivery to Your Doorstep</p>
        </div>
        <div class="aboutInfo-p">
          <i><LazyIconCertified fill="#111" height="50px" width="50px" /> </i>
          <h3>Certified Medicine</h3>
          <p>Quality Assurance for all Medicine</p>
          <p>Rigorous Testing for Safety and Efficacy</p>
          <p>Trusted and Genuine Medicines</p>
        </div>
        <div class="aboutInfo-p">
          <i><LazyIconDoctor fill="#000000" height="50px" width="50px" /> </i>
          <h3>Professional Team</h3>
          <p>Expert Pharmacists for Reliable Advice</p>
          <p>Personalized Service for Your Needs</p>
          <p>Committed to Patient Care and Well-being</p>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="block about">
        <h2 class="full-width">About Us</h2>
        <div class="about-p">
          <div class="mission">
            <p class="glass">
              Our primary mission is to ensure a healthy good living life by making herbal
              medicine available to the public powerful and effective. We use only
              certified natural organic herbs and wild harvested quality tested
              ingredients to produce
            </p>
            <LazyIconDoctors width="400px" height="400px" />
          </div>
          <div class="we">
            <LazyIconMedicine width="400px" height="400px" />
            <p class="glass">
              We understand disease at a level beyond the superficial symptoms and strive
              to find a permanent resolution. Together with the patient, we aim to bring
              about a state of absolute health in everyone who consults us. we have
              studied the natural properties of natural herbs , their remarkable benefits,
              and developed a unique range of drops, capsules, bottle herbs and dried
              herbs. We have employed scientific testing methods and modern extraction
              processes to ensure the benefits of the herbs remain intact, all this at a
              very good price and excellent quality. We ship worldwide.
            </p>
          </div>
        </div>
        <p class="line-break margin-top-10"></p>
      </div>
    </section>

    <section id="contacts">
      <div class="parallax-two contacts">
        <AppContacts />
      </div>
    </section>
    <section id="payment">
      <div class="payment">
        <AppPayment />
      </div>
    </section>
    <section id="testimony">
      <div class="parallax-three testimony">
        <AppTestimonial />
      </div>
    </section>

    <section id="footer">
      <div class="footer">
        <AppFooter />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const aboutParagraphs = ref([
  "",
  "Our commitment to quality and efficacy drives us to source the finest organic herbs and botanicals from trusted suppliers. We follow strict quality control measures to ensure the purity and potency of our herbal formulations.",
  "Whether you are seeking relief from a specific health condition or striving to maintain optimal wellness, we are here to guide you on your healing journey. We combine traditional wisdom with scientific knowledge to provide safe, effective, and sustainable solutions for your health concerns.",
]);

onMounted(() => {
  const aboutSvgElements = document.querySelectorAll("#about .mission");
  const aboutParagraphsElements = document.querySelectorAll("#about .glass");
  const options = {
    root: null,
    rootMargin: "40px",
    threshold: 1.0, // Adjust this threshold value as needed
  };

  const animateParagraph = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateParagraph, options);
  aboutParagraphsElements.forEach((element) => observer.observe(element));
  aboutParagraphsElements.forEach((element) => observer.observe(element));
});
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,700);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic);

/* Override UGG site */
#main {
  width: 100%;
  padding: 0;
}
svg.wave {
  left: 0;
  bottom: 2.5rem;
  position: absolute;
}
svg.wave path {
  fill: var(--lightgreen);
}
.slide-in {
  opacity: 0;
  transform: translateX(40px);
  animation: slideIn 0.5s forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.content-asset p {
  margin: 0 auto;
}
.breadcrumb {
  display: none;
}

/* Helpers */
/**************************/
.margin-top-10 {
  padding-top: 10px;
}
.margin-bot-10 {
  padding-bottom: 10px;
}

/* Typography */
/**************************/
#parallax-world-of-ugg h1 {
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  color: black;
  padding: 0;
  margin: 0;
}
#parallax-world-of-ugg h2 {
  z-index: 10;
  opacity: 0.9;
  font-size: 50px;
  font-weight: 400;
  text-align: center;
  color: var(--white);
  letter-spacing: 10px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
}
#parallax-world-of-ugg h3 {
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  line-height: 0;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: capitalize;
  color: black;
}
#parallax-world-of-ugg p {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}
.first-character {
  font-weight: 400;
  float: left;
  font-size: 84px;
  line-height: 64px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
  font-family: "Source Sans Pro", sans-serif;
}

.sc {
  color: #3b8595;
}
.ny {
  color: #3d3c3a;
}
.atw {
  color: #c48660;
}

/* Section - Title */
/**************************/
#parallax-world-of-ugg .title {
  background: white;
  padding: 60px;
  margin: 0 auto;
  text-align: center;
}
#parallax-world-of-ugg .title h1 {
  font-size: 35px;
  letter-spacing: 8px;
}

/* Section - Block */
/**************************/
#parallax-world-of-ugg .block {
  width: 820px;
  padding: 60px;
  margin: 0 auto;
  text-align: justify;
  background: var(--white);
}
.testimony {
}
#parallax-world-of-ugg .block-gray {
  padding: 60px;
  background: #f2f2f2;
}
#parallax-world-of-ugg .section-overlay-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: black;
}

/* Section - Parallax parallax-one h2*/
/**************************/
.parallax-one h2 {
  width: 75%;
  height: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/* Section - Parallax */
/**************************/
#parallax-world-of-ugg .parallax-one {
  width: 100%;
  height: 35rem;
  overflow: hidden;
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background-size: cover;
  -moz-background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-position: top center;
  background-image: url("~/assets/img/benefits-ayurvedic-healing-herbs.jpg");
}

#parallax-world-of-ugg .parallax-two {
  width: 100%;
  /* height: 25rem; */
  overflow: hidden;
  padding-top: 38px;
  position: relative;
  padding-bottom: 138px;
  background-size: cover;
  -moz-background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-position: center center;
  background-attachment: fixed !important;
  background: url("~/assets/img/herbal-medicine-with-plants-assortment-high-angle.jpg");
}

#parallax-world-of-ugg .parallax-three {
  width: 100%;
  height: 34rem;
  overflow: hidden;
  padding-top: 38px;
  position: relative;
  padding-bottom: 90px;
  background-size: cover;
  -moz-background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-position: center center;
  background-attachment: fixed !important;
  background: url("~/assets/img/organic-herbs-spices-wooden-bowl-generated-by-ai.jpg");
}

/* Extras */
/**************************/
#parallax-world-of-ugg .line-break {
  border-bottom: 2px solid snow;
  width: 200px;
  margin: 0 auto;
}

.home h2 {
  width: 55%;
}
.about h2 {
  color: var(--gray) !important;
}
.about-p {
  width: auto !important;
  /* display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr); */
}
.aboutInfo {
  z-index: 2;
  display: flex;
  height: 12.5rem;
  position: relative;
  align-items: center;
  width: auto !important;
  padding: 2em !important;
  margin-top: -3rem !important;
  justify-content: space-evenly;
  background: var(--lightgreen) !important;
}
.aboutInfo .aboutInfo-p {
  color: var(--white);
}
.aboutInfo .aboutInfo-p p {
  text-align: left;
}
.aboutInfo-p i {
  width: 100%;
  display: block;
}
.aboutInfo-p i svg {
  width: 100%;
  margin: auto;
  fill: var(--gray);
}
.aboutInfo-p h3 {
  text-align: center;
  color: var(--white) !important;
}
.aboutInfo-p p {
  text-align: center;
  font-size: 18px !important;
}

.full-width {
  width: 100%; /* Make the h2 element full width */
  text-align: center; /* Center align the text within the h2 element */
}
.payment,
#payment {
  overflow: hidden;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}
#footer {
  margin-top: 15rem;
}

/* Media Queries */
/**************************/
@media screen and (max-width: 959px) and (min-width: 768px) {
  #parallax-world-of-ugg .block {
    padding: 40px;
    width: 620px;
  }
}
@media screen and (max-width: 767px) {
  #parallax-world-of-ugg .block {
    padding: 30px;
    /* width: 520px; */
  }
  .home h2 {
    width: 90%;
  }
  #parallax-world-of-ugg h2 {
    font-size: 30px;
  }
  #parallax-world-of-ugg .block {
    padding: 30px;
  }
  #parallax-world-of-ugg .parallax-one,
  #parallax-world-of-ugg .parallax-two,
  #parallax-world-of-ugg .parallax-three {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .about-p {
    width: auto;
    display: flex;
    grid-gap: 10px;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
  }
  .mission,
  .we {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column-reverse;
  }
  .aboutInfo {
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  p.glass {
    width: 100% !important;
  }
  #footer {
    margin-top: 0.41rem;
  }
}
@media screen and (max-width: 479px) {
  #parallax-world-of-ugg .block {
    padding: 30px 15px;
    width: 290px;
  }
}

.mission,
.we {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
p.glass {
  width: 48%;
  padding: 1em;
  height: fit-content;
  margin: 0.3rem auto;
  border-radius: 1rem;
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  background: rgba(255, 255, 255, 0.39);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  /* border: 1px solid rgba(255, 255, 255, 0.36); */
}
</style>
