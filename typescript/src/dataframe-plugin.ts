
import { IDataFrame, DataFrame } from 'data-forge';

declare module "data-forge/build/lib/dataframe" {
    interface DataFrame<IndexT, ValueT> {
        somePluginFunction (): IDataFrame<IndexT, ValueT>;
    }
}

function somePluginFunction (this: IDataFrame<any, any>): IDataFrame<any, any> {
    console.log("Plugin function!");
    return this;
}

DataFrame.prototype.somePluginFunction = somePluginFunction;