import {
  UiComponent,
  UiComponentConstructor,
  UiPage,
  UiPageConstructor,
} from '$/core/units';

export type RenderReturnType<
  Unit extends UiPageConstructor | UiComponentConstructor,
> = Unit extends UiPageConstructor ? UiPage : UiComponent;

export type UniversalMap = Map<
  UiPageConstructor | UiComponentConstructor,
  UiPage | UiComponent
>;
