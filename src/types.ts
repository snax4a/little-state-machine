export type Store = Record<string, any>;

export type StoreUpdateFunction = (store: any, payload: any) => Store;

export type UpdateStore =
  | StoreUpdateFunction
  | { [key: string]: StoreUpdateFunction };

export type UpdateStoreFunction = <T>(payload: T) => T;

export type ActionName = { debugName: string };

export type SetStore = <T>(value: T) => void;

export type GetStore = () => Store;

export type GetStoreName = () => string;

export type DebugName = string;

export type DebugNames = { [key: string]: string };

export type Options = {
  debugName?: DebugName;
  debugNames?: DebugNames;
  shouldReRenderApp?: boolean;
};

export type Action = (store: any, payload: any) => any;

export type Actions = { [key: string]: Action };

export type StateMachineOptions = {
  name: string;
  middleWares?: Function[];
  syncStores?:
    | Record<string, string[]>
    | {
        externalStoreName: string;
        transform: ({
          externalStoreData,
          currentStoreData,
        }: {
          externalStoreData: any;
          currentStoreData: any;
        }) => any;
      };
};
