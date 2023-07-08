import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { BehaviorSubject, Observable, filter, map, startWith, switchMap } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import {
  GenericFieldType,
  GenericTableConfig,
  TableEvent,
  TableEventType,
} from 'src/app/shared/components/generic-table/models/generic-table.models';
import { defaultGenericTableConfig } from 'src/app/shared/components/generic-table/utils/vairables';
import { EntityList } from 'src/app/shared/models/entity-list.model';
import { ModalMode } from 'src/app/shared/models/modal-mode';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { Skill } from '../models/skill.model';
import { skillActions } from '../state/skill.actions';
import { skillNames } from '../state/skill.names';
import { skillReducer } from '../state/skill.reducer';

export const skillListTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const store = inject(Store);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${skillNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`)
        .pipe(map((table) => `${appRootTitle} | ${table}`)),
    ),
  );
};

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListComponent implements OnInit, EntityList<Skill> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);

  entities$: Observable<Skill[]> = this.store.select(skillReducer.getAll);
  loading$: Observable<boolean> = this.store.select(skillReducer.getLoading);
  count$: Observable<number> = this.store.select(skillReducer.getCount);
  action$: Observable<Action> = this.store.select(skillReducer.getAction);
  tableConfig$ = new BehaviorSubject<GenericTableConfig<Skill | undefined>>(undefined);

  ngOnInit(): void {
    this.store.dispatch(skillActions.count());
    this.translateSrv.onLangChange.pipe(startWith(this.translateSrv.currentLang)).subscribe(() => {
      this.loadTableConfig();
    });
  }

  onLazyLoadEvent(event: LazyLoadEvent) {
    this.store.dispatch(skillActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<Skill>) {
    switch (event.type) {
      case TableEventType.CREATE: {
        this.router.navigate([this.router.url, 'modal', { modalMode: ModalMode.CREATE }]);
        break;
      }
      case TableEventType.VIEW: {
        this.router.navigate([this.router.url, 'modal', { modalMode: ModalMode.VIEW, id: event.value.id }]);
        break;
      }
      case TableEventType.UPDATE: {
        this.router.navigate([this.router.url, 'modal', { modalMode: ModalMode.UPDATE, id: event.value.id }]);
        break;
      }
      case TableEventType.DELETE: {
        this.confirmationSrv.confirm({
          message: this.translateSrv.instant('messages.confirmation.message', {
            name: this.translateSrv.instant(
              `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
            ),
          }),
          header: this.translateSrv.instant('messages.confirmation.header'),
          icon: 'pi pi-info-circle',
          rejectLabel: this.translateSrv.instant('buttons.reject'),
          acceptLabel: this.translateSrv.instant('buttons.accept'),
          accept: () => {
            this.store.dispatch(skillActions.delete({ id: event.value.id }));
          },
        });

        break;
      }
    }
  }

  loadTableConfig() {
    const optionButtons = [];
    const topButtons = [];

    topButtons.push({
      action: 'add',
      icon: 'pi pi-plus',
      label: this.translateSrv.instant('buttons.new', {
        name: this.translateSrv.instant(`tables.${'certificateType'}.singular`),
      }),
    });

    optionButtons.push({ action: 'view', icon: 'pi pi-search-plus' });
    optionButtons.push({ action: 'edit', icon: 'pi pi-pencil' });
    optionButtons.push({ action: 'delete', icon: 'pi pi-trash' });

    this.tableConfig$.next({
      ...defaultGenericTableConfig,
      fields: [
        {
          field: 'name',
          label: 'Name',
          type: GenericFieldType.TEXT,
          filter: true,
          sort: true,
        },
        {
          field: 'percentage',
          label: 'Percentage',
          type: GenericFieldType.PERCENTAGE,
          filter: true,
          sort: true,
        },
        {
          field: 'skillType.nameTranslations',
          label: 'Skill Type',
          type: GenericFieldType.TRANSLATIONS,
          filter: true,
          sort: true,
        },
      ],
      buttons: {
        top: [
          {
            type: 'primary',
            style: 'raised',
            icon: 'pi-plus',
            label: this.translateSrv.instant('buttons.create', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            tooltip: this.translateSrv.instant('buttons.create', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.CREATE,
          },
        ],
        start: [],
        end: [
          {
            type: 'primary',
            style: 'raised',
            icon: 'pi-eye',
            tooltip: this.translateSrv.instant('buttons.view', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.VIEW,
          },
          {
            type: 'primary',
            style: 'raised',
            icon: 'pi-file-edit',
            tooltip: this.translateSrv.instant('buttons.update', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.UPDATE,
          },
          {
            type: 'danger',
            style: 'raised',
            icon: 'pi-trash',
            tooltip: this.translateSrv.instant('buttons.delete', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.DELETE,
          },
        ],
      },
    });
  }
  get NumberMode() {
    return NumberMode;
  }
  get Naming() {
    return Naming;
  }
  get names() {
    return skillNames;
  }
}
