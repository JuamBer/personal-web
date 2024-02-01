export class TestUtils {
  public static generateManyMocks<T>(generateOneMock: () => T, size: number = 10): T[] {
    const items: T[] = [];

    for (let index = 0; index < size; index++) {
      items.push(generateOneMock());
    }

    return [...items];
  }
}
