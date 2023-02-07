class User {
    constructor(userdata) {
        this.titre = userdata["name.title"];
        this.nom = userdata["name.last"];
        this.prenom = userdata["name.first"];
        this.age = userdata["dob.age"];
        this.ville = userdata["location.city"];
        this.pays = userdata["location.country"];
        this.email = userdata["email"];
        this.photo = userdata["picture.large"];
        return this;
    }

    isUserConnect () {
        const statut = false;
    }
    
    display(contener) { 
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
 
        const childHTML = `
            <div class="user" data-present="false">
		        <img src="https://randomuser.me/api/portraits/women/37.jpg">
		        <div class="user--info">
				    <h1>${this.titre, this.nom, this.prenom}</h1>
				    <p>${this.age}</p>
				    <p>${this.ville, this.pays}</p>
		    </div>
		    <a href=${this.email}>
				<span class="mail">✉️</span>
		    </a>
            </div>
        `

        contener.insertAdjacentHTML("beforebegin", childHTML);
        
    }


}

export default User;