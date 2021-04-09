/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show2");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
  }
  

  function boldFunction() {

    document.getElementById("bold").addEventListener("click", buttonFunction);
  }

  function selectFunction(){

    document.execCommand("bold");
  }



  function italicFunction(){
    if(document.getElementById("paper").style.fontStyle == "italic"){
      document.getElementById("paper").style.fontStyle = "normal";
    }
    else{
      document.getElementById("paper").style.fontStyle = "italic";
    }
  }

  function buttonFunction(){
    if(document.getElementById('bold').style.backgroundColor!="gray"){
      document.getElementById('bold').style.backgroundColor="gray";
    }else{
      document.getElementById('bold').style.backgroundColor="white";
    }
  }

