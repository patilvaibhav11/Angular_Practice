import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService} from '../../services/category/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private cs: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getActiveCategory();
  }

  category : any
  categoryActive : any
  
  getAllCategory(){
    this.cs.categoryService().subscribe((result: any[])=>{
      this.category = result
      console.log(result)
    })
  }

  getActiveCategory(){
    this.cs.categoryStatusService().subscribe((result: any[])=>{
      this.categoryActive = result
      console.log(result)
    })
  }

  showProduct(id: number){
    console.log(id)
    this.router.navigate([`admin/products/${id}`])
  }

  getProducts(){

  }

}
