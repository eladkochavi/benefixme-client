import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Benefit } from '../core/Benefit';

@Injectable()
export class BenefitService {
    benefits: any;

    constructor(private http: HttpClient){
        
    }
    public async  getBenefits(searchKey: string, sources: number[]) : Promise<Benefit[]>{
        let url = `https://localhost:44386/api/v1/Benefits/${searchKey}`;

        if(sources)
        {
            let sourceparams = sources.concat();
            url+=`?sources=$${sourceparams}`;
        }

        var benefits = await this.http.get<Benefit[]>(`https://localhost:44386/api/v1/Benefits/${searchKey}`).toPromise();
        return benefits;
    }
}