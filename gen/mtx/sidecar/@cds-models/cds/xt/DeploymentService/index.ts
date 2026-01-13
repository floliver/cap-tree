// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../_';

export default class {
  declare static readonly subscribe: typeof subscribe;
  declare static readonly unsubscribe: typeof unsubscribe;
  declare static readonly extend: typeof extend;
  declare static readonly upgrade: typeof upgrade;
  declare static readonly deploy: typeof deploy;
  declare static readonly tenantsByDb: typeof tenantsByDb;
  declare static readonly getTablesDeep: typeof getTablesDeep;
  declare static readonly getTables: typeof getTables;
  declare static readonly getColumns: typeof getColumns;
  declare static readonly getTenants: typeof getTenants;
  declare static readonly getContainers: typeof getContainers;
}


export declare const subscribe:  {
  // positional
  (tenant: string, metadata:  {
} | null, options:  {
} | null): void | null
  // named
  ({tenant, metadata, options}: {tenant: string, metadata?:  {
} | null, options?:  {
} | null}): void | null
  // metadata (do not use)
  __parameters: {tenant: string, metadata?:  {
} | null, options?:  {
} | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const unsubscribe:  {
  // positional
  (tenant: string, options:  {
} | null): void | null
  // named
  ({tenant, options}: {tenant: string, options?:  {
} | null}): void | null
  // metadata (do not use)
  __parameters: {tenant: string, options?:  {
} | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const extend:  {
  // positional
  (tenant: string, options:  {
} | null): void | null
  // named
  ({tenant, options}: {tenant: string, options?:  {
} | null}): void | null
  // metadata (do not use)
  __parameters: {tenant: string, options?:  {
} | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const upgrade:  {
  // positional
  (tenant: string, options:  {
} | null): void | null
  // named
  ({tenant, options}: {tenant: string, options?:  {
} | null}): void | null
  // metadata (do not use)
  __parameters: {tenant: string, options?:  {
} | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const deploy:  {
  // positional
  (tenant: string, options:  {
} | null): void | null
  // named
  ({tenant, options}: {tenant: string, options?:  {
} | null}): void | null
  // metadata (do not use)
  __parameters: {tenant: string, options?:  {
} | null}, __returns: void | null, __self: never
  kind: 'action'
}

export declare const tenantsByDb:  {
  // positional
  (tenants: Array<string>, metadata: boolean | null): globalThis.Promise< {
} | null> |  {
} | null
  // named
  ({tenants, metadata}: {tenants?: Array<string>, metadata?: boolean | null}): globalThis.Promise< {
} | null> |  {
} | null
  // metadata (do not use)
  __parameters: {tenants?: Array<string>, metadata?: boolean | null}, __returns: globalThis.Promise< {
} | null> |  {
} | null, __self: never
  kind: 'function'
}

export declare const getTablesDeep:  {
  // positional
  (tenant: string): globalThis.Promise<Array< {
}>> | Array< {
}>
  // named
  ({tenant}: {tenant: string}): globalThis.Promise<Array< {
}>> | Array< {
}>
  // metadata (do not use)
  __parameters: {tenant: string}, __returns: globalThis.Promise<Array< {
}>> | Array< {
}>, __self: never
  kind: 'function'
}

export declare const getTables:  {
  // positional
  (tenant: string): globalThis.Promise<Array<string>> | Array<string>
  // named
  ({tenant}: {tenant: string}): globalThis.Promise<Array<string>> | Array<string>
  // metadata (do not use)
  __parameters: {tenant: string}, __returns: globalThis.Promise<Array<string>> | Array<string>, __self: never
  kind: 'function'
}

export declare const getColumns:  {
  // positional
  (tenant: string, table: string, params:  {
} | null): globalThis.Promise<Array<string>> | Array<string>
  // named
  ({tenant, table, params}: {tenant: string, table: string, params?:  {
} | null}): globalThis.Promise<Array<string>> | Array<string>
  // metadata (do not use)
  __parameters: {tenant: string, table: string, params?:  {
} | null}, __returns: globalThis.Promise<Array<string>> | Array<string>, __self: never
  kind: 'function'
}

export declare const getTenants:  {
  // positional
  (options:  {
} | null): globalThis.Promise<Array<string>> | Array<string>
  // named
  ({options}: {options?:  {
} | null}): globalThis.Promise<Array<string>> | Array<string>
  // metadata (do not use)
  __parameters: {options?:  {
} | null}, __returns: globalThis.Promise<Array<string>> | Array<string>, __self: never
  kind: 'function'
}

export declare const getContainers:  {
  // positional
  (options:  {
} | null): globalThis.Promise<Array<string>> | Array<string>
  // named
  ({options}: {options?:  {
} | null}): globalThis.Promise<Array<string>> | Array<string>
  // metadata (do not use)
  __parameters: {options?:  {
} | null}, __returns: globalThis.Promise<Array<string>> | Array<string>, __self: never
  kind: 'function'
}