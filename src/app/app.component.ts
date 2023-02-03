import { Component } from '@angular/core';
import { VizCreateOptions, ToolbarPosition } from 'ngx-tableau';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Splitted Tableau Server URL and Report
  serverUrl = 'https://public.tableau.com';
  report = 'SuperSampleSuperstore/SuperDescriptive';

  // Options
  options: VizCreateOptions = {
    hideTabs: true,
    hideToolbar: false,
    disableUrlActionsPopups: true,
    toolbarPosition: ToolbarPosition.TOP,
    onFirstInteractive: (event) => {
      console.log('On first interactive event!', event);
    },
  };

  // Loaded event
  handleOnLoaded = (loaded) => console.log('Loaded', loaded);
}
