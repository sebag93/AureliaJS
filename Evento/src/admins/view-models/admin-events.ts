import {autoinject} from 'aurelia-dependency-injection';
import {EventsService} from '../../events/services/events-service';
import {EventModel} from '../../events/models/event-model';

@autoinject()
export class AdminEventsViewModel {
    private events: EventModel[];

    constructor(private eventsService: EventsService){
        this.events = [];
        this.getAdminEvents();
    }

    private async getAdminEvents(){
        this.events = await this.eventsService.browse('');
    }
}