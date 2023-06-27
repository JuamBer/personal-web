import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  sidebarVisible = false;
  user$ = this.authService.getCurrentUser() as Observable<any>;

  public breadcrumbs$: Observable<MenuItem[]> = this.router.events.pipe(
    startWith(undefined),
    debounceTime(200),
    map(() => {
      const splittedUrls = this.router.url.split('/');
      const filteredSplittedUrls = splittedUrls.filter((i) => i !== '');
      return filteredSplittedUrls.map((filteredSplittedUrl, index) => ({
        label: filteredSplittedUrl,
        routerLink: filteredSplittedUrls.slice(0, index + 1).join('/'),
      }));
    }),
  );
  menus = [
    {
      routerLink: '/backoffice/certificates',
      icon: 'pi pi-fw pi-home',
      label: 'Certificates',
    },
    {
      routerLink: '/backoffice/certificate-types',
      icon: 'pi pi-fw pi-users',
      label: 'Certificate Types',
    },
    {
      routerLink: '/backoffice/certificate-groups',
      icon: 'pi pi-fw pi-user',
      label: 'Certificate Groups',
    },
    {
      routerLink: '/backoffice/companies',
      icon: 'pi pi-fw pi-lock',
      label: 'Companies',
    },
    {
      routerLink: '/backoffice/curriculums',
      icon: 'pi pi-fw pi-lock',
      label: 'Curriculums',
    },
    {
      routerLink: '/backoffice/languages',
      icon: 'pi pi-fw pi-lock',
      label: 'Languages',
    },
    {
      routerLink: '/backoffice/positions',
      icon: 'pi pi-fw pi-lock',
      label: 'Positions',
    },
    {
      routerLink: '/backoffice/skills',
      icon: 'pi pi-fw pi-lock',
      label: 'Skills',
    },
    {
      routerLink: '/backoffice/skill-types',
      icon: 'pi pi-fw pi-lock',
      label: 'Skill Types',
    },
  ];
}
