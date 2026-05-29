import type { JobStatus } from "../types/job";

type Props = {
  setFilter: (status: JobStatus | "") => void;
};

export default function FilterBar({ setFilter }: Props) {
  return (
    <select onChange={(e) => setFilter(e.target.value as JobStatus | "")}>
      <option value="">All</option>
      <option value="Applied">Applied</option>
      <option value="Interview">Interview</option>
      <option value="Rejected">Rejected</option>
      <option value="Offer">Offer</option>
    </select>
  );
}