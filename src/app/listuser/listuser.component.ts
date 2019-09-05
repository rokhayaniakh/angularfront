import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../service/partenaire.service';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  listuser = []

  constructor(private listeruser:PartenaireService) { }

  ngOnInit() {
    this.  listeruser.listpart()
    .subscribe(
      res => this. listuser = res,
      err => console.log(err)
    )
  }
  }


