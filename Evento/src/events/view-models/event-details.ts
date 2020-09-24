import {autoinject} from 'aurelia-dependency-injection';
import {EventsService} from '../services/events-service';
import {EventTicketsService} from '../services/event-tickets-service';
import {EventDetailsModel} from '../models/event-details-model';
import * as toastr from 'toastr';

@autoinject()
export class EventDetailsViewModel {

    private eventId: string;
    private event: EventDetailsModel;
    private ticketsAmount: number;
    private ticketsBanner: any;

    get ticketsPrice() {
        if(this.event.tickets.length === 0) return;
        return this.event.tickets[0].price;
    }

    constructor(private eventsService: EventsService, 
        private eventTicketsService: EventTicketsService) {}

    async activate(params: any) {
        this.eventId = params.id;
        await this.getEventDetails();
    }

    async purchaseTicket() {
        let confirm = window.confirm('Do you want to buy tickets?')
        if(!confirm) return;
        await this.eventTicketsService.purchase(this.eventId, this.ticketsAmount);
        this.event.availableTicketsCount -= this.ticketsAmount;
        this.ticketsAmount = 0;
        this.setTicketsBanner();
        toastr.success('You bought tickets!');
    }

    private async getEventDetails() {
        this.event = await this.eventsService.getEvent(this.eventId);
        this.setTicketsBanner();
    }

    private setTicketsBanner() {
        let availableTicketsPercentage = 
            Math.round((100 * this.event.availableTicketsCount) / this.event.ticketsCount);

        if(availableTicketsPercentage > 50)
            this.ticketsBanner = {class: 'alert alert-success'};
        else if(availableTicketsPercentage > 25)
            this.ticketsBanner = {class: 'alert alert-warning'};
        else
            this.ticketsBanner = {class: 'alert alert-danger'};

        this.ticketsBanner.text = `This event has ${availableTicketsPercentage}% tickets available!`;
    }
}