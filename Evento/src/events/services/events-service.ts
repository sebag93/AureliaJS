import {DataService} from '../../core/data-service';
import {autoinject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import {AuthService} from '../../core/auth-service';
import {EventModel} from '../models/event-model';

@autoinject()
export class EventsService extends DataService {
    constructor(httpClient: HttpClient, authService: AuthService){
        super(httpClient, authService);
    }

    browse(name: string) : Promise<EventModel[]>{
        let url = `events?name=${name}`;
        return super.get<EventModel[]>(url,false);
    }
}