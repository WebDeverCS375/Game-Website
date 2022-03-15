const image_input = document.querySelector("#image_input"); //get image input
var uploaded_image = "";

image_input.addEventListener("change", function () {
  const reader = new FileReader(); //use file reader object to read file
  reader.addEventListener("load", () => //add event listener load
  {
    uploaded_image = reader.result; //set global variable to uploaded file in reader
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`; //set display_image element to uploaded image
  });
  reader.readAsDataURL(this.files[0]);
});



// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.cat')) {
    var dropdowns = document.getElementsByClassName("category-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById('cat_button').onclick = () => {
  document.getElementById("category").classList.toggle("show");
}