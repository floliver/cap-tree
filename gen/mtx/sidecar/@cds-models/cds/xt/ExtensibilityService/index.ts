// This is an automatically generated file. Please do not change its contents manually!
import * as _cds_xt from './..';
import * as __ from './../../../_';

export default class {
  declare static readonly set: typeof set;
  declare static readonly activate: typeof activate;
  declare static readonly validate: typeof validate;
  declare static readonly discard: typeof discard;
  declare static readonly pull: typeof pull;
  declare static readonly push: typeof push;
  declare static readonly getMigratedProjects: typeof getMigratedProjects;
}

export type ActivationLevel = __.DeepRequired<_cds_xt.Extension>['activated'];
export type CSN = string;
export type CSN_OR_CDL = string;
export type TAR = import("stream").Readable;
// enum
const MESSAGE_severity = {
  error: "error",
  warning: "warning",
  info: "info",
} as const;
type MESSAGE_severity = "error" | "warning" | "info"

// enum
const Extension_status = {
  draft: 1,
  active: 2,
} as const;
type Extension_status = 1 | 2

export function _MESSAGEAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MESSAGE extends Base {
    declare severity?: MESSAGE_severity | null
    declare message?: string | null
    static severity = MESSAGE_severity;
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<MESSAGE>;
    declare static readonly elements: __.ElementsOf<MESSAGE>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class MESSAGE extends _MESSAGEAspect(__.Entity) {}
Object.defineProperty(MESSAGE, 'name', { value: 'cds.xt.ExtensibilityService.MESSAGE' })
Object.defineProperty(MESSAGE, 'is_singular', { value: true })

export function _VALIDATION_RESULTAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class VALIDATION_RESULT extends Base {
    declare errors?: Array<MESSAGE>
    declare messages?: Array<MESSAGE>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<VALIDATION_RESULT>;
    declare static readonly elements: __.ElementsOf<VALIDATION_RESULT>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class VALIDATION_RESULT extends _VALIDATION_RESULTAspect(__.Entity) {}
Object.defineProperty(VALIDATION_RESULT, 'name', { value: 'cds.xt.ExtensibilityService.VALIDATION_RESULT' })
Object.defineProperty(VALIDATION_RESULT, 'is_singular', { value: true })

export function _FILEAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class FILE extends Base {
    declare name?: string | null
    declare content?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<FILE>;
    declare static readonly elements: __.ElementsOf<FILE>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class FILE extends _FILEAspect(__.Entity) {}
Object.defineProperty(FILE, 'name', { value: 'cds.xt.ExtensibilityService.FILE' })
Object.defineProperty(FILE, 'is_singular', { value: true })

export function _ExtensionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Extension extends Base {
    declare ID?: __.Key<string>
    declare csn?: Array<CSN_OR_CDL>
    declare i18n?: Array<FILE>
    declare csvs?: Array<FILE>
    declare timestamp?: __.CdsTimestamp | null
    declare status?: Extension_status | null
    declare appid?: string | null
    static status = Extension_status;
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Extension>;
    declare static readonly elements: __.ElementsOf<Extension>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Extension extends _ExtensionAspect(__.Entity) {}
Object.defineProperty(Extension, 'name', { value: 'cds.xt.ExtensibilityService.Extensions' })
Object.defineProperty(Extension, 'is_singular', { value: true })
export class Extensions extends Array<Extension> {$count?: number}
Object.defineProperty(Extensions, 'name', { value: 'cds.xt.ExtensibilityService.Extensions' })


export declare const set:  {
  // positional
  (extension: Array<CSN_OR_CDL>, resources: Array<FILE>, tag: __.DeepRequired<_cds_xt.Extension>['tag'] | null, activate: ActivationLevel | null, tenant: string | null): void | null
  // named
  ({extension, resources, tag, activate, tenant}: {extension?: Array<CSN_OR_CDL>, resources?: Array<FILE>, tag?: __.DeepRequired<_cds_xt.Extension>['tag'] | null, activate?: ActivationLevel | null, tenant?: string | null}): void | null
  // metadata (do not use)
  __parameters: {extension?: Array<CSN_OR_CDL>, resources?: Array<FILE>, tag?: __.DeepRequired<_cds_xt.Extension>['tag'] | null, activate?: ActivationLevel | null, tenant?: string | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const activate:  {
  // positional
  (ID: __.Key<__.DeepRequired<Extension>['ID']>, status: __.DeepRequired<Extension>['status'] | null, options:  {
} | null): void | null
  // named
  ({ID, status, options}: {ID?: __.Key<__.DeepRequired<Extension>['ID']>, status?: __.DeepRequired<Extension>['status'] | null, options?:  {
} | null}): void | null
  // metadata (do not use)
  __parameters: {ID?: __.Key<__.DeepRequired<Extension>['ID']>, status?: __.DeepRequired<Extension>['status'] | null, options?:  {
} | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const validate:  {
  // positional
  (ID: __.Key<__.DeepRequired<Extension>['ID']>): globalThis.Promise<VALIDATION_RESULT | null> | VALIDATION_RESULT | null
  // named
  ({ID}: {ID?: __.Key<__.DeepRequired<Extension>['ID']>}): globalThis.Promise<VALIDATION_RESULT | null> | VALIDATION_RESULT | null
  // metadata (do not use)
  __parameters: {ID?: __.Key<__.DeepRequired<Extension>['ID']>}, __returns: globalThis.Promise<VALIDATION_RESULT | null> | VALIDATION_RESULT | null, __self: never
  kind: 'action'
}

export declare const discard:  {
  // positional
  (ID: __.Key<__.DeepRequired<Extension>['ID']>): void | null
  // named
  ({ID}: {ID?: __.Key<__.DeepRequired<Extension>['ID']>}): void | null
  // metadata (do not use)
  __parameters: {ID?: __.Key<__.DeepRequired<Extension>['ID']>}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const pull:  {
  // positional
  (tag: __.DeepRequired<_cds_xt.Extension>['tag'] | null): globalThis.Promise<TAR | null> | TAR | null
  // named
  ({tag}: {tag?: __.DeepRequired<_cds_xt.Extension>['tag'] | null}): globalThis.Promise<TAR | null> | TAR | null
  // metadata (do not use)
  __parameters: {tag?: __.DeepRequired<_cds_xt.Extension>['tag'] | null}, __returns: globalThis.Promise<TAR | null> | TAR | null, __self: never
  kind: 'action'
}

export declare const push:  {
  // positional
  (extension: TAR | null, tag: __.DeepRequired<_cds_xt.Extension>['tag'] | null, tenant: string | null): void | null
  // named
  ({extension, tag, tenant}: {extension?: TAR | null, tag?: __.DeepRequired<_cds_xt.Extension>['tag'] | null, tenant?: string | null}): void | null
  // metadata (do not use)
  __parameters: {extension?: TAR | null, tag?: __.DeepRequired<_cds_xt.Extension>['tag'] | null, tenant?: string | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const getMigratedProjects:  {
  // positional
  (tagRule: string | null, defaultTag: string | null, tenant: string | null): globalThis.Promise<import("stream").Readable | null> | import("stream").Readable | null
  // named
  ({tagRule, defaultTag, tenant}: {tagRule?: string | null, defaultTag?: string | null, tenant?: string | null}): globalThis.Promise<import("stream").Readable | null> | import("stream").Readable | null
  // metadata (do not use)
  __parameters: {tagRule?: string | null, defaultTag?: string | null, tenant?: string | null}, __returns: globalThis.Promise<import("stream").Readable | null> | import("stream").Readable | null, __self: never
  kind: 'action'
}