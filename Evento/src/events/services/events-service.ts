import {autoinject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import {AuthService} from '../../core/auth-service';
import {DataService} from '../../core/data-service';
import {EventModel} from '../models/event-model';
import {CreateEventModel} from '../models/create-event-model';
import {UpdateEventModel} from '../models/update-event-model';
import {EventDetailsModel} from '../models/event-details-model';

@autoinject()
export class EventsService extends DataService{

    constructor(httpClient: HttpClient, authService: AuthService) {
        super(httpClient, authService);
    }

    browse(name: string) : Promise<EventModel[]> {
        let url = `events?name=${name}`;
        return super.get<EventModel[]>(url, false);
    }  

    getEvent(eventId: string) : Promise<EventDetailsModel> {
        let url = `events/${eventId}`;
        return super.get<EventDetailsModel>(url, true);
    }

    create(model: CreateEventModel) : Promise<any> {
        let url = 'events';
        return super.post<any>(url, model, true);
    }

    update(eventId: string, model: UpdateEventModel) : Promise<any> {
        let url = `events/${eventId}`;
        return super.put<any>(url, model, true);
    } 

    delete(eventId: string) : Promise<any> {
        let url = `events/${eventId}`;
        return super.delete(url, true);
    }
}