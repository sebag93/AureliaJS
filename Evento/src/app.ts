import {RouterConfiguration} from 'aurelia-router';

export class App {
  configureRouter(config: RouterConfiguration){
    config.title = 'Evento';
    config.map([
      {route: ['', 'home'], moduleId: './home'},
      {route: 'users/register', moduleId: './users/view-models/register'}
    ]);
  }
}
