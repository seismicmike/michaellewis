export interface Redirect {
  fromPath: string,
  isPermanent?: boolean,
  toPath: string,
  redirectInBrowser?: boolean,
  force?: boolean,
  statusCode?: number,
  ignoreCase?: boolean,

  [p: string]: unknown
}

const redirectData: Redirect[] = [];

export default redirectData;