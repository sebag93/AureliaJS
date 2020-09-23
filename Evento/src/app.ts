import { RouterConfiguration } from 'aurelia-router';
import { UsersService } from './users/services/users-service';
import { IdentityService } from './core/identity-service';
import { autoinject } from "aurelia-dependency-injection";
import { RoutingAuthorizeStep } from './core/routing-authorize-step';
import { UserIdentityModel } from './users/models/user-identity-model';

@autoinject()
export class App {

  private userIdentity: UserIdentityModel;
  private isUserLogged: boolean;

  constructor(private usersService: UsersService, private identityService: IdentityService) { }

  async activate() {
    this.userIdentity = await this.usersService.getUserIdentity();

    if (this.userIdentity) {
      this.identityService.setUserIdentity(this.userIdentity);
    }
  }

  configureRouter(config: RouterConfiguration) {
    let authorizeStep = new RoutingAuthorizeStep(this.userIdentity);

    config.title = 'Evento';

    config.addAuthorizeStep(authorizeStep);

    config.map([
      { route: ['', 'home'], moduleId: './home' },
      { route: 'users', moduleId: './users/config/users-routing' },
      { route: 'admins', moduleId: './admins/config/admins-routing', settings: { roles: ['user'] } }
    ]);
  }
}
