import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NamingUtils } from 'src/app/shared/utils/naming.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);

  sidebarVisible = false;
  user$ = this.authService.getCurrentUser() as Observable<any>;

  public breadcrumbs$: Observable<MenuItem[]> = this.router.events.pipe(
    startWith(undefined),
    debounceTime(200),
    map(() => {
      const splittedUrls = this.router.url.split('/');
      const filteredSplittedUrls = splittedUrls.filter((i) => i !== '');
      return filteredSplittedUrls.map((filteredSplittedUrl, index) => ({
        label: this.translateSrv.instant(
          `breadcrumbs.${NamingUtils.kebabCaseToCamelCase(filteredSplittedUrl.split(';')[0])}`,
        ),
        routerLink: filteredSplittedUrls.slice(0, index + 1).join('/'),
      }));
    }),
  );
  menus = [
    {
      routerLink: '/backoffice/certificates',
      icon: 'pi pi-fw pi-home',
      label: 'certificates',
    },
    {
      routerLink: '/backoffice/certificate-types',
      icon: 'pi pi-fw pi-users',
      label: 'certificateTypes',
    },
    {
      routerLink: '/backoffice/certificate-groups',
      icon: 'pi pi-fw pi-user',
      label: 'certificateGroups',
    },
    {
      routerLink: '/backoffice/companies',
      icon: 'pi pi-fw pi-lock',
      label: 'companies',
    },
    {
      routerLink: '/backoffice/curriculums',
      icon: 'pi pi-fw pi-lock',
      label: 'curriculums',
    },
    {
      routerLink: '/backoffice/languages',
      icon: 'pi pi-fw pi-lock',
      label: 'languages',
    },
    {
      routerLink: '/backoffice/positions',
      icon: 'pi pi-fw pi-lock',
      label: 'positions',
    },
    {
      routerLink: '/backoffice/skills',
      icon: 'pi pi-fw pi-lock',
      label: 'skills',
    },
    {
      routerLink: '/backoffice/skill-types',
      icon: 'pi pi-fw pi-lock',
      label: 'skillTypes',
    },
  ];

  logOut() {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
