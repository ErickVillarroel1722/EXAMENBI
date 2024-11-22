import { Component, OnInit } from '@angular/core';
   import { DataService } from '../services/data.service';

   @Component({
     selector: 'app-home',
     templateUrl: './home.page.html',
     styleUrls: ['./home.page.scss'],
   })
   export class HomePage implements OnInit {
     items: any[] = [];

     constructor(private dataService: DataService) {}

     ngOnInit() {
       this.dataService.getBooks().subscribe((response: any) => {
         const books = response.results;
         books.forEach((book: any, index: number) => {
           if (index % 2 === 0) {
             this.dataService.getDogImage().subscribe((dogRes: any) => {
               this.items.push({ title: book.title, image: dogRes.message });
             });
           } else {
             const robotImage = this.dataService.getRobotImage(book.id);
             this.items.push({ title: book.title, image: robotImage });
           }
         });
       });
     }
     saveItem(item: any) {
      this.dataService.saveItem(item).then(() => {
        alert('Item guardado en Firebase');
      });
    }
   }
