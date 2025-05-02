import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html'
})
export class AppMenuComponent {

  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/teste',
      name: 'Teste',
      exact: true,
      admin: false
    },
    // {
    //   link: '/sobre',
    //   name: 'Sobre',
    //   exact: true,
    //   admin: false
    // },
    // {
    //   link: '/produtos',
    //   name: 'Produtos',
    //   exact: false,
    //   admin: false
    // },
    // {
    //   link: '/filmes',
    //   name: 'Filmes',
    //   exact: false,
    //   admin: false
    // },
    // {
    //   link: '/bar',
    //   name: 'Bar',
    //   exact: false,
    //   admin: false
    // },
    // {
    //   link: '/todo',
    //   name: 'To Do',
    //   exact: false,
    //   admin: false
    // },
    // {
    //   link: '/admin',
    //   name: 'Admin',
    //   exact: false,
    //   admin: false
    // }
  ];

}



interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}

  
//   items: MenuItem[] | undefined;
//   ngOnInit() {
//     this.items = [
//       {
//         label: 'Home',
//         icon: 'pi pi-home',
//         routerLink: ['/'],
//       },
//       {
//         label: 'Features',
//         icon: 'pi pi-star',
//         routerLink: ['/'],
//       },
//       {
//         label: 'Contact',
//         icon: 'pi pi-envelope',
//         routerLink: ['/'],
//       },
//     ];
//   }
// }
