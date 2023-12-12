import type { NFCPassportModel } from './interfaces';
import type { PassportOptions } from './interfaces/PassportOptions';
export declare function scanPassport(options: PassportOptions): Promise<NFCPassportModel | {
    error: string;
}>;
export * from './interfaces';
//# sourceMappingURL=index.d.ts.map