import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Graph3dService } from '../services/graph3d.service';

@Component({
  selector: 'app-card3-d',
  templateUrl: './card3-d.component.html',
  styleUrls: ['./card3-d.component.css']
})
export class Card3DComponent implements OnInit {
  @ViewChild('cnvs') cnvs: ElementRef;

  constructor(
    private graph3dSrv: Graph3dService,
  ) { }

  ngOnInit() {
    this.cnvs.nativeElement.width = window.innerWidth;
    this.cnvs.nativeElement.height = window.innerHeight;
    this.graph3dSrv.initSrv(this.cnvs.nativeElement);
    this.graph3dSrv.run();
  }

}
