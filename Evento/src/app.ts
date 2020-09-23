import {RouterConfiguration} from 'aurelia-router';
import {UsersService} from './users/services/users-service';
import {IdentityService} from './core/identity-service';
import { autoinject } from "aurelia-dependency-injection";

@autoinject()
export class App {
  constructor (private identityService: IdentityService, private usersService: UsersService){

  }
  
  async activate(){
    let userIdentity = await this.usersService.getUserIdentity();
    if(!this.identityService.isUserLogged){
      this.identityService.setUserIdentity(userIdentity);
    }
  }

  configureRouter(config: RouterConfiguration){
    config.title = 'Evento';
    config.map([
      {route: ['', 'home'], moduleId: './home'},
      {route: 'users', moduleId: './users/config/users-routing'}
    ]);
  }
}
