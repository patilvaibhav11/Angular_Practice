import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'Flipkart';
  
  component: { filter: string; }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.component.filter = filterValue.trim().toLowerCase();
  }
}
