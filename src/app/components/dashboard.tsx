'use client';
import { useState } from "react";
import { FaWordpress } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/table";

const data = [
  ["How to Improve Your Skills in League of Legends", "league of legends [2240000]", 4575, "20 hours ago"],
  ["How to Master Last Hitting in League of Legends", "league of legends [2240000]", 3480, "21 hours ago"],
  ["7 Tips for Better Teamplay in League of Legends", "league of legends [2240000]", 2676, "a day ago"],
  ["Top Virtual Executive Assistant Services (2024)", "virtual executive assistant [2900]", 2408, "1 Oct, 24"],
  ["Unlimited Graphics Design Solutions", "unlimited graphic design services [390]", 1793, "---"],
  ["Top Amazon Payment Methods for Quick Access to Funds", "amazon payment methods [3600]", 2647, "---"],
  ["Backlinks 101: What are backlinks and why they're important [Free template]", "backlinks [8100]", 2261, "---"],
  ["7 Leading AI SEO Tools in 2024 (Ranked & Compared)", "ai seo software [880]", 1543, "---"],
  ["Unlimited Graphic Design Services You Can Rely On", "unlimited graphic design services [390]", 1974, "---"],
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const filtered = data.filter(([title]) =>
    typeof title === "string" && title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 bg-white text-black min-h-screen p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-center">Articles</h1>

      <div className="flex justify-center flex-wrap gap-3">
        {["Generated Articles", "Published Articles", "Scheduled Articles", "Archived Articles"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 rounded border text-sm ${
              tab === "Generated Articles"
                ? "bg-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-center px-4">
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded text-black"
        />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-xs text-gray-500 bg-gray-100">
              <TableHead className="w-8">
                <input type="checkbox" />
              </TableHead>
              <TableHead>Article Title</TableHead>
              <TableHead>Keyword [Traffic]</TableHead>
              <TableHead>Words</TableHead>
              <TableHead>Created On</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Publish</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row, i) => (
              <TableRow key={i} className="text-sm">
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>{row[2]}</TableCell>
                <TableCell>{row[3]}</TableCell>
                <TableCell>
                  <button className="px-3 py-1 text-green-600 border border-green-600 rounded text-xs">
                    View
                  </button>
                </TableCell>
                <TableCell>
                  <FaWordpress className="text-xl text-blue-600" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mt-2 gap-2">
        <div>Total {filtered.length} Article Titles</div>
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded px-2 py-1 text-black bg-white">
            <option>10</option>
            <option>25</option>
          </select>
          <span>entries per page</span>
        </div>
      </div>
    </div>
  );
}
