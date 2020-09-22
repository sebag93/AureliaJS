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

interface IPdfGenerator{
    generate(): void;
}

class PdfGenerator implements IPdfGenerator{
    generate(): void{
        //validate data
        //generate pdf file
        //save pdf file
    }
}

class PdfGeneratorMock implements IPdfGenerator{
    generate(): void{
        //validate data
        //generate pdf file
    }
}

class PdfSerciveTests {
    test(): void{
        let pdfService = new PdfService(new PdfGeneratorMock);
        pdfService.generatePdf(); 
    }
}

class PdfService{
    constructor(private pdfGenerator: IPdfGenerator){

    }

    generatePdf(): void{
        this.pdfGenerator.generate();
    }
}