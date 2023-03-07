import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './service/httpService';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'api-response-app-client';
  displayedColumns: string[] = ['alpha_two_code', 'country', 'domains', 'name', 'state', 'web_pages'];
  dataSource: any;

  constructor(private httpService: HttpService) {
    

  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.populateTable();
  }

  populateTable() {
    this.httpService.getAPI()
    .subscribe(
      (response) => {   
        console.log(response);  
        this.dataSource = response;                      
        console.log('response received')
      },
      (error) => {                              
        console.error('Request failed with error')
      },
      () => {                                   
        console.error('Request completed')      
      }
  )
}
}
