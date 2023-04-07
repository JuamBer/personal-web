import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: 'app-settings-menu',
  template: `
    <div class="menu-scroll-content">
      <ul class="navigation-menu">
        <li
          app-menuitem
          *ngFor="let item of model; let i = index"
          [item]="item"
          [index]="i"
          [root]="true"
        ></li>
      </ul>
    </div>
  `,
})
export class SettingsMenuComponent implements OnInit {
  public model: any[];

  constructor(public app: MainComponent) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Temas',
        icon: 'palette',
        items: [
          {
            label: 'Blue - Amber',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('blue');
            },
          },
          {
            label: 'Teal - Amber',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('teal');
            },
          },
          {
            label: 'Blue Grey - Green',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('blue-grey');
            },
          },
          {
            label: 'Cyan - Yellow',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('cyan');
            },
          },
          {
            label: 'Dark - Blue',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('dark-blue');
            },
          },
          {
            label: 'Dark - Green',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('dark-green');
            },
          },
          {
            label: 'Light Blue - Green',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('light-blue');
            },
          },
          {
            label: 'Indio - Cyan',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('indigo');
            },
          },
          {
            label: 'Deep Purple - Pink',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('deep-purple');
            },
          },
          {
            label: 'Green - Yellow',
            icon: 'brush',
            command: (event) => {
              this.changeTheme('green');
            },
          },
        ],
      },
      {
        label: 'Modos de menu',
        icon: 'settings_application',
        items: [
          {
            label: 'Static Menu',
            icon: 'menu',
            command: () => this.app.changeToStaticMenu(),
          },
          {
            label: 'Overlay Menu',
            icon: 'exit_to_app',
            command: () => this.app.changeToOverlayMenu(),
          },
          {
            label: 'Light Menu',
            icon: 'label_outline',
            command: () => (this.app.darkMenu = false),
          },
          {
            label: 'Dark Menu',
            icon: 'label',
            command: () => (this.app.darkMenu = true),
          },
        ],
      },
    ];
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
