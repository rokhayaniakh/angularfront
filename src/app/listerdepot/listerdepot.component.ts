import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../service/partenaire.service';


@Component({
  selector: 'app-listerdepot',
  templateUrl: './listerdepot.component.html',
  styleUrls: ['./listerdepot.component.scss']
})
export class ListerdepotComponent implements OnInit {
  listdepot = []

  constructor(private listerdepot:PartenaireService) { }

  ngOnInit() {
    this. listerdepot.listerdepot()
    .subscribe(
      res => this.listdepot = res,
      err => console.log(err)
    )
  }


}
