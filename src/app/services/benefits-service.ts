import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Benefit } from '../core/Benefit';
import { getBenefitResponse } from '../core/getBenefitResponse';

@Injectable()
export class BenefitService implements OnDestroy{
    benefits: Benefit[];
    benefitsChanged = new BehaviorSubject<Benefit[]>([]);
    isLoading = new BehaviorSubject<Boolean>(false);
    isSearched = new BehaviorSubject<Boolean>(false);
    subscriber : Subscription;
    constructor(private http: HttpClient){
        this.benefitsChanged = new BehaviorSubject<Benefit[]>(this.benefits);
        this.isLoading = new BehaviorSubject<Boolean>(false);
        this.isSearched = new BehaviorSubject<Boolean>(false);
    }

    ngOnDestroy(): void {
        if (!!this.subscriber) 
            this.subscriber.unsubscribe();
    }

    public loadBenefits(searchKey: string, sources: number[]) : void {
        this.isLoading.next(true);
        let url = `https://localhost:44386/api/v1/Benefits/${searchKey}`;

        if(sources)
        {
            let sourceparams = sources.concat();
            url+=`?sources=${sourceparams}`;
        }
                
        this.subscriber = this.http.get<getBenefitResponse>(url).subscribe(res=> {
            console.log(res);
            this.benefits = res.benefits
            this.benefitsChanged.next(this.benefits);
            this.isLoading.next(false);
            this.isSearched.next(true);
    
        });

        console.log(this.benefits);
    }
}