<template>
  <div style="margin-top: 50px">
    <h2 class="color-text" style="text-align: center">Hola, soy</h2>
    <h1 style="text-align: center; color: #ff748c">Sabrina Pereyra</h1>
    <h2 class="color-text" style="text-align: center">Community manager</h2>

    <!-- botones -->
    <div style="display: flex; margin-top: 50px">
      <div style="margin: auto">
        <!-- <el-button
          type="primary"
          style="
            background: #181818;
            color: #ff748c;
            font-size: 18px;
            padding: 20px;
          "
          color="#ff748c"
          class="btn-primary"
        >
          Descargar CV
        </el-button> -->
        <el-link
          class="btn-download"
          type="primary"
          :underline="false"
          href="https://drive.google.com/uc?id=1OFTyQpgSHIJDSQuYe-YnsCQ6xfSsGm4S&export=download"
        >
          Descargar CV
        </el-link>
        <el-button
          type="primary"
          color="#ff748c"
          style="
            color: #fff;
            font-size: 18px;
            padding: 20px;
            margin-left: 20px;
          "
        >
          Contactame
        </el-button>
      </div>
    </div>

    <!-- Foto y cards -->
    <div style="display: flex; margin-top: 50px">
      <div style="margin: auto">
        <h3 class="color-text" style="text-align: center">Conoceme</h3>
        <h3 style="text-align: center; color: #ff748c">Algo sobre mí</h3>
      </div>
    </div>

    <div style="display: flex; margin-top: 30px">
      <div style="margin: auto">
        <div class="wrapper">
          <div class="one">
            <img src="@/assets/Imagen1.png" alt="" class="box-card imagen" />
          </div>

          <div class="two">
            <el-card class="box-card text-card">
              <div style="text-align: center">
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 6vh; ">account_circle</span> -->
                <fa icon="pen-nib" style="font-size: 40px" />
              </div>

              <h3 class="box-card-title" style="text-align: center; font-weight: bold">Experiencia</h3>
            </el-card>
          </div>

          <div class="three">
            <el-card class="box-card text-card">
              <div style="text-align: center">
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 6vh; ">school</span> -->
                <fa icon="graduation-cap" style="font-size: 40px" />
              </div>
              <h3 class="box-card-title" style="text-align: center; font-weight: bold">Estudios</h3>
              <h4 class="box-card-title" style="text-align: center">Udemy - Social media manager</h4>
              <h4 class="box-card-title" style="text-align: center">Udemy - Community manager</h4>
            </el-card>
          </div>

          <div class="four">
            <el-card class="box-card text-card">
              <div style="text-align: center">
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 6vh; ">folder</span> -->
                <fa icon="folder-open" style="font-size: 40px" />
              </div>
              <h3 class="box-card-title" style="text-align: center; font-weight: bold">Proyectos</h3>
            </el-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Texto sobre contacto -->
    <h3 style="text-align: center; margin: 50px">
      Estas son algunas de las tareas y conocimientos que poseo para que puedas
      saber cómo realizo mi trabajo y qué tecnologías uso. ¿Necesitas más
      información? Ponete en contacto conmigo y te cuento más
    </h3>

    <div style="display: flex">
      <div style="margin: auto">
        <el-button
          type="primary"
          color="#ff748c"
          style="color: #fff; font-size: 18px; padding: 20px"
        >
          Sigamos charlando
        </el-button>
      </div>
    </div>

    <!-- Habildades -->
    <div style="display: flex; margin-top: 50px">
      <div style="margin: auto">
        <h3 class="color-text" style="text-align: center">Habilidades</h3>
        <h3 style="text-align: center; color: #ff748c">Mi experiencia</h3>
      </div>
    </div>

    <div style="display: flex; margin-top: 30px">
      <div style="margin: auto">
        <div class="wrapper">
          <div class="five">
            <el-card class="box-card text-card">
              <template #header>
                <div class="card-header" style="width: 100%">
                  <h3 class="box-card-title" style="text-align: center; font-weight: bold">
                    Community manager
                  </h3>
                </div>
              </template>

              <div>
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 2vh;margin-right: 5px;">verified</span> -->
                <fa :icon="['fas', 'circle-check']" style="font-size: 20px" />
                <span class="box-card-title" style="margin-bottom: 20px; margin-left: 5px"
                  >Historias en Instagram</span
                >
              </div>

              <div style="margin-top: 5px">
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 2vh;margin-right: 5px;">verified</span> -->
                <fa :icon="['fas', 'circle-check']" style="font-size: 20px" />
                <span class="box-card-title" style="margin-bottom: 20px; margin-left: 5px"
                  >Posteos en Instagram</span
                >
              </div>

              <div style="margin-top: 5px">
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 2vh;margin-right: 5px;">verified</span> -->
                <fa :icon="['fas', 'circle-check']" style="font-size: 20px" />
                <span class="box-card-title" style="margin-bottom: 20px; margin-left: 5px"
                  >Redacción de contenido</span
                >
              </div>
            </el-card>
          </div>

          <div class="six">
            <el-card class="box-card text-card">
              <template #header>
                <div class="card-header">
                  <h3 class="box-card-title" style="text-align: center; font-weight: bold">
                    Social media manager
                  </h3>
                </div>
              </template>
            </el-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Ofertas -->
    <div style="display: flex; margin: 50px">
      <div style="margin: auto">
        <h3 class="color-text" style="text-align: center">Planes</h3>
        <h3 style="text-align: center; color: #ff748c">
          Podés contratar tu plan de acuerdo al contenido y la exigencia de tu
          proyecto
        </h3>
      </div>
    </div>

    <div style="display: flex; margin-top: 30px">
      <div style="margin: auto">
        <div class="wrapper">
          <div class="seven">
            <el-card class="box-card text-card">
              <template #header>
                <div class="card-header">
                  <h3 class="box-card-title" style="text-align: center; font-weight: bold">
                    Plan básico
                  </h3>
                </div>
              </template>
            </el-card>
          </div>

          <div class="eight">
            <el-card class="box-card text-card">
              <template #header>
                <div class="card-header">
                  <h3 class="box-card-title" style="text-align: center; font-weight: bold">
                    Plan profesional
                  </h3>
                </div>
              </template>
            </el-card>
          </div>

          <div class="nine">
            <el-card class="box-card text-card">
              <template #header>
                <div class="card-header">
                  <h3 class="box-card-title" style="text-align: center; font-weight: bold">
                    Plan premium
                  </h3>
                </div>
              </template>
            </el-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Informacion de contacto -->
    <div style="display: flex; margin: 50px">
      <div style="margin: auto">
        <h3 class="color-text" style="text-align: center">Contacto</h3>
        <h3 style="text-align: center; color: #ff748c">
          Para contratar algún plan o despejarte alguna duda podés ponerte en
          contacto conmigo por los distintos medios
        </h3>
      </div>
    </div>

    <div style="display: flex; margin-top: 30px">
      <div style="margin: auto">
        <div class="wrapper">
          <div class="ten">
            <el-card class="box-card text-card">
              <div style="text-align: center">
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 4vh;margin-right: 5px;">mail</span> -->
                <fa
                  :icon="['fas', 'envelope']"
                  style="font-size: 40px" 
                  
                />
                <!-- <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/> -->
                <h3 class="box-card-title" style="text-align: center; font-weight: bold">Email</h3>
                <h4 class="box-card-title" style="text-align: center; margin-top: 10px">sabrinampereyra@gmail.com</h4>
                <a
                  class="a-link box-card-title"
                  href="mailto:sabrinampereyra@gmail.com?Subject=Solicitud%20de%20serivicios%20de%20community%20y%20social%20media%20manager"
                  >Enviame un mail</a
                >
              </div>
            </el-card>
          </div>

          <div class="eleven">
            <el-card class="box-card text-card">
              <div style="text-align: center">
                <!-- <span class="material-icons iconoTarjeta" style="font-size: 4vh;margin-right: 5px;">phone_android</span> -->
                <!-- <fa :icon="['fas', 'whatsapp']" style="font-size: 20px"/> -->
                <font-awesome-icon
                  :icon="['fab', 'whatsapp']"
                  class="icon alt"
                  style="font-size: 40px"
                />
                <h3
                  style="
                    text-align: center;
                    font-weight: bold;
                    margin-top: 10px;
                  "
                  class="box-card-title"
                >
                  WhatsApp
                </h3>
                <h4 class="box-card-title" style="text-align: center; margin-top: 10px">
                  3843-401553
                </h4>
                <a
                  style="margin-top: 10px"
                  
                  class="a-link box-card-title"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=3843401553&text=Hola%20Sabri%20%F0%9F%98%81.%20Estoy%20interesado%20en%20contratar%20tus%20servicios,%20por%20favor%20ponete%20en%20contacto%20conmigo%20cuanto%20antes.%20Muchas%20gracias!!!%20%F0%9F%98%83"
                  >Enviame un WhatsApp</a
                >
              </div>
            </el-card>
          </div>

          <div class="twelve">
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              class="demo-ruleForm"
              status-icon
              style="width: 40vh"
            >
              <el-form-item prop="name">
                <el-input
                  v-model="form.name"
                  placeholder="Ingresá tu nombre"
                  style="
                    margin-top: 20px;
                    width: 100%;
                    background-color: black !important;
                  "
                />
              </el-form-item>

              <el-form-item prop="name">
                <el-input
                  v-model="form.mail"
                  placeholder="Ingresá tu mail"
                  style="margin-top: 20px; width: 100%"
                />
              </el-form-item>

              <el-form-item prop="name">
                <el-input
                  v-model="form.message"
                  placeholder="Ingresá tu mensaje o duda"
                  style="margin-top: 20px; width: 100%"
                  maxlength="300"
                  show-word-limit
                  :autosize="{ minRows: 4 }"
                />
              </el-form-item>
            </el-form>

            <el-button
              type="primary"
              color="#ff748c"
              style="color: #fff; margin-top: 10px; margin-bottom: 10px"
              @click="sendMail()"
              :loading="loadingBtnSendMail"
            >
              Enviar
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  data() {
    return {
      form: {
        name: null,
        mail: null,
        message: null,
      },
      loadingBtnSendMail: false,
    };
  },

  methods: {
    sendMail() {
      if (this.form.name == null ||
          this.form.name == '' ||
          this.form.mail == null ||
          this.form.mail == '' ||
          this.form.message == null || 
          this.form.message == null
      ) {
        ElMessage({
          message:
            "¡Para poder enviar el mail tenés que completar todos los campos!",
            type: "error",
        });
      } else {
        // this.loadingBtnSendMail = true
        console.log(this.form.name);
        console.log(this.form.mail);
        console.log(this.form.message);

        let data = {
          from_name: this.form.name,
          from_email: this.form.mail,
          message: this.form.message,
          // subject: this.subject,
          subject: "Contacto por servicios de community manager",
        };

        // this.loadingBtnSendMail = false

        emailjs.init("TyEuh3ooftpepukCE");

        emailjs.send("gmail", "template_wb0xr6p", data).then(
          function (response) {
            if (response.text === "OK") {
              // alert('El correo se ha enviado de forma exitosa');
              ElMessage({
                message:
                  "¡Mail enviado con éxito, me contactaré con vos cuanto antes!",
                type: "success",
              });
              // this.loadingBtnSendMail = true
              // this.form.name = null
              // this.form.mail = null
              // this.form.message = null
            }
            console.log(
              "SUCCESS. status=%d, text=%s",
              response.status,
              response.text
            );
            // this.loadingBtnSendMail = false
            this.form.name = null;
            this.form.mail = null;
            this.form.message = null;
          },
          function (err) {
            // alert('Ocurrió un problema al enviar el correo');
            ElMessage({
              message: "¡Ocurrió un error al enviar el mail!",
              type: "error",
            });
            console.log("FAILED. error=", err);
            // this.loadingBtnSendMail = false
          }
        );
        // this.loadingBtnSendMail = false

        this.loadingBtnSendMail = false;
        this.form.name = null;
        this.form.mail = null;
        this.form.message = null;
      }
    },
  },
};
</script>

