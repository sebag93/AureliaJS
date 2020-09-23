import {RouterConfiguration} from 'aurelia-router';

export class AdminsRouting {

    configureRouter(config: RouterConfiguration) {
        config.title = 'Admins';

        config.map([
            {route: 'events', moduleId: '../view-models/admin-events' }          
        ]);
    }
}