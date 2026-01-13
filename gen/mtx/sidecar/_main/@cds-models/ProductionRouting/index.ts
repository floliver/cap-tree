// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_/index.js';

export default class {
}

export function _ProductionRoutingHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductionRoutingHeader extends Base {
    declare ProductionRoutingGroup?: __.Key<string>
    declare ProductionRouting?: __.Key<string>
    declare ProductionRoutingInternalVers?: __.Key<string>
    declare Plant?: string | null
    declare BillOfOperationsDesc?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductionRoutingHeader>;
    declare static readonly elements: __.ElementsOf<ProductionRoutingHeader>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductionRoutingHeader extends _ProductionRoutingHeaderAspect(__.Entity) {}
Object.defineProperty(ProductionRoutingHeader, 'name', { value: 'ProductionRouting.ProductionRoutingHeader' })
Object.defineProperty(ProductionRoutingHeader, 'is_singular', { value: true })
export class ProductionRoutingHeader_ extends Array<ProductionRoutingHeader> {$count?: number}
Object.defineProperty(ProductionRoutingHeader_, 'name', { value: 'ProductionRouting.ProductionRoutingHeader' })

export function _ProductionRoutingSequenceAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductionRoutingSequence extends Base {
    declare ProductionRoutingGroup?: __.Key<string>
    declare ProductionRouting?: __.Key<string>
    declare ProductionRoutingSequence?: __.Key<string>
    declare ProductionRoutingSqncIntVers?: __.Key<string>
    declare SequenceText?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductionRoutingSequence>;
    declare static readonly elements: __.ElementsOf<ProductionRoutingSequence>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductionRoutingSequence extends _ProductionRoutingSequenceAspect(__.Entity) {}
Object.defineProperty(ProductionRoutingSequence, 'name', { value: 'ProductionRouting.ProductionRoutingSequence' })
Object.defineProperty(ProductionRoutingSequence, 'is_singular', { value: true })
export class ProductionRoutingSequence_ extends Array<ProductionRoutingSequence> {$count?: number}
Object.defineProperty(ProductionRoutingSequence_, 'name', { value: 'ProductionRouting.ProductionRoutingSequence' })
