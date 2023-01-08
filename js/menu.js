document.querySelector("#menu_burger").addEventListener(
    "click", apparait
  )
  document.querySelector(".back").addEventListener(
    "click", aurevoir
  )
  
  
  function apparait(){
    document.querySelector(".menu").classList.toggle("coucou")
    console.log("yyyyo")
  }
  
  function aurevoir(){
    document.querySelector(".menu").classList.toggle("coucou")
    console.log("yyyyo")
  }
  