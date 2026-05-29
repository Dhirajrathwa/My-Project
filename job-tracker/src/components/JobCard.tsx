import type { Job } from "../types/job";

type Props = {
  job: Job;
  deleteJob: (id: string) => void;
  startEdit: (job: Job) => void;
};

export default function JobCard({ job, deleteJob, startEdit }: Props) {
 return (
  <div className="job-card">
    <h3>{job.company}</h3>
    <p>{job.role}</p>

    <p className={`status ${job.status}`}>
      Status: {job.status}
    </p>

    <p>{job.date}</p>

    <button className="edit-btn" onClick={() => startEdit(job)}>
      Edit
    </button>

    <button
      className="delete-btn"
      onClick={() => deleteJob(job.id)}
      style={{ marginLeft: "10px" }}
    >
      Delete
    </button>
  </div>
);
}