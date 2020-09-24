import {autoinject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';
import {EventsService} from '../../events/services/events-service';
import {EventModel} from '../../events/models/event-model';
import * as toastr from 'toastr';

@autoinject()
export class AdminEventsViewModel {

    private events: EventModel[];

    constructor(private eventsService: EventsService, private router: Router) {
        this.events = [];    
    }

    async activate() {
        await this.getAdminEvents();
    }

    async deleteEvent(eventId: string, index: number) {
        let confirm = window.confirm('Do you want to remove this event?');
        if(!confirm) return;
        await this.eventsService.delete(eventId);
        this.removeEventFromEvents(index);
        toastr.success('Event deleted!');
    }

    redirectToAdminEventForm(eventId: string) {
        let url = eventId? `#/admins/events/${eventId}/update` : '#/admins/events/create';
        this.router.navigate(url);
    }

    private async getAdminEvents() {
        this.events = await this.eventsService.browse('');
    }    

    private removeEventFromEvents(index: number) {
        this.events.splice(index, 1);
    }
}