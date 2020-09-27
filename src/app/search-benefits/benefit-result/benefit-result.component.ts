import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefit-result',
  templateUrl: './benefit-result.component.html',
  styleUrls: ['./benefit-result.component.css']
})
export class BenefitResultComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() expirationDate: Date;
  @Input() imageUrl: string;
  @Input() price: string;
  @Input() link: string;
  @Input() company: string;
  @Input() location: string;
  @Input() source: number;
  

  constructor() { }

  ngOnInit(): void {
  }

  getSource() : String {
    console.log(this.source);
    let sourceName = "";

    switch(this.source)
    {
      case 1:
        sourceName = 'ארגון המורים';
    }
    return `ניתן על ידי ${sourceName}`;
  }


}