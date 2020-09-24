import {autoinject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';
import {EventsService} from '../../events/services/events-service';
import {CreateEventModel} from '../../events/models/create-event-model';
import {UpdateEventModel} from '../../events/models/update-event-model';
import * as toastr from 'toastr';

@autoinject()
export class AdminEventFormViewModel {

    private eventToUpdateId: string;
    private isCreateMode: boolean;
    private model: CreateEventModel | UpdateEventModel;

    constructor(private eventsService: EventsService, private router: Router) {}

    async activate(params: any) {
        this.eventToUpdateId = params.id;
        this.isCreateMode = this.eventToUpdateId? false : true;
        this.isCreateMode? this.setCreateMode() : await this.setEditMode();
    }

    async createEvent() {
        await this.eventsService.create(<CreateEventModel> this.model);
        this.redirectToAdminEvents();
        toastr.success('Event created!');
    }

    async editEvent() {
        await this.eventsService.update(this.eventToUpdateId, <UpdateEventModel> this.model);
        this.redirectToAdminEvents();
        toastr.success('Event edited!');
    }

    redirectToAdminEvents() {
        this.router.navigate('#/admins/events');
    }

    private setCreateMode() {
        this.model = new CreateEventModel();
    }

    private async setEditMode() {
        let eventToUpdate = await this.eventsService.getEvent(this.eventToUpdateId);
        
        let updateModel: UpdateEventModel = {
            name: eventToUpdate.name,
            description: eventToUpdate.description
        };

        this.model = updateModel;
    }
}