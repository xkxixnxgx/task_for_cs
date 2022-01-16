interface Student {
    name: string;
    avgMark: number;
}

interface Statistics {
    avgMark: number;
    hughestMark: string;
    lowestMark: string;
}


export function getStatistics(marks: Student[]): Statistics {
    const obj = {avgMark: 0, hughestMark: 'Test', lowestMark: 'Test'};
    return obj;
}
