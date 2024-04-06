import { UiPageConstructor, Unit, UnitKey } from '$/core/units';

export const isPage = (unit: Unit): unit is UiPageConstructor => {
  return unit.key === UnitKey.PAGE;
};
