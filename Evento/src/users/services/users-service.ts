import { HttpClient } from 'aurelia-fetch-client';
import { DataService } from '../../core/data-service';
import { UserRegisterModel } from '../models/user-register-model';

export interface IUserService {
    register(model: UserRegisterModel) : Promise<any>;
}

export class UsersService extends DataService  implements IUserService{

    constructor(){
        super(new HttpClient())
    }
    
    register(model: UserRegisterModel): Promise<any> {
        let url = 'account/register';
        return super.post<any>(url,model);
    }

}