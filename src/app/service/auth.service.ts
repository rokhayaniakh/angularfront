import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    jwt: string;
    roles: Array<string>;
    username: string;
    id;

    private headers={headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};
    private _loginUrl = "http://localhost:8000/api/login_check";
    constructor(private http: HttpClient) {
    }
    loginUser(user) {
        return this.http.post<any>(this._loginUrl, user,{observe:'response'})
    }

    registerUser(User) {
        const endpoint = 'http://localhost:8000/api/user';
        const formData: FormData = new FormData();
        formData.append('username', User.username);
        formData.append('password', User.password);
        formData.append('roles', User.roles);
        formData.append('nomcomplet', User.nomcomplet);
        formData.append('mail', User.mail);
        formData.append('telephone', User.tel);
        formData.append('adresse', User.adresse);
        formData.append('status', User.status);
        formData.append('imageName', User.imageName);

        return this.http.post(endpoint, formData,this.headers);
    }
    UserSuperAdmin(UserSuper) {
        const endpoint = 'http://localhost:8000/api/ajoutcaissier';
        const formData: FormData = new FormData();
        formData.append('username', UserSuper.username);
        formData.append('password', UserSuper.password);
        formData.append('roles', UserSuper.roles);
        formData.append('nomcomplet', UserSuper.nomcomplet);
        formData.append('mail', UserSuper.mail);
        formData.append('telephone', UserSuper.tel);
        formData.append('adresse', UserSuper.adresse);
        formData.append('status', UserSuper.status);
        formData.append('imageName', UserSuper.imageName);

        return this.http.post(endpoint, formData,this.headers);
    }


    partenaire(Partenaire) {
        const endpoint = 'http://localhost:8000/partenaire';
        const formData: FormData = new FormData();
        formData.append('rs',Partenaire.rs );
        formData.append('ninea', Partenaire.ninea);
        formData.append('adresse',Partenaire.adresse);
        formData.append('status', Partenaire.status); 
        formData.append('username', Partenaire.username);
        formData.append('password', Partenaire.password);
        formData.append('nomcomplet', Partenaire.nomcomplet);  
        formData.append('mail', Partenaire.mail);
        formData.append('tel', Partenaire.tel);
        formData.append('adress',Partenaire.adresse);
        formData.append('statu', Partenaire.status);

        return this.http.post(endpoint, formData,this.headers);
    }

    depot(Depot) {
        const endpoint = 'http://localhost:8000/api/depot';
        const formData: FormData = new FormData();
        formData.append('montant',Depot.montant );
        formData.append('numbcompte', Depot.numbcompte);
        return this.http.post(endpoint, formData,this.headers);
    }
    comptuser(Comptuser) {
        const endpoint = 'http://localhost:8000/api/ajoutcompteuser';
        const formData: FormData = new FormData();
        formData.append('username',Comptuser.username );
        formData.append('idcompte', Comptuser.idcompte);
        return this.http.post(endpoint, formData,this.headers);
    }

    comptpart(Comptpart) {
        const endpoint = 'http://localhost:8000/ajoutcompte';
        const formData: FormData = new FormData();
        formData.append('username',Comptpart.idpartenaire );
        return this.http.post(endpoint, formData,this.headers);
    }
    Transaction(Trans) {
        const endpoint = 'http://localhost:8000/trans';
        const formData: FormData = new FormData();
        // formData.append('iduser',Trans.iduser);
        formData.append('idtype',Trans.idtype);
        formData.append('agence',Trans.agence);
        formData.append('somme', Trans.somme); 
        formData.append('nomcomplet', Trans.nomcomplet);
        formData.append('nomcompletben', Trans.nomcompletben);
        formData.append('tel', Trans.tel); 
        formData.append('tele', Trans.tele);  
        // formData.append('numbcompte', Trans.numbcompte);
        return this.http.post(endpoint, formData,this.headers);
    }

    loggedIn() {
        return !!localStorage.getItem('token')
    }
    logoutUser() {
        localStorage.removeItem('token')

    }
    getToken(): string {
        return localStorage.getItem('token');
    }
saveToken(jwt :string){
    localStorage.setItem('token',jwt['token']);
    this.jwt=jwt['token'];
    this.parseJWT();
}
parseJWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.username;
    this.roles = objJWT.roles;
    this.id = objJWT.id;
    console.log(this.id);

    
}


    isAdmin() {
        return this.roles.indexOf('ROLE_ADMIN') >= 0;

    }
    isSuperAdmin() {
        return this.roles.indexOf('ROLE_SUPER_ADMIN') >= 0;

    }
    isUser() {
        return this.roles.indexOf('ROLE_USER') >= 0;
    }
    isCaissier() {
        return this.roles.indexOf('ROLE_CAISSIER') >= 0;
    }
    isAuthentificated() {
        return this.roles 
    }
    loadToken(){
        this.jwt = localStorage.getItem('token');
        this.parseJWT();
    }
}




