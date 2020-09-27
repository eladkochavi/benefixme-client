import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefit-result-list',
  templateUrl: './benefit-result-list.component.html',
  styleUrls: ['./benefit-result-list.component.css']
})
export class BenefitResultListComponent implements OnInit {

  benefits:any[] =  [
    {
      title: "2 פיצות משפחתיות - פיצה האט (איסוף עצמי/משלוח)",
      description: null,
      expirationDate: "2020-12-31T00:00:00",
      imageUrl: "https://cdn-camp.mini-sites.net/Publish/d740af0f10e643b091b21f6bfbcf53a8/c3a180d4b9ce4e8286849e0067fec0e7/src/contents/90055636907a438b9b1b7c487799b0ea_irgun_m.png",
      price: "75ש\"ח",
      link: "https://www.igm.org.il/org/home_page.aspx?page=theatre_shovar_ProdDesc%2C294925&p2=13",
      company: "סניפי פיצה האט",
      location: "כל הארץ",
      benefitSource: 1
    },
    {
      title: "דומינו'ס פיצה - משפחתית + נלווה (אצבעות מוצרלה / לחם שום)",
      expirationDate: "2020-12-31T00:00:00",
      description: null,
      imageUrl: "https://cdn-camp.mini-sites.net/Publish/d740af0f10e643b091b21f6bfbcf53a8/c3a180d4b9ce4e8286849e0067fec0e7/src/contents/90055636907a438b9b1b7c487799b0ea_irgun_m.png",
      price: "55ש\"ח",
      link: "https://www.igm.org.il/org/home_page.aspx?page=theatre_shovar_ProdDesc%2C292810&p2=13",
      company: "רשת פיצה דומינוס",
      location: "כל הארץ",
      benefitSource: 1
    },
    {
      title: "דומינו'ס פיצה -2 פיצות משפחתיות + אצבעות מוצרלה / לחם שום",
      description: null,
      expirationDate: "2020-12-31T00:00:00",
      imageUrl: "https://cdn-camp.mini-sites.net/Publish/d740af0f10e643b091b21f6bfbcf53a8/c3a180d4b9ce4e8286849e0067fec0e7/src/contents/90055636907a438b9b1b7c487799b0ea_irgun_m.png",
      price: "95ש\"ח",
      link: "https://www.igm.org.il/org/home_page.aspx?page=theatre_shovar_ProdDesc%2C300598&p2=13",
      company: "רשת פיצה דומינוס",
      location: "כל הארץ",
      benefitSource: 1
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