<style>
.a-link {
  /* color: #181818 !important; */
  margin-top: 10px !important;
  font-weight: bold;
}

.a-link:hover {
  background-color: #2f2f2f;
  font-weight: bold;
  color: #ff748c;
}

.btn-download {
  color: #ff748c;
  font-size: 18px;
  padding: 6px 15px;
  background-color: #181818;
  border: 1px solid #ff748c;
  border-radius: 4px;
}

.btn-download:hover {
  background-color: #323232;
  color: #ff748c;
}

.color-text {
  color: #cccccc;
}

.btn-primary:hover {
  background-color: #ff8da1;
}

.box-card {
  /* background-color: #ff8da1; */
  background-color: #191919;
  color: #ff8da1;
  border-radius: 18px;
  border: 1px solid #ff8da1;
}

.box-card:hover{
  background-color: #2f2f2f;
}

.box-card-title {
  color: #fff;
}

.el-card__header {
  background-color: #cc7080;
  border: 1px solid #cc7080;
}

.text-card {
  height: 200px;
}

.imagen {
  background-color: transparent !important;
  border: 1px solid transparent !important;
}

.iconoTarjeta {
  color: whi;
}

#header {
  background-color: bisque;
}

.el-input__wrapper {
  background-color: #181818 !important;
  border: 1px solid #cc7080 !important;
  color: #cccccc !important;
}

