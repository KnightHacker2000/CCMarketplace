import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tab1 = true;
  tab2 = false;
  tab3 = false;
  tab4 = false;
  constructor() { }

  ngOnInit(): void {
  }
  check(event:any){
    console.log(event.srcElement.id);
    switch(event.srcElement.id) { 
    case "tab1": { 
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      break;
    } 
    case "tab2": { 
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
      break;
    } 
    case "tab3": { 
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
      break;
    } 
    case "tab4": { 
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
      break;
    } 

} 
  }
  

}
