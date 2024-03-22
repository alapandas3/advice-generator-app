window.addEventListener("DOMContentLoaded", (event) => {

    function myfun() {
        window.location.reload();
    }
    const text=document.getElementById("result-text");
    fetch("https://api.adviceslip.com/advice")
   .then(response => response.text())
   .then((response) => {
       var i=JSON.parse(response);
       console.log(i);
       text.innerHTML='"'+i.slip.advice+'"';
   })
   .catch(err => console.log(err))


});