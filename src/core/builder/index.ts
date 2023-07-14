import 'reflect-metadata';

import { Container } from 'inversify';

import * as Pages from '~/app';
import {
  register,
  UiComponent,
  UiComponentConstructor,
  UiModule,
  UiPage,
  UiPageConstructor,
} from '~/core';
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

  static init() {
    Object.values(Pages).forEach((page) => {
      this.pages.push(page);
    });

    Object.values(ModulesAndComponents).forEach((importedModule) => {
      if (importedModule.key === 'Component') {
        this.components.push(
          importedModule as unknown as UiComponentConstructor
        );
      } else if (importedModule.key === 'Module') {
        this.modules.push(importedModule as unknown as UiModule);
      }
    });

    register(this.container, this.components);

    this.pages.forEach((page) => {
      const compiledPage: UiPage = this.container.resolve(page);
      this.compiledPages.set(page, compiledPage);
    });

    this.components.forEach((component) => {
      const compiledComponent: UiComponent = this.container.resolve(component);
      this.compiledComponents.set(component, compiledComponent);
    });
  }

  static renderPage = (page: UiPageConstructor): UiPage => {
    if (this.components.length === 0) {
      this.init();
    }

    if (!this.compiledPages.has(page)) {
      throw new Error('Page ' + page + ' is not compiled');
    }

    return this.compiledPages.get(page)!;
  };

  static renderComponent = (component: UiComponentConstructor): UiComponent => {
    if (this.components.length === 0) {
      this.init();
    }

    if (!this.compiledComponents.has(component)) {
      throw new Error('Component ' + component + ' is not compiled');
    }

    return this.compiledComponents.get(component)!;
  };
}
