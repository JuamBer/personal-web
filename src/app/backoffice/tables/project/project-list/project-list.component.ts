import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResolveFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { Subject, filter, map, startWith, switchMap, takeUntil } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import {
  GenericFieldType,
  GenericTableConfig,
  TableEvent,
  TableEventType,
} from 'src/app/shared/components/generic-table/models/generic-table.models';
import { defaultGenericTableConfig } from 'src/app/shared/components/generic-table/utils/variables';
import { EntityList } from 'src/app/shared/models/entity-list.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ActionStatus, ActionType, hasPendingActions } from 'src/app/shared/state/common/common-state';
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { Project } from '../models/project.model';
import { projectActions } from '../state/project.actions';
import { projectNames } from '../state/project.names';
import { projectReducer } from '../state/project.reducer';

export const projectListTitleResolver: ResolveFn<string> = () => {
  const store = inject(Store);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${projectNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`)
        .pipe(map((table) => `${appRootTitle} | ${table}`)),
    ),
  );
};

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit, OnDestroy, EntityList<Project> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private titleCasePipe = inject(TitleCasePipe);
  private toastSrv = inject(ToastService);
  private messageSrv = inject(MessageService);

  destroy$ = new Subject<void>();

  entities$ = this.store.select(projectReducer.getAll);
  entities = toSignal(this.entities$, {
    initialValue: [],
  });

  loading$ = hasPendingActions(this.store.select(projectReducer.getAction), [
    ActionType.COUNT,
    ActionType.LOAD_MANY,
    ActionType.DELETE_ONE,
  ]);

  loading = toSignal(this.loading$, {
    initialValue: false,
  });

  count$ = this.store.select(projectReducer.getCount);
  count = toSignal(this.count$, {
    initialValue: 0,
  });

  tableConfig = signal<GenericTableConfig<Project> | undefined>(undefined);

  action$ = this.store.select(projectReducer.getAction);

  ngOnInit() {
    this.handleLoadCount();
    this.handleLoadTableConfig();
    this.handleMessages();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleLoadCount() {
    this.store.dispatch(projectActions.count(addActionId({ feedback: new Set([ActionStatus.ERROR]) })));
  }

  handleLoadTableConfig() {
    this.translateSrv.onLangChange
      .pipe(takeUntil(this.destroy$), startWith(this.translateSrv.currentLang))
      .subscribe(() => {
        this.loadTableConfig();
      });
  }

  handleMessages() {
    this.action$.pipe(takeUntil(this.destroy$)).subscribe((action) => {
      const message = this.toastSrv.getMessage(
        this.translateSrv,
        action,
        this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
      );
      if (message) {
        this.messageSrv.add(message);
      }
    });
  }

  onLazyLoadEvent(event: TableLazyLoadEvent) {
    this.store.dispatch(
      projectActions.loadAll(
        addActionId({
          feedback: new Set([ActionStatus.ERROR]),
          payload: event,
        }),
      ),
    );
  }

  onTableEvent(event: TableEvent<Project>) {
    switch (event.type) {
      case TableEventType.CREATE: {
        this.router.navigate([this.router.url, ModalMode.CREATE]);
        break;
      }
      case TableEventType.VIEW: {
        this.router.navigate([this.router.url, ModalMode.VIEW, event.value.id]);
        break;
      }
      case TableEventType.UPDATE: {
        this.router.navigate([this.router.url, ModalMode.UPDATE, event.value.id]);
        break;
      }
      case TableEventType.DELETE: {
        this.confirmationSrv.confirm({
          message: this.translateSrv.instant('messages.confirmation.message', {
            collectionName: this.translateSrv.instant(
              `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
            ),
            entityName: event.value.getDisplayName(this.translateSrv.currentLang),
          }),
          header: this.translateSrv.instant('messages.confirmation.header'),
          icon: 'pi pi-info-circle',
          rejectLabel: this.translateSrv.instant('buttons.reject'),
          acceptLabel: this.translateSrv.instant('buttons.accept'),
          accept: () => {
            this.store.dispatch(
              projectActions.delete(
                addActionId({
                  feedback: new Set([ActionStatus.PENDING, ActionStatus.SUCCESS, ActionStatus.ERROR]),
                  id: event.value.id,
                }),
              ),
            );
          },
        });

        break;
      }
    }
  }

  loadTableConfig() {
    this.tableConfig.set({
      ...defaultGenericTableConfig,
      title: this.titleCasePipe.transform(
        this.translateSrv.instant(`tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`),
      ),
      fields: [
        {
          field: 'name',
          label: 'Name',
          type: GenericFieldType.TEXT,
          filter: true,
          sort: true,
        },
        {
          field: 'projectType.descriptionTranslations',
          label: 'Description',
          type: GenericFieldType.TRANSLATIONS,
          filter: false,
          sort: false,
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
    return projectNames;
  }
}
