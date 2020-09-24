import {UpdateEventModel} from './update-event-model';

export class CreateEventModel extends UpdateEventModel {
    startDate: Date;
    endDate: Date;
    tickets: number;
    price: number;
}