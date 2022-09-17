import { useContext, useState } from "react";
import { EntriesContext } from "../../context/entries";
import { EntryStatus } from "../../interfaces";

interface Props {
  status?: EntryStatus;
  sort?: string;
}

export const EntryListItem: React.FC<Props> = ({ status, sort }) => {
  const { entries, updateEntry, deleteEntry } = useContext(EntriesContext);

  // useState checked checkbox by state of entry status
  const [checked, setChecked] = useState<EntryStatus>();

  // show active entries only if status === active
  const activeEntries = entries.filter((entry) => entry.status === "active");

  // show inactive entries only if status === inactive
  const inactiveEntries = entries.filter(
    (entry) => entry.status === "inactive"
  );

  // show all entires
  const allEntries = entries;

  // update entry status by id and set checked checkbox by status of entry (active or inactive)
  const onEntryClicked = (entryId: string) => {
    const entry = entries.find((entry) => entry._id === entryId);
    if (entry) {
      updateEntry({
        ...entry,
        status: entry.status === "active" ? "inactive" : "active",
      });
      setChecked(entry.status);
    }
  };

  // delete entry by id
  const onEntryDelete = (entryId: string) => {
    const entry = entries.find((entry) => entry._id === entryId);
    if (entry) {
      deleteEntry(entry);
    }
  };

  const filteredEntries =
    status === "active"
      ? activeEntries
      : status === "inactive"
      ? inactiveEntries
      : sort === "asc"
      ? allEntries.sort((a, b) => a.createdAt - b.createdAt)
      : sort === "desc"
      ? allEntries.sort((a, b) => b.createdAt - a.createdAt)
      : sort === "az"
      ? allEntries.sort((a, b) => a.title.localeCompare(b.title))
      : status === "active" || sort === "asc"
      ? activeEntries.sort((a, b) => a.createdAt - b.createdAt)
      : status === "active" || sort === "desc"
      ? activeEntries.sort((a, b) => b.createdAt - a.createdAt)
      : status === "active" || sort === "az"
      ? activeEntries.sort((a, b) => a.title.localeCompare(b.title))
      : status === "inactive" || sort === "asc"
      ? inactiveEntries.sort((a, b) => a.createdAt - b.createdAt)
      : status === "inactive" || sort === "desc"
      ? inactiveEntries.sort((a, b) => b.createdAt - a.createdAt)
      : status === "inactive" || sort === "az"
      ? inactiveEntries.sort((a, b) => a.title.localeCompare(b.title))
      : allEntries;

  return (
    <div>
      {filteredEntries.map((entry) => (
        <div className="flex flex-col w-full mt-4" key={entry._id}>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-between w-full px-4 py-2 bg-white border rounded-lg shadow-sm">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  value={checked}
                  defaultChecked={entry.status === "active" ? false : true}
                  onChange={() => {
                    onEntryClicked(entry._id);
                  }}
                  className="w-6 h-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                />

                <p
                  className={`mx-2 text-gray-600 ${
                    entry.status === "inactive" ? "line-through" : ""
                  }`}
                >
                  {entry.title}
                </p>
              </div>

              <button
                onClick={() => {
                  onEntryDelete(entry._id);
                }}
                className="flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-0"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
