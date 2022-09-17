import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { GeneralLayout } from "../components/layouts";
import { EntryListItem, NewEntry } from "../components/ui";
import { EntryStatus } from "../interfaces";

const HomePage: NextPage = () => {
  const [status, setStatus] = useState<EntryStatus>();
  const [sort, setSort] = useState<EntryStatus>();
  return (
    <GeneralLayout>
      <NextSeo title="FASE 1" />

      <div className="container mx-auto md:max-w-md md:px-8">
        <p className="my-4">Awesome Todo List</p>

        <NewEntry />

        <div className="flex flex-row items-center gap-5 justify-between w-full mt-4">
          <select
            className="w-full px-3 py-2 mt-4 text-gray-700 bg-white border rounded-lg appearance-none"
            onChange={(e) => setStatus(e.target.value as EntryStatus)}
          >
            <option value="all">All List</option>
            <option value="active">Current</option>
            <option value="inactive">Completed</option>
          </select>

          <select
            className={`w-full px-3 py-2 mt-4 text-gray-700 bg-white border rounded-lg appearance-none`}
            onChange={(e) => setSort(e.target.value as EntryStatus)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            <option value="az">A-z</option>
          </select>
        </div>

        <EntryListItem status={status} sort={sort} />
      </div>
    </GeneralLayout>
  );
};

export default HomePage;
