import { Injectable } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';
   import { AngularFirestore } from '@angular/fire/compat/firestore';
   @Injectable({
     providedIn: 'root'
   })
   export class DataService {
     private booksUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
     private dogUrl = 'https://dog.ceo/api/breed/a:enpinscher/images/random';
     private robotUrl = 'https://robohash.org/';

     constructor(private http: HttpClient, private firestore: AngularFirestore) {}
     

     getBooks(): Observable<any> {
       return this.http.get(this.booksUrl);
     }

     getDogImage(): Observable<any> {
       return this.http.get(this.dogUrl);
     }

     getRobotImage(id: string): string {
       return `${this.robotUrl}${id}`;
     }
     saveItem(item: any) {
        return this.firestore.collection('items').add(item);
      }

   }
   
