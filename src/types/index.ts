export interface Query {
    id: string;
    text: string;
    timestamp: number;
    status: 'pending' | 'success' | 'error';
    result?: QueryResult;
}

export interface QueryResult {
    data: DataPoint[];
    summary: string;
}

export interface DataPoint {
    name: string;
    value: number;
}

export interface RootState {
    queries: {
        items: Query[];
        suggestions: string[];
        isLoading: boolean;
        error: string | null;
    };
}