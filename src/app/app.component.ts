import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FabModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule, ListViewComponent } from '@syncfusion/ej2-angular-lists';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FabModule, ListViewModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('listObj') public listObject: ListViewComponent | any;
  title = 'example';
  public data = [
    { text: 'Andrew', id: 'list-01' },
    { text: 'Margaret', id: 'list-03' },
    { text: 'Jenifer', id: 'list-02' },
    { text: 'Nancy', id: 'list-04' },
    { text: 'Steven', id: 'list-05' },
    { text: 'Michael', id: 'list-06' },
    { text: 'Janet', id: 'list-07' },
    { text: 'Laura', id: 'list-08' },
    { text: 'Anne', id: 'list-09' },
    { text: 'John', id: 'list-10' },
  ];
  onClick()
  {
    const newItem = [{ text: 'Robert', id: 'list-11'}];
    this.listObject.addItem(newItem);
  }
}
