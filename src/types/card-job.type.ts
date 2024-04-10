export interface Job {
    id: number;
    title: string;
    description: string;
    salary: string;
    place: string;
}

export interface Company {
    id: number;
    name: string;
}

export interface CardJobProps {
    job: Job;
    company: Company;
}
