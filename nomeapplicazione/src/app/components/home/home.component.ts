import { Component } from '@angular/core';
import { Ipost } from '../../interfaces/ipost';
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
  uniqueTags: string[] = [];
  postsWithTag!: Ipost[];
  selectedTag: string | null = null; // Tag selezionato per filtrare
  filteredPosts: Ipost[] = []; // Post filtrati che saranno visualizzati

  ngOnInit() {
    this.postSvc
      .getAllPost()
      .then((dati) => {
        this.arrayPost = dati.posts;
        this.postSvc.setPosts(this.arrayPost); // Imposta i post nel servizio
        this.filteredPosts = this.arrayPost; // Mostra tutti i post all'inizio
        this.postCasuale = this.postSvc.generatePostsCasuali(this.arrayPost);
        this.uniqueTags = this.postSvc.extractUniqueTags(this.arrayPost);
      })
      .catch((error) => {
        console.error('Errore nel recupero dei post:', error);
      });
  }

  filterPostsByTag(tag: string): void {
    this.selectedTag = tag; // Imposta il tag selezionato
    this.filteredPosts = this.postSvc.filterPostsByTag(tag); // Filtra i post dal service
  }
  // Funzione per reimpostare i post (mostra tutti i post)
  clearFilter(): void {
    this.selectedTag = null; // Nessun tag selezionato
    this.filteredPosts = this.arrayPost; // Mostra di nuovo tutti i post
  }
}
