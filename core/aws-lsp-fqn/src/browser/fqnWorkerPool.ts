import { ExtractorResult, FqnExtractorInput, IFqnWorkerPool } from '../common/types'

// TODO: implement logic for browser/webworker environment
export class FqnWorkerPool implements IFqnWorkerPool {
    public async exec(_input: FqnExtractorInput): Promise<ExtractorResult> {
        return Promise.resolve({
            success: true,
            data: {
                fullyQualified: {
                    declaredSymbols: [],
                    usedSymbols: [],
                },
                simple: {
                    declaredSymbols: [],
                    usedSymbols: [],
                },
                externalSimple: {
                    declaredSymbols: [],
                    usedSymbols: [],
                },
            },
        })
    }

    public dispose() {}
}
