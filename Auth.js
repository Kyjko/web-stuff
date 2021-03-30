class Auth {
    constructor() {
        this.authed = false;
        this.message = ""
    }

    login(username, password) {
        fetch(`/login?username=${username}&password=${password}`).then(res => res.json())
        .then(data => {
            if(data.message === "success") {
                this.authed = true;
                this.message = data.detail[0].username;
            } else {
                this.authed = false;
                this.message = data.message;
                
            }
        })
    }

    logout() {
        this.authed = false;
    }
}

export default new Auth();
