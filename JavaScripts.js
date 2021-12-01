var imgsIndex = 0;
showSlides();

function showSlides() {
  var i;
  var imgs = document.getElementsByClassName("imgs");
  var dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";  
  }
  imgsIndex++;
  if (imgsIndex > imgs.length) {imgsIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  imgs[imgsIndex-1].style.display = "block";
  dots[imgsIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function pop() {
    document.getElementById("popup").style.display = "block";
}

function unpop() {
    document.getElementById("popup").style.display = "none";
}

function pop1() {
  document.getElementById("popup1").style.display = "block";
}

function unpop1() {
  document.getElementById("popup1").style.display = "none";
}

function pop2() {
  document.getElementById("popup2").style.display = "block";
}

function unpop2() {
  document.getElementById("popup2").style.display = "none";
}

function ShowAdvice(){
    document.getElementById('FeedForm').reset()
    document.getElementById("Ftitle").setAttribute('value','An Advice')
    document.getElementById("a").style.visibility = "hidden"
    document.getElementById("Fadvice").checked = true
    document.getElementById('Ftitle').readOnly = true
    }

function ShowComplaint(){
    document.getElementById("FeedForm").reset();
    document.getElementById("Ftitle").setAttribute('value','A Complaint')
    document.getElementById("a").style.visibility = "hidden"
    document.getElementById("Fcomplaint").checked = true
    document.getElementById('Ftitle').readOnly = true
    }

function ShowReview(){
    document.getElementById("FeedForm").reset();
    document.getElementById("Ftitle").setAttribute('value','A Review')
    document.getElementById("a").style.visibility = "visible"
    document.getElementById("Freview").checked = true
    document.getElementById('Ftitle').readOnly = true
    }

        
function ShowOthers(){
    document.getElementById("Ftitle").setAttribute('value','')
    document.getElementById("a").style.visibility = "hidden"
    document.getElementById('Ftitle').readOnly = false
    }

    function changeFunc() {
      var selectBox = document.getElementById("service");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      if ( selectedValue == "deliver"){
        document.getElementById("delivering").style.display ="inline-block";
        document.getElementById("shs").style.display ="none";
      }
      if ( selectedValue == "shs"){
        document.getElementById("delivering").style.display ="none";
        document.getElementById("shs").style.display ="inline-block";
      }
     }
