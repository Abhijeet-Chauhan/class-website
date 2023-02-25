function Batch(batchName) {
    var i;
    var x = document.getElementsByClassName("batch");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(batchName).style.display = "block";
      
  }