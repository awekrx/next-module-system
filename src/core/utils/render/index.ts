import { $Keys } from 'utility-types';

import { Builder } from '$/core/builder';
import { UiComponentConstructor, UiPageConstructor } from '$/core/units';

import { isPage } from '../isPage';
import { RenderReturnType, UniversalMap } from './types';

export const render = <Unit extends UiPageConstructor | UiComponentConstructor>(
  unit: Unit,
): RenderReturnType<Unit> => {
  const key: $Keys<typeof Builder.compiled> = isPage(unit)
    ? 'pages'
    : 'components';

  if (Builder.raw[key].length === 0) {
    Builder.init();
  }

  const mapper: UniversalMap = Builder.compiled[key];

  if (!mapper.has(unit)) {
    throw new Error(`${unit.name} is not compiled`);
  }

  const compiled = mapper.get(unit);

  if (!compiled) {
    throw new Error('Something is wrong'); // TODO: use customer error
  }

  return compiled as RenderReturnType<Unit>;
};
