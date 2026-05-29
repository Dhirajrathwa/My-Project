import { useEffect, useState } from "react";
import type { Job, JobStatus } from "../types/job";

type Props = {
  addJob: (job: Job) => void;
  editingJob: Job | null;
  updateJob: (job: Job) => void;
};

export default function JobForm({ addJob, editingJob, updateJob }: Props) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied" as JobStatus,
    date: "",
  });

  // 🔁 Fill form when editing
  useEffect(() => {
    if (editingJob) {
      setForm(editingJob);
    }
  }, [editingJob]);

  const handleSubmit = () => {
    if (!form.company || !form.role) return;

    if (editingJob) {
      updateJob(form); // ✏️ update
    } else {
      addJob({ ...form, id: Date.now().toString() }); // ➕ add
    }

    // reset form
    setForm({
      company: "",
      role: "",
      status: "Applied",
      date: "",
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <input
        placeholder="Role"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value as JobStatus })
        }
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <button className="add-btn" onClick={handleSubmit}>
        {editingJob ? "Update Job" : "Add Job"}
      </button>
    </div>
  );
}