// var desativaBotao = (function(btn){
//   var botao = document.getElementById(btn);
//   botao.style.background = "#E0E1E2";
//   botao.style.color = "rgba(0,0,0,.6)";
//   botao.disabled = "disabled";
//   botao.style.cursor = "auto";
// });
var validateFormService = (function(){


  return {

    validateName: function(selector){
      var valueName = document.getElementsByClassName(selector)[0].value;
      document.getElementById('errorName').style.display = "none";
      if (valueName == "") {
        document.getElementById('errorName').style.display = "";
        return false;
      }
    },


    validateCNPJ: function(selector){
      var valueCNPJ = document.getElementsByClassName(selector)[0];
      VMasker(valueCNPJ).maskPattern("99.999.999/9999-99");

      document.getElementById('errorCNPJ').style.display = "";
      if(valueCNPJ.value == ""){
        document.getElementById('errorCNPJ').innerHTML = "O campo é obrigatório!";
        return false;
      }else if (valueCNPJ.value.length<18) {
        document.getElementById('errorCNPJ').innerHTML = "CNPJ inválido!";
        console.log("cnpj invalido");
        return false;
      }else{
        document.getElementById('errorCNPJ').style.display = "none";
      }
    },


    validateEmail: function(selector){
      var valueEmail = document.getElementsByClassName(selector)[0].value;
      var regexEmailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var emailValidate = regexEmailValidate.test(valueEmail.trim());

      document.getElementById('errorEmail').style.display = "";
      if (!emailValidate && valueEmail != "") {
        document.getElementById('errorEmail').innerHTML = "Email inválido!";
        return false;
      }
      if(valueEmail == ""){
        document.getElementById('errorEmail').innerHTML = "O campo é obrigatório!";
        return false;
      }else{
        document.getElementById('errorEmail').style.display = "none";
      }
    },


    validateCEP: function(selector){
      var valueCEP = document.getElementsByClassName(selector)[0];
      VMasker(valueCEP).maskPattern("99999-999");

      document.getElementById('errorCEP').style.display = "";
      if(valueCEP.value == ""){
        document.getElementById('errorCEP').innerHTML = "O campo é obrigatório!";
        return false;
      }else if(valueCEP.value.length<9){
        document.getElementById('errorCEP').innerHTML = "CEP inválido!";
        return false;
      }else{
        document.getElementById('errorCEP').style.display = "none";
      }
    },


    validateDistrict: function(selector){
      var valueDistrict = document.getElementsByClassName(selector)[0].value;
      if (valueDistrict == "") {
        document.getElementById('errorDistrict').style.display = "";
        return false;
      }else{
        document.getElementById('errorDistrict').style.display = "none";
      }
    },


    validateStreet: function(selector){
      var valueStreet = document.getElementsByClassName(selector)[0].value;
      if (valueStreet == "") {
        document.getElementById('errorStreet').style.display = "";
        return false;
      }else{
        document.getElementById('errorStreet').style.display = "none";
      }
    },


    validateNumber: function(selector){
      var valueNumber = document.getElementsByClassName(selector)[0].value;
      if (valueNumber == "") {
        document.getElementById('errorNumber').style.display = "";
        return false;
      }else{
        document.getElementById('errorNumber').style.display = "none";
      }
    },


    validateCity: function(selector){
      var valueCity = document.getElementsByClassName(selector)[0].value;
      if (valueCity == "") {
        document.getElementById('errorCity').style.display = "";
        return false;
      }else{
        document.getElementById('errorCity').style.display = "none";
      }
    },


    validateState: function(selector){
      var valueState = document.getElementsByClassName(selector)[0].value;
      if (valueState == "") {
        document.getElementById('errorState').style.display = "";
        return false;
      }else{
        document.getElementById('errorState').style.display = "none";
      }
    },


    validatePositiveNumber: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      for(var i = 0; i < 8; i++){
        if(inputNumber[i].value < 0){
          alert("Por favor, utilize apenas números maiores que 0!");
          inputNumber[i].value = null;
        }
      }
    },

    validateEmptyInput: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      var button = document.getElementsByClassName("js-nextButton")[0];
      for(var i = 0; i < 8; i++){
        if(inputNumber[i].value != 0){
          button.classList.add('is-actived');
          button.classList.remove('is-disabled');
          return true;
        }
      }
      button.classList.add('is-disabled');
      button.classList.remove('is-actived');
      return false;
    }
  }
})()