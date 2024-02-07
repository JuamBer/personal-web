import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LangService } from 'src/app/shared/services/lang.service';
import { NamingUtils } from 'src/app/shared/utils/naming.utils';
import { RegexUtils } from 'src/app/shared/utils/regex.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private langSrv = inject(LangService);

  sidebarVisible = false;

  user$ = this.authService.getCurrentUser();
  user = toSignal(this.user$);

  breadcrumbs$: Observable<MenuItem[]> = this.router.events.pipe(
    startWith(undefined),
    debounceTime(200),
    map(() => {
      const splittedUrls = this.router.url.split('/');
      splittedUrls.shift();
      splittedUrls.shift();
      const filteredSplittedUrls = splittedUrls.filter((i) => i !== '' && !RegexUtils.isId(i));
      return filteredSplittedUrls.map((filteredSplittedUrl, index) => ({
        label: this.getBreadcrumbsLabel(filteredSplittedUrl),
        routerLink: filteredSplittedUrls.slice(0, index + 1).join('/'),
      }));
    }),
  );
  breadcrumbs = toSignal(this.breadcrumbs$, {
    initialValue: [],
  });

  lang$ = this.langSrv.lang$;
  lang = this.langSrv.lang;

  menus$ = this.lang$.pipe(
    map((lang) => [
      {
        routerLink: `/${lang}/backoffice/certificates`,
        icon: 'pi pi-fw pi-home',
        label: 'certificates',
      },
      {
        routerLink: `/${lang}/backoffice/certificate-types`,
        icon: 'pi pi-fw pi-users',
        label: 'certificateTypes',
      },
      {
        routerLink: `/${lang}/backoffice/certificate-groups`,
        icon: 'pi pi-fw pi-user',
        label: 'certificateGroups',
      },
      {
        routerLink: `/${lang}/backoffice/companies`,
        icon: 'pi pi-fw pi-lock',
        label: 'companies',
      },
      {
        routerLink: `/${lang}/backoffice/languages`,
        icon: 'pi pi-fw pi-lock',
        label: 'languages',
      },
      {
        routerLink: `/${lang}/backoffice/positions`,
        icon: 'pi pi-fw pi-lock',
        label: 'positions',
      },
      {
        routerLink: `/${lang}/backoffice/skills`,
        icon: 'pi pi-fw pi-lock',
        label: 'skills',
      },
      {
        routerLink: `/${lang}/backoffice/skill-types`,
        icon: 'pi pi-fw pi-lock',
        label: 'skillTypes',
      },
    ]),
  );
  menus = toSignal(this.menus$, {
    initialValue: [],
  });

  logOut() {
    this.authService.signOut();
    this.router.navigate([`/${this.lang()}`, '/login']);
  }

  getBreadcrumbsLabel(filteredSplittedUrl: string) {
    switch (filteredSplittedUrl) {
      case 'VIEW':
        return 'View';
      case 'CREATE':
        return 'Create';
      case 'UPDATE':
        return 'Update';
      default:
        return this.translateSrv.instant(`breadcrumbs.${NamingUtils.kebabCaseToCamelCase(filteredSplittedUrl)}`);
    }
  }
}
