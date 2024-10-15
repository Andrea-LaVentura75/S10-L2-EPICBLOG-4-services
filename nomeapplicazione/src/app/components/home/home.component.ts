import { Component } from '@angular/core';
import { Ipost } from '../../interfaces/ipost';
import { IJSONresponse } from '../../interfaces/i-jsonresponse';
import { PostService } from '../../services/post.service';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private postSvc: PostService) {}
  postCasuale: Ipost[] = [];
  arrayPost!: Ipost[];
  ngOnInit() {
    this.postSvc
      .getAllPost()
      .then((dati: IJSONresponse) => {
        this.arrayPost = dati.posts;
        console.log(this.arrayPost);
        this.generaPostsCasuali();
      })
      .catch((error) => {
        console.error('Errore nel recupero dei post:', error);
      });
  }

  generaPostsCasuali() {
    for (let i: number = 0; i <= 4; i++) {
      if (this.arrayPost.length > 0) {
        let numeroCasuale = Math.floor(Math.random() * this.arrayPost.length);
        this.postCasuale.push(this.arrayPost[numeroCasuale]);
        console.log(this.postCasuale);
      } else {
        console.warn("L'array dei post è vuoto!");
      }
    }
  }
}
