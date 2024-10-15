import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ipost } from '../../interfaces/ipost';
import { PostService } from '../../services/post.service';
import { IJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  constructor(private postSvc: PostService) {}

  @Input() post!: Ipost;
  @Input() postCasuale!: Ipost[];
  @Input() postsInactive!: Ipost[];
  @Input() postsActive!: Ipost[];
}
