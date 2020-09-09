import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';



@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[] = [];
  foodArray: any[] = [];
  alltable: any[] = [];
  selected =false
  tableorder: any;
  receiptno: any;
  payarr: any[] = [];
  payprice: number;
  constructor(private readonly foodService: FoodService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods() {
    this.foodService.getFoodlist().subscribe((result) => {
      console.log(result);
      this.foods = result;

    });
  }
  getTablelist() {
    this.foodService.getTable().subscribe((result) => {
      console.log(result);
      this.alltable = result;

    });
  }
  foodOrder(order){
    console.log(order);
    order["count"] = 1;
    this.foodArray.push(order);
    console.log(this.foodArray);
   }

   increment(order){
    order.count++;
  }

  decrement(order){
    order.count--;
  }
  tabledata(table){
    this.selected = !this.selected;
    this.tableorder = table;
  }

  confirmorder(){
    console.log(Math.random());
    let no=Math.random()* 10000000000000000000
    this.tableorder['receipt_no']=no
    this.receiptno=no
    for (const food of this.foodArray){
      this.tableorder['order'].push(food)
    }
    console.log(this.tableorder)
    this.foodService.updateTable(this.tableorder).subscribe((result) => {
      console.log(result);
      this.foodArray = result.order;

    });
  }

  pay(){
    this.foodService.getTableBypay(this.receiptno).subscribe((result) => {
      console.log(result);
      this.payarr = result;
      console.log(this.payarr);
      let total_price=0
      for( const data of this.payarr[0]["order"]){
        total_price= total_price + data.price* data.count
      }
      console.log(total_price);
      this.payprice = total_price
    });
    this.close()
  }

  payDone(){
    this.tableorder['order']=[]
    this.foodService.updateTable(this.tableorder).subscribe((result) => {
      console.log(result);
      // this.payarr = result;
    });
  }

   close(){
     this.receiptno=''
     this.foodArray = []
   }
}


