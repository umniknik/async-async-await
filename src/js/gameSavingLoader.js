import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const saving = JSON.parse(value);
      return saving;
    } catch (error) {
      throw new Error('Failed to load game saving');
    }
  }
}
