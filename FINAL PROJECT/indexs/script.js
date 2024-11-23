let Yoxlamaq = document.querySelector(".Yoxlamaq")

let UserCheck = document.querySelector(".UserCheck")

let h1 = document.querySelector("h1")



let users = JSON.parse(localStorage.getItem("users")) || []

let buttons=document.querySelector(".buttons")

let user = JSON.parse(localStorage.getItem("user"))



let isdifade = new bootstrap.Modal(document.querySelector(".isdifade"))



function Istifadeci() {
    if(user){
        let element=`<h1>Isdifadeci Adi:${users.username}</h1>`
        UserCheck.innerHTML+=element
    }
else{
    let element=`<h1>Isdifadeci Adi:</h1>`
    UserCheck.innerHTML+=element
}
}
Istifadeci()

function checkUser() {
  if (user) {
    let check= users.find(function (e) {
      return user.username == e.username && user.password == e.password
    })

    if(!check){
      let element=`<button type="button" class="btn btn-warning">Komputer Alisverisine-Basla</button>
      
                  <a href="../SignIn/SignIn.html"><button type="button" class="btn Yoxlamaq btn-success">Hesaba Daxil Olmaq</button></a>`
                  buttons.innerHTML+=element
          }
        else{
      let element=`<a href="../indexs/carSale/comSale.html"><button type="button" class="btn btn-primary">Komputerlerim</button></a>
      
             <a href="../indexs/carHome/comHome.html"><button type="button" class="btn btn-warning">Komputer Alisverisine-Basla</button></a>
             
             <button type="button" onclick="Exit" class=" signOut  btn btn-danger">Hesabdan Cixmaq</button>
      
             
             `
             buttons.innerHTML+=element
        }
      
      



  }
  else {

      let element=`<button type="button" class="btn btn-warning">Komputer Alisverisine-Basla</button>
      
                  <a href="../signIn/signIn.html"><button type="button" class="btn Yoxlamaq btn-success">Hesaba Daxil Olmaq</button></a>`
                  buttons.innerHTML+=element
          

  }
}

checkUser()



 
    
function Exit(){
let signOut=document.querySelector(".signOut")


signOut.addEventListener("click",()=>{
  alert("Hesabdan cixmaq isteyirsiniz?")
  localStorage.removeItem("user")
 location.href="../signIn/signIn.html"
})

}
Exit()