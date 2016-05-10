import { Promise, IStore, IManagerOptions, IManager, Repo, IModel } from 'typestore';
export declare class MockStore implements IStore {
    constructor();
    init(manager: IManager, opts: IManagerOptions): Promise<boolean>;
    start(): Promise<boolean>;
    stop(): Promise<boolean>;
    syncModels(): Promise<boolean>;
    getRepo<T extends Repo<M>, M extends IModel>(clazz: {
        new (): T;
    }): Repo<M>;
}