// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_/index.js';

export default class {
}

export function _A_ProductionOrder_2Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductionOrder_2 extends Base {
    declare ManufacturingOrder?: __.Key<string>
    declare ManufacturingOrderType?: string | null
    declare Material?: string | null
    declare ProductionPlant?: string | null
    declare TotalQuantity?: number | null
    declare MfgOrderPlannedStartDate?: __.CdsDate | null
    declare MfgOrderPlannedEndDate?: __.CdsDate | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<A_ProductionOrder_2>;
    declare static readonly elements: __.ElementsOf<A_ProductionOrder_2>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class A_ProductionOrder_2 extends _A_ProductionOrder_2Aspect(__.Entity) {}
Object.defineProperty(A_ProductionOrder_2, 'name', { value: 'API_PRODUCTION_ORDER_2_SRV.A_ProductionOrder_2' })
Object.defineProperty(A_ProductionOrder_2, 'is_singular', { value: true })
export class A_ProductionOrder_2_ extends Array<A_ProductionOrder_2> {$count?: number}
Object.defineProperty(A_ProductionOrder_2_, 'name', { value: 'API_PRODUCTION_ORDER_2_SRV.A_ProductionOrder_2' })
