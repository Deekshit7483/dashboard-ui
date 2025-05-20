'use client';
import { FaChevronDown, FaBlog, FaLink, FaMoneyBillAlt, FaPuzzlePiece, FaDollarSign, FaUserTie, FaQuestionCircle, FaBell, FaComments, FaUser } from "react-icons/fa";

export function Sidebar() {
  const navSections = [
    {
      label: "Articles",
      icon: <FaChevronDown className="text-blue-600 h-3 w-3" />,
      items: [
        "Create Article",
        "Generated Articles",
        "Keyword Projects",
        "AI Keyword to Article",
        "Steal Competitor Keyword",
        "Import Keyword from GSC",
        "Manual Keyword to Article",
        "Bulk Keyword to Article",
        "Longtail Keyword to Article",
        "Article Settings",
      ],
    },
    { label: "Auto Blog", icon: <FaBlog className="text-blue-600" /> },
    { label: "Internal Links", icon: <FaLink className="text-blue-600" /> },
    { label: "Free Backlinks", icon: <FaMoneyBillAlt className="text-blue-600" /> },
    { label: "Integrations", icon: <FaPuzzlePiece className="text-blue-600" /> },
    { label: "Subscription", icon: <FaDollarSign className="text-blue-600" /> },
    { label: "Affiliate Program", icon: <FaUserTie className="text-blue-600" /> },
    { label: "Help Center", icon: <FaQuestionCircle className="text-blue-600" /> },
    { label: "Updates", icon: <FaBell className="text-blue-600" /> },
    { label: "Live Chat Support", icon: <FaComments className="text-blue-600" /> },
    { label: "Profile", icon: <FaUser className="text-blue-600" /> },
  ];

  return (
    <aside className="w-[270px] min-h-screen border-r bg-white p-5 text-black hidden md:block">
      <div className="text-2xl font-extrabold mb-6">abun</div>
      <select className="w-full mb-6 p-2 rounded border text-sm">
        <option>amazon.com</option>
      </select>

      <div className="space-y-4">
        {navSections.map((section, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 font-medium mb-2">
              {section.icon} <span>{section.label}</span>
            </div>
            {section.items && (
              <div className="ml-4 space-y-1">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className={`px-2 py-1 rounded cursor-pointer hover:bg-gray-100 ${
                      item === "Generated Articles"
                        ? "text-blue-600 font-semibold bg-blue-50"
                        : ""
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
