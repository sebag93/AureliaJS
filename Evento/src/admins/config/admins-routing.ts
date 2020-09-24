import {RouterConfiguration} from 'aurelia-router';

export class AdminsRouting {

    configureRouter(config: RouterConfiguration) {
        config.title = 'Admins';

        config.map([
            {route: 'events', moduleId: '../view-models/admin-events' },
            {route: ['events/create', 'events/:id/update'] , moduleId: '../view-models/admin-event-form'}            
        ]);
    }
}