import { Component, Input, OnDestroy, OnInit } from '@angular/core';




@Component({
  selector: 'state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.scss']
})
export class StateTableComponent  implements OnInit{
  displayedColumns: string[] = ['alpha_two_code', 'country', 'domains', 'name', 'state', 'web_pages'];
  @Input() dataSource: any;

  constructor() {
    

  }
  ngOnInit(): void {
    console.log(this.dataSource);
  }
}
