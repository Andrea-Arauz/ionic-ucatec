import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

argumento = null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
 this.argumento = this.activatedRoute.snapshot.paramMap.get('id')
  }

}
