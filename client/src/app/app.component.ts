import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit{
  public title = 'MUSIFY';
  public user: User;
  public identity;
  public token;

  public errorMessage;


  constructor(
  		private _userService: UserService
  	){
  	this.user = new User('','','','','','ROLE_USER','');
  }

  ngOnInit()
  {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();    
  }

  public onSubmit(){
  	console.log(this.user);
    //conseguir los datos del usuario indetificado
    this._userService.signup(this.user).subscribe(
      response => {
        console.log(response);
        let identity = response.user;
        this.identity = identity;

        if(!this.identity._id){
          alert("El usuario no está correctamente identificado");
         }
         else{
          //crear elemento en el localstorage para mantener la sesión
          localStorage.setItem('identity', JSON.stringify(identity)); 

          //conseguir el token para enviarselo a cada peticion http

              this._userService.signup(this.user, 'true').subscribe(
              response => {
                console.log(response);
                let token = response.token;
                this.token = token;

                if(this.token.length<=0){
                  alert("El token no se ha generado");
                 }
                 else{
                  //crear elemento en el localstorage para tener el token disponible
                  localStorage.setItem('token', token); 
                  console.log(token);
                  console.log(identity);
                 }
              },
              error=>{
                var errorMessage = <any> error;
                if(errorMessage !=null)
                {
                  var body = JSON.parse(error._body);
                  this.errorMessage = body.message;
                  console.log(errorMessage);
                }
              }

              );
         }
      },
      error=>{
        var errorMessage = <any> error;
        if(errorMessage !=null)
        {
          var body = JSON.parse(error._body);
          this.errorMessage = body.message;
          console.log(errorMessage);
        }
      }

      );
  }

  logout()
  {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();

    this.identity = null;
    this.token = null;
  }

}
