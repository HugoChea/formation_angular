import { Component, OnInit } from '@angular/core';
import { Films } from '../films';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-liste-des-files',
  templateUrl: './liste-des-files.component.html',
  styleUrls: ['./liste-des-files.component.scss']
})
export class ListeDesFilesComponent implements OnInit {

  films: Films[];

  constructor(private _filmsService: FilmsService) {
    this.films = [];
  }

  ngOnInit(): void {
    this._filmsService.getFilms().subscribe(
      (datas:Films[]) => {
        this.films = datas
      }
    )
  }

}
