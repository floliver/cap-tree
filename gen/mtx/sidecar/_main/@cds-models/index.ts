// This is an automatically generated file. Please do not change its contents manually!
import * as _sap_common from './sap/common/index.js';
import * as __ from './_/index.js';

export type Language = __.Association.to<_sap_common.Language>;
export type Currency = __.Association.to<_sap_common.Currency>;
export type Country = __.Association.to<_sap_common.Country>;
export type Timezone = __.Association.to<_sap_common.Timezone>;
export type User = string;
// the following represents the CDS aspect 'cuid'
export function _cuidAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class cuid extends Base {
    declare ID?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<cuid>;
    declare static readonly elements: __.ElementsOf<cuid>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class cuid extends _cuidAspect(__.Entity) {}
export class cuid_ extends Array<cuid> {$count?: number}
Object.defineProperty(cuid_, 'name', { value: 'cuid' })
// the following represents the CDS aspect 'managed'
export function _managedAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class managed extends Base {
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: User | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<managed>;
    declare static readonly elements: __.ElementsOf<managed>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class managed extends _managedAspect(__.Entity) {}
export class managed_ extends Array<managed> {$count?: number}
Object.defineProperty(managed_, 'name', { value: 'managed' })
// the following represents the CDS aspect 'temporal'
export function _temporalAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class temporal extends Base {
    declare validFrom?: __.CdsTimestamp | null
    declare validTo?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<temporal>;
    declare static readonly elements: __.ElementsOf<temporal>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class temporal extends _temporalAspect(__.Entity) {}
export class temporal_ extends Array<temporal> {$count?: number}
Object.defineProperty(temporal_, 'name', { value: 'temporal' })