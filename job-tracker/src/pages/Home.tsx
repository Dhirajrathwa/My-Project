import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import JobForm from "../components/JobForm";
import JobCard from "../components/JobCard";
import FilterBar from "../components/FilterBar";
import type { Job, JobStatus } from "../types/job";
import Toast  from "../components/Toast";
export default function Home() {
  const [jobs, setJobs] = useLocalStorage<Job[]>("jobs", []);
  const [filter, setFilter] = useState<JobStatus | "">("");
  const [search, setSearch] = useState("");
  const [toast ,setToast]= useState("")
  const [editingJob, setEditingJob] = useState<Job | null>(null);
const total = jobs.length || 1;
const [dark, setDark] =useState(false);

  // ➕ Add
  const addJob = (job: Job) => {
    setJobs([...jobs, job]);
    setToast("Job Added");
  };

  // ❌ Delete
  const deleteJob = (id: string) => {
    setJobs(jobs.filter((j) => j.id !== id));
     setToast("Job Deleted");
  };

  // ✏️ Start Edit
  const startEdit = (job: Job) => {
    setEditingJob(job);
  };

  // ✅ Update
  const updateJob = (updated: Job) => {
    setJobs(jobs.map((j) => (j.id === updated.id ? updated : j)));
    setEditingJob(null);
    setToast("Job Updated");
  };

  // 📊 Stats
  const stats = {
    Applied: jobs.filter((j) => j.status === "Applied").length,
    Interview: jobs.filter((j) => j.status === "Interview").length,
    Rejected: jobs.filter((j) => j.status === "Rejected").length,
    Offer: jobs.filter((j) => j.status === "Offer").length,
  };

  // 🔍 Search + Filter
  const filteredJobs = jobs.filter((job) => {
    const matchStatus = filter ? job.status === filter : true;
    const matchSearch = job.company
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchStatus && matchSearch;
  });

  return (
    <div className={dark ? "container dark" : "container"}>
      <h1>Job Tracker</h1>
<button onClick={() => setDark(!dark)}>
  Toggle Dark Mode
</button>
      {/* Stats */}
      <div>
        <p>Applied: {stats.Applied}</p>
        <p>Interview: {stats.Interview}</p>
        <p>Rejected: {stats.Rejected}</p>
        <p>Offer: {stats.Offer}</p>
      </div>
<div style={{ marginBottom: "20px" }}>
  <div style={{ height: "8px", background: "#ddd", borderRadius: "5px" }}>
    <div
      style={{
        width: `${(stats.Interview / total) * 100}%`,
        height: "100%",
        background: "#2563eb",
        borderRadius: "5px"
      }}
    />
  </div>
  <small>Interview Progress</small>
</div>
      {/* Form */}
      <JobForm
        addJob={addJob}
        editingJob={editingJob}
        updateJob={updateJob}
      />

      {/* Search */}
      <input
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <FilterBar setFilter={setFilter} />

      {/* List */}
      {filteredJobs.length===0 ?(
        <p> No Jobs Found</p>
      ):(
      filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          startEdit={startEdit}
        />
      ))
    )}
    
          <Toast message={toast} clear={()=>setToast("")}/>

    </div>
  );
}