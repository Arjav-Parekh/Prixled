//You will have to select the text always to perform the required function


function dropFunction(dropID) {
  if(dropID=="text-size"){
    dropID=3;
  }
    document.getElementById("dropDown"+dropID).classList.toggle("show");
  }
  

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



function dropFunction4() {
    document.getElementById("dropDown4").classList.toggle("show2");
  }

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


  function boldSelection() {
    // if(document.getElementById('bold').style.backgroundColor!="gray"){
    //   document.getElementById('bold').style.backgroundColor="gray";
    // }else{
    //   document.getElementById('bold').style.backgroundColor="white";
    // }
    var span = document.createElement("span");
    span.style.fontWeight = "bold";
    span.style.color = "black";

    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }


}



  function italicFunction(){
    // if(document.getElementById('italic').style.backgroundColor!="gray"){
    //   document.getElementById('italic').style.backgroundColor="gray";
    // }else{
    //   document.getElementById('italic').style.backgroundColor="white";
    // }

      

    //   document.getElementById('normal').style.backgroundColor="white";

    var span = document.createElement("span");
    span.style.color = "black";
    span.style.fontStyle="italic";
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }


  }



function normalFunction(){
  // if(document.getElementById('normal').style.backgroundColor!="gray"){
  //   document.getElementById('normal').style.backgroundColor="gray";
    
  // }else{
  //   document.getElementById('normal').style.backgroundColor="white";
  // }
  var span = document.createElement("span");
  span.style.fontWeight = "400";
  span.style.color = "black";
  span.style.fontStyle="normal"
  
  if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(span);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }

}


function fontFunction(fontfam){

  var span = document.createElement("span");
  span.style.fontFamily=fontfam;
  
  if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(span);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }

}

// Could not recognize significance of Medium

function sizeFunction(fontsize){
  document.getElementById('text-size').innerText=fontsize;
  var span = document.createElement("span");
  var sizingMultiple = parseFloat(fontsize)*2;
  span.style.fontSize=sizingMultiple.toString()+"px";
  
  if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(span);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }

}



function colorFunction(fontcol){

  var span = document.createElement("span");

  span.style.color=fontcol;
  
  if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(span);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }

}

count=0
function highFunction(){

  var span = document.createElement("span");
  if(count%2==0){
    span.style.backgroundColor="yellow";
    count++
  }else{
    span.style.backgroundColor="white";
    count++
  }
  
  
  if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(span);
          sel.removeAllRanges();
          sel.addRange(range);
          
      }
  }

}


// Didnt get the next function


function alignFunction(align){

  var span = document.createElement("span");
  span.style.display='block';
  span.style.width="1000px";
  span.style.textAlign=align;
  
  if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(span);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }

}