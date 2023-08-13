import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const array = await read();
      const string = await json(array);
      const obj = JSON.parse(string);
      return obj;
    } catch (e) {
      throw new Error(e);
    }
  }
}
