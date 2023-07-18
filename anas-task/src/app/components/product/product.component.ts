import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component'
import { ProductService } from '../../services/product/product.service'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

constructor(public dialog: MatDialog, private ps: ProductService, private router : ActivatedRoute ,private route : Router) {
  this.id = this.router.snapshot.params['id']
}

  openDialog() {
  this.dialog.open(DialogComponent);
  }

  allProduct : any
  id:any

  ngOnInit(): void {
    this.getProductByCategoryActive()
  }

  getProductByCategoryActive(){
    this.ps.productByCategoryActive(this.id).subscribe((result: any)=>{
      this.allProduct = result
      console.log(result)
    })
  }
}

