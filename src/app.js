import User from "./User.js";

const contener = document.querySelector(".affichage");

async function getUser () {
    let res;
    try {
        res = await fetch(`https://randomuser.me/api/?results=20`);
        
    } catch (err) {
        console.error(err.message);  
    }
    const data = await res.json();
    return data;
}

async function getCleanData () {
    const data = await getUser();
    data["results"].forEach((user) => {
        new User(user).display(contener);   
    });
    
}

console.log(getCleanData());

//console.log(getUser());