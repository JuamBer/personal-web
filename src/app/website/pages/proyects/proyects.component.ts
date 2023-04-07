import { Component, OnInit } from '@angular/core';
import { Proyect } from '@app/backoffice/tablas/proyects/models/proyect.model';
import { proyectActions } from '@app/backoffice/tablas/proyects/state/proyect.actions';
import { proyectReducer } from '@app/backoffice/tablas/proyects/state/proyect.reducer';
import { ProyectState } from '@app/backoffice/tablas/proyects/state/proyect.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit {
  proyects$: Observable<Proyect[]> = this.proyectStore
    .select(proyectReducer.getAll)
    .pipe(
      map((proyects) => {
        return [...proyects].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
      }),
      map((proyects) => {
        return [...proyects].map((proyect) => ({
          ...proyect,
          links: JSON.parse(proyect.links),
        }));
      }),
    );

  constructor(private proyectStore: Store<ProyectState>) {} // private proyectosService: ProyectosService

  ngOnInit(): void {
    this.proyectStore.dispatch(proyectActions.loadAll({ payload: null }));
  }
}
