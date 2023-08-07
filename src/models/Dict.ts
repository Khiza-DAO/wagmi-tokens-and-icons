import _ from "lodash";
import { ContractDict } from "./ContractDict";

export class Dict {
  list: ContractDict[] = [];

  constructor() {
    this.list;
  }

  public add(ContractDict: ContractDict | ContractDict[]) {
    this.list.push(
      ...(_.isArray(ContractDict) ? ContractDict : [ContractDict])
    );
  }

  public filterById(id: ContractDict["id"]) {
    return this.list.find((ContractDict) => {
      return ContractDict.id === id;
    });
  }
}