import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../service/partenaire.service';

@Component({
  selector: 'app-listpart',
  templateUrl: './listpart.component.html',
  styleUrls: ['./listpart.component.scss']
})
export class ListpartComponent implements OnInit {
listp = []
  constructor(private listpart:PartenaireService) { }

  ngOnInit() {
    this. listpart.listpart()
    .subscribe(
      res => this.listp = res,
      err => console.log(err)
    )
  }
}
