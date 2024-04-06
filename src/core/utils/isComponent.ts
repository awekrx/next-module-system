import { UiComponentConstructor, Unit, UnitKey } from '$/core/units';

export const isComponent = (unit: Unit): unit is UiComponentConstructor => {
  return unit.key === UnitKey.COMPONENT;
};
