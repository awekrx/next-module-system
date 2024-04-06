import { UiModuleConstructor, Unit, UnitKey } from '$/core/units';

export const isModule = (unit: Unit): unit is UiModuleConstructor => {
  return unit.key === UnitKey.MODULE;
};
