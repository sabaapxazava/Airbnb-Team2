import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../shared-services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loadingStatus: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
      this.loadingService.loadingEmitter.subscribe((response) => {
        this.loadingStatus = response;
      });
  }

}
