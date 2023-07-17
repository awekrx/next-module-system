import 'reflect-metadata';

import { Container } from 'inversify';

import { UiComponent, UiComponentConstructor } from '../component';
import { UiModule } from '../module';
import { UiPage, UiPageConstructor } from '../page';
import { register } from '../register';

import * as Pages from '~/app';
import * as ModulesAndComponents from '~/modules';

export class Builder {
  static readonly container: Container = new Container();
  static readonly components: UiComponentConstructor[] = [];
  static readonly modules: UiModule[] = [];
  static readonly pages: UiPageConstructor[] = [];
  static readonly compiledPages = new Map<UiPageConstructor, UiPage>();
  static readonly compiledComponents = new Map<
    UiComponentConstructor,
    UiComponent
  >();

  // Builds modules, set metadata, compile components and pages
  // Once on server and once on load on client
  static init() {
    // Get non-compiled pages
    Object.values(Pages).forEach((page) => {
      this.pages.push(page);
    });

    // Get non-compiled modules and components and split them
    Object.values(ModulesAndComponents).forEach((importedModule) => {
      if (importedModule.key === 'Component') {
        this.components.push(
          importedModule as unknown as UiComponentConstructor
        );
      } else if (importedModule.key === 'Module') {
        this.modules.push(importedModule as unknown as UiModule);
      }
    });

    // Compile modules and set them to the components
    register(this.container, this.components);

    // Create array with compiled pages
    this.pages.forEach((page) => {
      const compiledPage: UiPage = this.container.resolve(page);
      this.compiledPages.set(page, compiledPage);
    });

    // Create array with compiled components
    this.components.forEach((component) => {
      const compiledComponent: UiComponent = this.container.resolve(component);
      this.compiledComponents.set(component, compiledComponent);
    });
  }

  static getRenderedPage = (page: UiPageConstructor): UiPage => {
    if (this.components.length === 0) {
      this.init();
    }

    if (!this.compiledPages.has(page)) {
      throw new Error('Page ' + page + ' is not compiled');
    }

    // Page is not undefined
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.compiledPages.get(page)!;
  };

  static getRenderedComponent = (
    component: UiComponentConstructor
  ): UiComponent => {
    if (this.components.length === 0) {
      this.init();
    }

    if (!this.compiledComponents.has(component)) {
      throw new Error('Component ' + component + ' is not compiled');
    }

    // Component is not undefined
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.compiledComponents.get(component)!;
  };
}
