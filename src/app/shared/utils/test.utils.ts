export class TestUtils {
  public static generateManyMocks<T>(mock: () => T, size: number = 10): T[] {
    const items: T[] = [];

    for (let index = 0; index < size; index++) {
      items.push(mock());
    }

    return [...items];
  }
}
