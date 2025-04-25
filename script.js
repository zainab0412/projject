document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name && email && message) {
        alert("Thank you, " + name + "! We will get back to you soon.");
        this.reset(); // Clear form
    } else {
        alert("Please fill out all fields.");
    }
});
document.querySelector('.Home').addEventListener('click',()=>{
    document.querySelector('.Home').scrollIntoView({behavior:'smooth'});
});
function showSection(sectionId){
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    } );
    document.getElementById(sectionId).classList.remove("hidden");
}
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
        let sectionId=this.getAttribute("href").substring(1);
        showSection(sectionId);
    });
});
