import {autoinject} from 'aurelia-dependency-injection';
import { UserRegisterModel } from '../models/user-register-model';
import { HttpClient } from 'aurelia-fetch-client';
import { IUserService, UsersService} from '../services/users-service';
import { RegisterViewValidator} from '../validators/register-view-validator';
import { ValidationControllerFactory, ValidationController} from 'aurelia-validation';


@autoinject()
export class UsersRegisterViewModel {
    private validationController: ValidationController;
    private model: UserRegisterModel;

    constructor(private usersService: UsersService, validator: RegisterViewValidator, 
        validationControllerFactory: ValidationControllerFactory) {
        this.model = new UserRegisterModel();
        this.validationController = validationControllerFactory.createForCurrentScope();
        validator.validate(this.model);
    }

    async register(){
        await this.usersService.register(this.model);
    }
}