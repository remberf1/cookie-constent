document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.querySelector(".wrapper");
    const buttons = document.querySelectorAll(".button");
    const closeIcon = document.getElementById('close-icon');

    // Function to show the cookie box
    const executeCodes = () => {
        if(document.cookie.includes("Pookie")) return;
      cookieBox.classList.add("show");
    };

    const acceptCookie = (button)=>{
        button.addEventListener('click',()=>{
            cookieBox.classList.remove("show")

            document.cookie= "cookieBy= Pookie; max-age="+ 60 * 60 * 24*30;
        })
    }
    buttons.forEach((button)=>{
        acceptCookie(button)
    });

    // Trigger the display of the cookie box when the page is loaded
    window.addEventListener("load", executeCodes);
    
    // Close the cookie box when close icon is clicked
    closeIcon.addEventListener("click", function() {
      cookieBox.style.display = 'none';  // Hide the cookie box
    });

    // Console logging elements for debugging
    console.log(cookieBox, button);
  });