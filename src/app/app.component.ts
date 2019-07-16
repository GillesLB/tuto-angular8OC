import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  posts: Post[] = [
    {
      title: 'Premier post',
      content: `Utque aegrum corpus quassari etiam levibus solet offensis,
        ita animus eius angustus et tener, quicquid increpuisset,
        ad salutis suae dispendium existimans factum aut cogitatum,
        insontium caedibus fecit victoriam luctuosam.`,
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Second post',
      content: `Illud autem non dubitatur quod cum esset aliquando virtutum omnium domicilium Roma,
        ingenuos advenas plerique nobilium,
        ut Homerici bacarum suavitate Lotophagi,
        humanitatis multiformibus officiis retentabant.`,
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Dernier post (pour l\'instant)',
      content: `Oportunum est, ut arbitror, explanare nunc causam,
        quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem,
        ut locuta est pertinacior fama.
        nec enim super hoc ulla documentorum rata est fides.`,
      loveIts: 0,
      created_at: Date()
    }
  ];

}
