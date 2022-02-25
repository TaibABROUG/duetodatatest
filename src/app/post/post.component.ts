import { Component, OnInit } from '@angular/core';
import * as data1 from '../../assets/json/TF1-2021-06-29.json'
import * as data2 from '../../assets/json/TF1-2021-06-30.json'
import * as data3 from '../../assets/json/TF1-2021-07-01.json'
import * as data4 from '../../assets/json/TF1-2021-07-02.json'
import * as data5 from '../../assets/json/TF1-2021-07-03.json'
import * as data6 from '../../assets/json/TF1-2021-07-04.json'
import * as data7 from '../../assets/json/TF1-2021-07-05.json'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts=  [...data1[0].posts,...data2[0].posts,...data3[0].posts,...data4[0].posts,...data5[0].posts,...data6[0].posts,...data7[0].posts] ;
  displayedColumns: string[] = ['post', 'date', 'nb comment'];
  constructor() { }

  ngOnInit(): void {

  }

}
