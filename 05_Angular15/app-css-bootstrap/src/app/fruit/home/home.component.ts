import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fruitService: FruitService){}

  allFruits: Fruit[] = []

  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data) => {
      this.allFruits = data;
    })
  }

  deleteItem(id: number) {
    this.fruitService.delete(id).subscribe({
      next: (res) => {
        this.allFruits = this.allFruits.filter(_ => _.id != id);
      }
    });
  }
}
