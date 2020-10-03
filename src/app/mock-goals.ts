import { Goal, Step, StepStatus } from './models';

export var GOALS: Goal[] = [
    {
        id: "goal1",
        name: "Build the Introspect service",
        description: "I want to build the Introspect service and deploy it so that it can be used by others",
        icon: "icon",
        steps: [
            {
                id: "step1",
                name: "Build an angular service that allows adding goals to a list",
                description: "Start with an empty list and add/remove goals from it",
                status: StepStatus.IN_PROGRESS
            }, {
                id: "step2",
                name: "Make the list persistent with a mongo db cluster",
                status: StepStatus.OPEN
            }, {
                id: "step3",
                name: "Make the list pretty",
                status: StepStatus.OPEN
            },
            {
                id: "step4",
                name: "Set up authentication, so each user has their list",
                status: StepStatus.OPEN
            },
        ],
    },
    {
        id: "goal1",
        name: "Build the Introspect service",
        description: "I want to build the Introspect service and deploy it so that it can be used by others",
        icon: "icon",
        steps: [
            {
                id: "step1",
                name: "Build an angular service that allows adding goals to a list",
                description: "Start with an empty list and add/remove goals from it",
                status: StepStatus.IN_PROGRESS
            }, {
                id: "step2",
                name: "Make the list persistent with a mongo db cluster",
                status: StepStatus.OPEN
            }, {
                id: "step3",
                name: "Make the list pretty",
                status: StepStatus.OPEN
            },
            {
                id: "step4",
                name: "Set up authentication, so each user has their list",
                status: StepStatus.OPEN
            },
        ],
    },
    {
        id: "goal1",
        name: "Build the Introspect service",
        description: "I want to build the Introspect service and deploy it so that it can be used by others",
        icon: "icon",
        steps: [
            {
                id: "step1",
                name: "Build an angular service that allows adding goals to a list",
                description: "Start with an empty list and add/remove goals from it",
                status: StepStatus.IN_PROGRESS
            }, {
                id: "step2",
                name: "Make the list persistent with a mongo db cluster",
                status: StepStatus.OPEN
            }, {
                id: "step3",
                name: "Make the list pretty",
                status: StepStatus.OPEN
            },
            {
                id: "step4",
                name: "Set up authentication, so each user has their list",
                status: StepStatus.OPEN
            },
        ],
    },
    {
        id: "goal1",
        name: "Build the Introspect service",
        description: "I want to build the Introspect service and deploy it so that it can be used by others",
        icon: "icon",
        steps: [
            {
                id: "step1",
                name: "Build an angular service that allows adding goals to a list",
                description: "Start with an empty list and add/remove goals from it",
                status: StepStatus.IN_PROGRESS
            }, {
                id: "step2",
                name: "Make the list persistent with a mongo db cluster",
                status: StepStatus.OPEN
            }, {
                id: "step3",
                name: "Make the list pretty",
                status: StepStatus.OPEN
            },
            {
                id: "step4",
                name: "Set up authentication, so each user has their list",
                status: StepStatus.OPEN
            },
        ],
    },
]