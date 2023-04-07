import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: 'app-home-menu',
  template: `
    <!-- <div class="menu-scroll-content">
      <ul class="navigation-menu" *ngIf="!(loading$ | async)">
        <li
          app-menuitem
          *ngFor="let item of model; let i = index"
          [item]="item"
          [index]="i"
          [root]="true"
        ></li>
      </ul>
      <ul class="navigation-menu p-3" *ngIf="loading$ | async">
        <li class="pt-2">
          <p-skeleton width="100%" height="3rem"></p-skeleton>
        </li>
        <li class="pt-2">
          <p-skeleton width="100%" height="3rem"></p-skeleton>
        </li>
        <li class="pt-2">
          <p-skeleton width="100%" height="3rem"></p-skeleton>
        </li>
      </ul>
    </div> -->
  `,
})
export class HomeMenuComponent implements OnInit {
  public model: any[];
  permisos: any[] = [];
  menus: any[] = [];

  constructor(public app: MainComponent) {}

  ngOnInit() {}

  buildMenu(menus: any[]): any[] {
    return menus.map((menu) => {
      var level = {
        label: menu.nombre,
        icon: menu.icono,
        items: null,
        routerLink: null,
      };
      if (menu.menus && menu.menus.length > 0) {
        level.items = this.buildMenu(menu.menus);
      } else {
        level.routerLink = [menu.ruta];
      }
      return level;
    });
  }

  changeTheme(theme) {
    this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
    this.changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css');
  }

  changeStyleSheetsColor(id, value) {
    const element = document.getElementById(id);
    const urlTokens = element.getAttribute('href').split('/');
    urlTokens[urlTokens.length - 1] = value;

    const newURL = urlTokens.join('/');

    this.replaceLink(element, newURL);
  }

  isIE() {
    return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  }

  replaceLink(linkElement, href) {
    if (this.isIE()) {
      linkElement.setAttribute('href', href);
    } else {
      const id = linkElement.getAttribute('id');
      const cloneLinkElement = linkElement.cloneNode(true);

      cloneLinkElement.setAttribute('href', href);
      cloneLinkElement.setAttribute('id', id + '-clone');

      linkElement.parentNode.insertBefore(
        cloneLinkElement,
        linkElement.nextSibling,
      );

      cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();
        cloneLinkElement.setAttribute('id', id);
      });
    }
  }
}
