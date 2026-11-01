import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DirectionComponent } from './app/direction.component';

bootstrapApplication(DirectionComponent, appConfig)
  .catch((err) => console.error(err));
