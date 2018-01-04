import { Component } from '@angular/core';

import { RegisterPage } from '../register/register';
import { ReportPage } from '../report/report';
import { ProjectsPage } from '../projects/projects';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RegisterPage;
  tab2Root = ReportPage;
  tab3Root = ProjectsPage;

  constructor() {

  }
}
