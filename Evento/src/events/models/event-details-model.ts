import {EventModel} from './event-model';
import {EventTicketModel} from './event-ticket-model';

export class EventDetailsModel extends EventModel {
    tickets: EventTicketModel[];
}