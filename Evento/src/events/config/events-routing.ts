import {RouterConfiguration} from 'aurelia-router';

export class EventsRouting {
    configureRouter(config: RouterConfiguration) {
        config.title = 'Events';
        config.map([
            {route: ':id', moduleId: '../view-models/event-details'}
        ]);
    }
}