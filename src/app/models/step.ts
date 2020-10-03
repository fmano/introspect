export enum StepStatus {
    OPEN, PENDING, IN_PROGRESS, DONE
}

export interface Step {
    id: string;
    name: string;
    description?: string;
    status: StepStatus;
}

