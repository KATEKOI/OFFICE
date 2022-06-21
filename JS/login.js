document.getElementById("login").onclick = function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    //invoke firebase
    // if user is logged in
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
        alert("user signed in")

        let user = userCredential.user
        console.log(user.uid)
        firebase.firestore().collection("users").doc(user.uid).get().then((doc)=>{
            let userType = doc.data().userType
    
            if (userType == "admin"){
                window.location.href = "/dashboard.html"
            }else if(userType == "hr") {
                window.location.href = "/dashboard.html"
            }else if(userType == "finance"){
                window.location.href = "/dashboard.html"
            }else{
                window.location.href = "/dashboard.html"
            }
        })
    }).catch((error) => {
        console.log(error.message);
    })
}
// document.getElementById("submit").onclick = function(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
// firebase.auth().signInWithEmailAndPassword(email,password).then((userCredential) =>
// {//signed in
    
//     // var user = userCredential.user;
//     let user = userCredential.user
//     alert(user.uid)
//     //...       

//     firebase.firestore().collection("users").doc(user.uid).get().then((doc)=>{
//         let usertype = doc.data().usertype

//         if (usertype == "admin"){
//             window.location.href = "/admindashboard.html"
//         }else if(usertype == "admin") {
//             window.location.href = "/teacherdashboard.html"
//         }else{
//             window.location.href = "/studentdashboard.html"
//         }
//     })
// })
// .catch ((error) => {
//     console.log(errorMessage)
//     //...
// })
// }