// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../_/index.js';

export type UnsignedDecimalQuantity = number;
export function _PushCalculationResultAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class PushCalculationResult extends Base {
    declare cutListPosition_ID?: string | null
    declare material?: string | null
    declare calculatedQty?: number | null
    declare disassemblyProcess_ID?: string | null
    declare disassemblyProcess_name?: string | null
    declare incomingQty?: number | null
    declare ratio?: number | null
    declare plant_ID?: Array<string>
    declare positionType?: string | null
    declare headerPercentage?: number | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<PushCalculationResult>;
    declare static readonly elements: __.ElementsOf<PushCalculationResult>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class PushCalculationResult extends _PushCalculationResultAspect(__.Entity) {}
Object.defineProperty(PushCalculationResult, 'name', { value: 'test.disassembly.types.PushCalculationResult' })
Object.defineProperty(PushCalculationResult, 'is_singular', { value: true })
