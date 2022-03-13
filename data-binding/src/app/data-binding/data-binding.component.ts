import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  url: string = 'https://www.facebook.com/';
  cursoAngular: boolean = true;
  urlImage = 'https://i.picsum.photos/id/410/200/200.jpg?hmac=hVMLZXpDnTKOed7U0eNRwQvhs6LRl-g0XjEFRs4V3cU';

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
  constructor() {
    this.url;
   }
  ngOnInit(): void {
  }

}
