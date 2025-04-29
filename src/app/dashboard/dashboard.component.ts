import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component'
import { NavbarComponent } from "../components/shared/navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidemenuComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {}
