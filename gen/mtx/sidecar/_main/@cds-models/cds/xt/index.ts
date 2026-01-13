// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_/index.js';

export function _ExtensionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Extension extends Base {
    declare ID?: __.Key<string>
    declare tag?: string | null
    declare appid?: string | null
    declare csn?: string | null
    declare i18n?: string | null
    declare sources?: import("stream").Readable | null
    declare activated?: string | null
    declare timestamp?: __.CdsTimestamp | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Extension>;
    declare static readonly elements: __.ElementsOf<Extension>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Extension extends _ExtensionAspect(__.Entity) {}
Object.defineProperty(Extension, 'name', { value: 'cds.xt.Extensions' })
Object.defineProperty(Extension, 'is_singular', { value: true })
export class Extensions extends Array<Extension> {$count?: number}
Object.defineProperty(Extensions, 'name', { value: 'cds.xt.Extensions' })
