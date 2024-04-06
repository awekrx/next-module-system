import 'reflect-metadata';

import { Container } from 'inversify';

import * as units from '$modules';

import {
  UiComponent,
  UiComponentConstructor,
  UiModuleConstructor,
  UiPage,
  UiPageConstructor,
  Unit,
} from '../units';
import { isComponent } from '../utils/isComponent';
import { isModule } from '../utils/isModule';
import { isPage } from '../utils/isPage';
import { register } from './utils';

export class Builder {
  static readonly container: Container = new Container();

  static readonly raw = {
    pages: [] as UiPageConstructor[],
    components: [] as UiComponentConstructor[],
    modules: [] as UiModuleConstructor[],
  };

  static readonly compiled = {
    pages: new Map<UiPageConstructor, UiPage>(),
    components: new Map<UiComponentConstructor, UiComponent>(),
  };

  // Builds modules, set metadata, compile components and pages
  // Once on server and once on load on client
  static init() {
    // Get non-compiled modules and components and split them
    Object.values(units).forEach((unit: Unit) => {
      if (isComponent(unit)) {
        this.raw.components.push(unit);
      }

      if (isModule(unit)) {
        return this.raw.modules.push(unit);
      }

      if (isPage(unit)) {
        return this.raw.pages.push(unit);
      }
    });

    // Compile modules and set them to the components
    register(this.container, [...this.raw.components, ...this.raw.pages]);

    // Create array with compiled pages
    this.raw.pages.forEach((page) => {
      const compiledPage: UiPage = this.container.resolve(page);
      this.compiled.pages.set(page, compiledPage);
    });

    // Create array with compiled components
    this.raw.components.forEach((component) => {
      const compiled: UiComponent = this.container.resolve(component);
      this.compiled.components.set(component, compiled);
    });
  }
}

export * from './utils';
