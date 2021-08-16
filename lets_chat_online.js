function Adduser() {
    user_name=document.getElementById("User_name").value;
    localStorage.setItem("Username",user_name);
    window.location="lets_chat_online.html";
}