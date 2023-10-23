import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  div=false
  
scroll(id:string) {

  console.log(`scrolling to ${id}`);
  let el = document.getElementById(id);
  el?.scrollIntoView({behavior: 'smooth'});
}
}
