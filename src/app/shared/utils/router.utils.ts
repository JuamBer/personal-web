export class RouterUtils {
  public static getParentRoute(actualRoute: string, index: number): string {
    const url = actualRoute.split('/');
    for (let i = 0; i < index; i++) {
      url.pop();
    }
    return url.join('/');
  }
}
