let string = "";
let buttons = document.querySelectorAll(".container button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText == "=") {
            try {
                string = eval(string).toString();  
                document.querySelector(".input").value = string;
                string = ""; 
            } catch (error) {
                document.querySelector(".input").value = "Error";
                string = ""; // Reset the string in case of an error
            }
        } else if (buttonText == "Clear") {
            string = ""; 
            document.querySelector(".input").value = "";
            string="";
        } else {
            string += buttonText;
            document.querySelector(".input").value = string;
        }

        console.log(e.target);
    });
});
