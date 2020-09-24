import {RouterConfiguration} from 'aurelia-router';
import {autoinject} from 'aurelia-dependency-injection';
import {UsersService} from './users/services/users-service';
import {IdentityService} from './core/identity-service';
import {UserIdentityModel} from './users/models/user-identity-model';
import {RoutingAuthorizeStep} from './core/routing-authorize-step';

@autoinject()
export class App {

  constructor(private usersService: UsersService, private identityService: IdentityService) {}
  
  async activate() { 
    let userIdentity = await this.usersService.getUserIdentity();  

    if(!this.identityService.isUserLogged) {
      this.identityService.setUserIdentity(userIdentity);
    }
  }

  configureRouter(config: RouterConfiguration) {  
    let authorizeStep = new RoutingAuthorizeStep(this.identityService.userIdentity);

    config.title = 'Evento';
    config.addAuthorizeStep(authorizeStep);
    config.map([
      {route: ['', 'home'], moduleId: './home' },
      {route: 'users', moduleId: './users/config/users-routing' }, 
      {route: 'admins', moduleId: './admins/config/admins-routing', settings: { roles: ['admin']} },   
      {route: 'events', moduleId: './events/config/events-routing'}  
    ]);  
  }
}
