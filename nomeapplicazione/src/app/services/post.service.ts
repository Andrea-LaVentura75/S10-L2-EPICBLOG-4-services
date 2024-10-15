import { Injectable } from '@angular/core';
import { IJSONresponse } from '../interfaces/i-jsonresponse';
import { Ipost } from '../interfaces/ipost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Ipost[] = [];

  constructor() {}

  // Method to get all posts from 'db.json'
  getAllPost(): Promise<IJSONresponse> {
    return fetch('db.json').then((res) => res.json()) as Promise<IJSONresponse>;
  }

  // Method to generate 5 random posts
  generatePostsCasuali(arrayPost: Ipost[]): Ipost[] {
    const postsCasuali: Ipost[] = [];
    for (let i: number = 0; i <= 4; i++) {
      if (arrayPost.length > 0) {
        let numeroCasuale = Math.floor(Math.random() * arrayPost.length);
        postsCasuali.push(arrayPost[numeroCasuale]);
      }
    }
    return postsCasuali;
  }

  // Method to extract unique tags from posts
  extractUniqueTags(arrayPost: Ipost[]): string[] {
    const tagSet = new Set<string>();
    arrayPost.forEach((post) => {
      post.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    });
    return Array.from(tagSet);
  }

  setPosts(posts: Ipost[]): void {
    this.posts = posts;
    console.log(posts);
  }

  // Method to find posts by a specific tag
  filterPostsByTag(tag: string): Ipost[] {
    return this.posts.filter((post) => post.tags.includes(tag)); // Filtra i post
  }
}
