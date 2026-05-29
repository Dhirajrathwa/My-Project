export type JobStatus = "Applied" | "Interview" | "Rejected" | "Offer";

export type Job = {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  date: string;
};