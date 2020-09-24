import {autoinject} from 'aurelia-dependency-injection';
import {observable} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {EventsService} from './events/services/events-service';
import {EventModel} from './events/models/event-model';
import * as toastr from 'toastr';

@autoinject()
export class HomeViewModel {

    private events: EventModel[];

    @observable
    private searchText: string;

    constructor(private eventsService: EventsService, private router: Router) {}

    async activate() {
        this.searchText = '';
        await this.browseEvents();
    }

    async browseEvents() {
        this.events = await this.eventsService.browse(this.searchText);
        if(this.events.length === 0)
            toastr.warning('No events found!');
    }

    redirectToEventDetails(eventId: string) {
        this.router.navigate(`#/events/${eventId}`);
    }

    private async searchTextChanged(){
        await this.browseEvents();
    }
}