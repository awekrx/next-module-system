import { UnitKey } from './enums';

export type Unit = {
  key: UnitKey;
};

export type WithKey<Type> = Type & Unit;
