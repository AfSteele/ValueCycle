
//sidebar for nav menu
function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none'
}


//mary infographic
var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal
        var img = document.getElementById("maryImg");
        var modalImg = modal.querySelector(".mary-image");

        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }

        // Get the <span> element that closes the modal
        var span = modal.querySelector(".close");

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }