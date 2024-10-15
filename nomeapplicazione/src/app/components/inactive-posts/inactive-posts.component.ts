import { Component } from '@angular/core';
import { IJSONresponse } from '../../interfaces/i-jsonresponse';
import { Ipost } from '../../interfaces/ipost';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  postsInactive!: Ipost[];

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.postSvc
      .getAllPost()
      .then((dati: IJSONresponse) => {
        this.postsInactive = dati.posts.filter((post) => post.active === false);
        console.log(this.postsInactive);
      })
      .catch((error) => {
        console.error('Errore nel recupero dei post:', error);
      });
  }
}
