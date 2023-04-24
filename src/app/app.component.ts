import { Component } from '@angular/core';
import { mediaInterface } from './models/media';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  public top: mediaInterface = { 
    title: 'TOP PELICULAS',
    allFilms: [
      {
        src: '../assets/images/Top10/1-papel.webp',
        alt: 'top1'
      },
      {
        src: '../assets/images/Top10/2-reina.webp',
        alt: 'top2'
      },
      {
        src: '../assets/images/Top10/3-titanes.webp',
        alt: 'top3'
      },
      {
        src: '../assets/images/Top10/4-lostinspace.webp',
        alt: 'top4'
      },
      {
        src: '../assets/images/Top10/5-dondecaben.webp',
        alt: 'top5'
      },
      {
        src: '../assets/images/Top10/6-aquinohay.webp',
        alt: 'top6'
      },
      {
        src: '../assets/images/Top10/7-blacklist.webp',
        alt: 'top7'
      },
      {
        src: '../assets/images/Top10/8-ricos.webp',
        alt: 'top8'
      },
      {
        src: '../assets/images/Top10/9-poder.webp',
        alt: 'top9'
      },
      {
        src: '../assets/images/Top10/10-gooddoctor.webp',
        alt: 'top10'
      },
    ]
}
  public accion: mediaInterface = { 
    title: 'ACCION',
    allFilms: [
      {
        src: '../assets/images/Accion/ejercitomuertos.jpg',
        alt: 'accion1'
      },
      {
        src: '../assets/images/Accion/elprotector.webp',
        alt: 'accion2'
      },
      {
        src: '../assets/images/Accion/johnwick2.webp',
        alt: 'accion3'
      },
      {
        src: '../assets/images/Accion/terminator2.webp',
        alt: 'accion4'
      },
      {
        src: '../assets/images/Accion/worldwarz.webp',
        alt: 'accion5'
      },
      {
        src: '../assets/images/Accion/heat.webp',
        alt: 'accion6'
      },
      {
        src: '../assets/images/Accion/renacido.webp',
        alt: 'accion7'
      }
    ]
  }

  public anime: mediaInterface = { 
    title: 'ANIME',
    allFilms: [
      {
        src: '../assets/images/Anime/ajin.jpg',
        alt: 'anime1'
      },
      {
        src: '../assets/images/Anime/mononoke.webp',
        alt: 'anime2'
      },
      {
        src: '../assets/images/Anime/chihiro.webp',
        alt: 'anime3'
      },
      {
        src: '../assets/images/Anime/perfectblue.webp',
        alt: 'anime4'
      },
      {
        src: '../assets/images/Anime/ninokuni.jpg',
        alt: 'anime5'
      },
      {
        src: '../assets/images/Anime/castilloambulante.webp',
        alt: 'anime6'
      },
      {
        src: '../assets/images/Anime/gitsarise.webp',
        alt: 'anime7'
      },
    ]
  } 
  public comedia: mediaInterface = { 
    title: 'Comedia',
    allFilms: [
      {
        src: '../assets/images/Comedia/casi300.webp',
        alt: 'comedia1'
      },
      {
        src: '../assets/images/Comedia/cazafantasmas.webp',
        alt: 'comedia2'
      },
      {
        src: '../assets/images/Comedia/dictador.webp',
        alt: 'comedia3'
      },
      {
        src: '../assets/images/Comedia/padresella.webp',
        alt: 'comedia4'
      },
      {
        src: '../assets/images/Comedia/scarymovie3.webp',
        alt: 'comedia5'
      },
      {
        src: '../assets/images/Comedia/ted2.webp',
        alt: 'comedia6'
      },
      {
        src: '../assets/images/Comedia/erasehollywood.webp',
        alt: 'comedia7'
      }
    ]
  }  
  public drama: mediaInterface = { 
    title: 'Drama',
    allFilms: [
      {
        src: '../assets/images/Drama/1917.webp',
        alt: 'drama1'
      },
      {
        src: '../assets/images/Drama/arrival.webp',
        alt: 'drama2'
      },
      {
        src: '../assets/images/Drama/clublucha.webp',
        alt: 'drama3'
      },
      {
        src: '../assets/images/Drama/corazones.webp',
        alt: 'drama4'
      },
      {
        src: '../assets/images/Drama/millaverde.webp',
        alt: 'drama5'
      },
      {
        src: '../assets/images/Drama/culpable.jpg',
        alt: 'drama6'
      },
      {
        src: '../assets/images/Drama/schindler.webp ',
        alt: 'drama7'
      },
    ]
  }
}
 