.el-input__inner {
  color: #cccccc !important;
}

.el-input__inner place-holder {
  color: #808080 !important;
}

.el-input__count-inner {
  background-color: #181818 !important;
  color: #cccccc !important;
}

.el-textarea__inner {
  background-color: #181818 !important;
  color: #cccccc !important;
  border: 1px solid #cc7080 !important;
}

.el-input__count {
  background-color: #181818 !important;
  color: #cccccc !important;
}

/* web */
@media (min-width: 601px) {
  .box-card {
    display: inline-block;
    margin: 10px;
    width: 300px;
  }

  .el-input {
    width: 100%;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    /* grid-auto-rows: minmax(601px, auto); */
  }

  .one {
    grid-column: 1 / 1;
    grid-row: 1;
  }

  .two {
    grid-column: 2 / 2;
    grid-row: 1;
  }

  .three {
    grid-column: 3 / 3;
    grid-row: 1;
  }

  .four {
    grid-column: 4 / 4;
    grid-row: 1;
  }

  .five {
    grid-column: 5 / 5;
    grid-row: 1;
  }

  .six {
    grid-column: 6 / 6;
    grid-row: 1;
  }

  .seven {
    grid-column: 7 / 7;
    grid-row: 1;
  }

  .eight {
    grid-column: 8 / 8;
    grid-row: 1;
  }

  .nine {
    grid-column: 9 / 9;
    grid-row: 1;
  }

  .ten {
    grid-column: 1 / 1;
    grid-row: 2;
  }

  .eleven {
    grid-column: 1 / 1;
    grid-row: 3;
  }

  .twelve {
    grid-column: 2 / 2;
    grid-row: 2;
  }
}

/* mobile */
@media (max-width: 600px) {
  h3 {
    text-align: center !important;
  }

  .el-input {
    width: 100%;
  }

  .box-card {
    display: block;
    margin: 10px;
    width: 300px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }

  .one {
    grid-column: 1 / 1;
    grid-row: 1;
  }

  .two {
    grid-column: 1 / 1;
    grid-row: 2;
  }

  .three {
    grid-column: 1 / 1;
    grid-row: 3;
  }

  .four {
    grid-column: 1 / 1;
    grid-row: 4;
  }

  /* .five {
    grid-column: 1 / 1;
    grid-row: 5;
  }

  .six {
    grid-column: 1 / 1;
    grid-row: 6;
  } */

  .ten {
    margin: auto;
  }

  .eleven {
    margin: auto;
  }
}
</style>
