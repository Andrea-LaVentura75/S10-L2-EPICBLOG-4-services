import { Component } from '@angular/core';
import { IJSONresponse } from '../../interfaces/i-jsonresponse';
import { Ipost } from '../../interfaces/ipost';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  constructor(private postSvc: PostService) {}

  postsActive!: Ipost[];
  ngOnInit() {
    this.postSvc
      .getAllPost()
      .then((dati: IJSONresponse) => {
        this.postsActive = dati.posts.filter((post) => post.active === true);
        console.log(this.postsActive);
      })
      .catch((error) => {
        console.error('Errore nel recupero dei post:', error);
      });
  }
}
