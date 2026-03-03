import { Search, SlidersHorizontal, Columns2, Plus } from "lucide-react";

import { Table } from "@tanstack/react-table";

interface TableToolbarProps<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: TableToolbarProps<TData>) {
  return (
    <div className="flex items-center gap-2 p-4">
      {/* search */}
      <div className="relative flex-1">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          placeholder="Search scans by name or type..."
          value={
            (table.getColumn("scanName")?.getFilterValue() as string) ?? ""
          }
          onChange={(e) =>
            table.getColumn("scanName")?.setFilterValue(e.target.value)
          }
          className="focus:border-teal w-full rounded-lg border border-neutral-200 bg-transparent py-2 pr-4 pl-9 text-sm outline-none dark:border-neutral-800"
        />
      </div>

      {/* filter button */}
      <button className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800">
        <SlidersHorizontal className="h-4 w-4" />
        Filter
      </button>

      {/* column button */}
      <button className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800">
        <Columns2 className="h-4 w-4" />
        Column
      </button>

      {/* new scan */}
      <button className="bg-teal flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white hover:opacity-90">
        <Plus className="h-4 w-4" />
        New scan
      </button>
    </div>
  );
}
