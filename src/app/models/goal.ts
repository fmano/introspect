import { Step } from './step';

export interface Goal {
    id: string;
    name: string;
    description?: string;
    icon?: string;
    steps?: Step[];
} 