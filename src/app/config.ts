class Config{
    static apiMainUrl(){
        return "http://"
    }

    static userId(){
        return sessionStorage.getItem("id")
    }
    static userEmail(){
        return sessionStorage.getItem("email")
    }
    static userName(){
        return sessionStorage.getItem("first_name")
    }

    static clearDetails(){
        return sessionStorage.clear();
    } 

    static userAuthenticated():boolean{
        return sessionStorage.getItem("id")!==null
    }

    static saveUser(response:any){
        return sessionStorage.setItem("first_name",response['first_name'])
        return sessionStorage.setItem("email",response['email'])
        return sessionStorage.setItem("id",response['id'])
    }



}


export {Config}