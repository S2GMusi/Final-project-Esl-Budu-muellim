// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  let form=document.querySelector("form")

  let ad=document.querySelector("#validationCustom01")
  let soyad=document.querySelector("#validationCustom02")
  let telefon=document.querySelector("#validationCustom03")
  let password=document.querySelector("#validationCustom04")
  let nickName=document.querySelector("#validationCustom05")
let button=document.querySelector(".b")
let users=JSON.parse(localStorage.getItem("users"))||[]

let daxilOl=document.querySelector(".daxilOl")

  form.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(form.checkValidity()){
      let checkUser=users.some(function(e){
        return e.nickName==nickName.value
      })
      if(checkUser){
        alert("Bunu istifade ede bilmersiniz!")
      }
      else{
        let obj={
          ad:ad.value,
          soyad:soyad.value,
          telefon:telefon.value,
          password:password.value,
          nickName:nickName.value,
      }
      users.push(obj)
      localStorage.setItem("users",JSON.stringify(users))
      alert("Ugurla Yaradildi!")
      if(obj){
        location.href="../signIn/signIn.html"
      }
      }
    }
else{
  alert("Zehmet Olmasa Hamisini Yazin!")
}
  })


  daxilOl.addEventListener("click",()=>{
     location.href="../signIn/signIn.html"
  })