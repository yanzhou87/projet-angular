import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resultats';
  uneclass = [
    { nom: 'Brionna Ernser', note: 54 },
    { nom: 'Rowan Terry', note: 67 },
    { nom: 'Patricia Lehner', note: 45 },
    { nom: 'Jade Kohler ', note: 98 },
    { nom: 'Hattie Gleichner', note: 77 },
    { nom: 'Alycia Gusikowski', note: 67 },
    { nom: 'Travis Emmerich', note: 57 },
    { nom: 'Jena Wiegand', note: 60 },
    { nom: 'Vella Leffler', note: 66 },
    { nom: 'Marcelle Morissette', note: 65 },
    { nom: 'Allie Haley', note: 88 }
  ];
  moyenne = 0;
  constructor(){
  
      for(let i of this.uneclass){
       this.moyenne += i.note;
      }
    this.moyenne/=this.uneclass.length;
    this.moyenne = Math.round(this.moyenne * 100) /100;
  }
    
}
