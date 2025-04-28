import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { CounterComponent } from './counter/counter.component'
import DashboardComponent from './dashboard/dashboard.component'
import { ChangeDetectionComponent } from './dashboard/pages/change-detection/change-detection.component'
import { ControlFlowComponent } from './dashboard/pages/control-flow/control-flow.component'
import { DeferOptionsComponent } from './dashboard/pages/defer-options/defer-options.component'
import { DeferViewsComponent } from './dashboard/pages/defer-views/defer-views.component'
import { UserComponent } from './user/user.component'
import { UsersComponent } from './dashboard/pages/users/users.component'
import { ViewTransitionComponent } from './dashboard/pages/view-transition/view-transition.component'
import { SignalsComponent } from './dashboard/pages/signals/signals.component'

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: AppComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'aprendiendo-angular',
        title: 'Aprendiendo Angular',
        // component: CounterComponent,
        children: [
          {
            path: 'signals',
            title: 'Aprendiendo Angular - Signals',
            component: SignalsComponent
          },
          {
            path: 'counter',
            title: 'Aprendiendo Angular - Counter',
            component: CounterComponent
          }
        ]
      },
      {
        path: 'changue-detection',
        title: 'Change Detection',
        component: ChangeDetectionComponent
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        component: ControlFlowComponent
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        component: DeferOptionsComponent
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        component: DeferViewsComponent
      },
      {
        path: 'user/:id',
        title: 'User view',
        component: UserComponent
      },
      {
        path: 'users',
        title: 'Lista de Usuarios',
        component: UsersComponent
      },
      {
        path: 'view-transitions',
        title: 'Transiciones',
        component: ViewTransitionComponent
      },
      {
        path: 'counter',
        title: 'Counter',
        component: CounterComponent
      }
    ]
  }
]
