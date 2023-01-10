export class NavItems {
  public label: string | null;
  public source: string;
  public action: any;
  public aux?: any;

  constructor() {
    this.label = "";
    this.source = "";
  };
}
