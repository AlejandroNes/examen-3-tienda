import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// 1. Agregamos withHashLocation en esta línea:
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideRouter(routes, withHashLocation()),
    provideClientHydration(withEventReplay()),
  ],
};
