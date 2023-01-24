export default class Failed extends Error {
  id?: string;
  type: string;
  code?: string | number;
  name: string;
  message: string;
  cause?: Error | Failed;
  meta?: Record<string, any>;

  constructor(args: Partial<Failed>) {
    super();

    this.name = args.name || 'Failed';
    this.message = args.message || '';
    this.type = args.type || 'system';

    if (args.id) this.id = args.id;
    if (args.code) this.code = args.code;
    if (args.cause) this.cause = args.cause;
    if (args.meta) this.meta = args.meta;
  }

  toString() {
    return JSON.stringify(this, null, 2);
  }
}
