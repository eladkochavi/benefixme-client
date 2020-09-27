import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  Sources: any = ['ארגון המורים', 'חבר', 'ישראכרט', 'בהצדעה']

  ngOnInit() {
   
  }
  changeSelection($event)
  {
    console.log($event);
  }
}
