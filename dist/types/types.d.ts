export declare type TranslationResult = {
    originalText: string;
    mainMeaning: string;
    sPronunciation?: string;
    tPronunciation?: string;
    sourceLanguage?: string;
    targetLanguage?: string;
    detailedMeanings?: DetailedMeaning[];
    definitions?: Definition[];
    examples?: Example[];
};
export declare type DetailedMeaning = {
    pos?: string;
    meaning?: string;
    synonyms?: string[];
};
export declare type Definition = {
    pos?: string;
    meaning?: string;
    synonyms?: string[];
    example?: string;
};
export declare type Example = {
    source: string | null;
    target: string | null;
};
export declare type TranslationError = {
    errorType: string;
    errorCode: string;
    errorMsg: string;
    errorAct: {
        api: string;
        action: string;
        text: string;
        from: string | null;
        to: string | null;
    };
};
export declare type PronunciationSpeed = "fast" | "slow";
