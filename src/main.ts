import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2UVhiQlJPdUBDX3xLflFyVWVTf1Z6cVdWESFaRnZdRl1hSHpTdEVgXXtacXBc');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
