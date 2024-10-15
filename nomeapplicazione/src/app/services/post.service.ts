import { Injectable } from '@angular/core';
import { IJSONresponse } from '../interfaces/i-jsonresponse';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAllPost() {
    return <Promise<IJSONresponse>>fetch('db.json').then((res) => res.json());
  }
}
