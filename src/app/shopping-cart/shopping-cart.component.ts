import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from '../item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() Usercart: Item[] = [];

  total: number = 0;

  constructor(
    private location: Location,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.getCart()
    this.getTotal()
  }

  getTotal(): void {
    this.total = this.shoppingCartService.getTotal()
  }

  getCart(): void {
    this.Usercart = this.shoppingCartService.getCart()
  }

  removeItem(item: Item): void {
    this.shoppingCartService.removeFromCart(item)
    this.getCart()
    this.getTotal()
  }

  return(): void {
    this.location.back();
  }
}