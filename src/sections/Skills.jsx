import React, { useMemo, useState } from "react";
import { skills } from "../constants/data";
import SkillCard from "../components/SkillCard";

const levelOrder = {
  Advanced: 3,
  Intermediate: 2,
  Beginner: 1,
};

function Skills() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  const displayedSkills = useMemo(() => {
    let result = [...skills];

    if (filter !== "All") { result = result.filter((skill) => skill.category === filter); }

    switch (sort) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "level":
        result.sort((a, b) => levelOrder[b.level] - levelOrder[a.level]);
        break;

      case "newest":
        result.sort((a, b) => new Date(b.started).getTime() - new Date(a.started).getTime());
        break;

      case "oldest":
        result.sort((a, b) => new Date(a.started).getTime() - new Date(b.started).getTime());
        break;

      default:
        break;
    }

    return result;
  }, [filter, sort]);

  const visibleSkills = showAll ? displayedSkills : displayedSkills.slice(0, 6);

  return (
    <section className="relative flex min-h-screen overflow-hidden justify-center px-6 pb-8 pt-40 sm:px-10">
      <div className="mx-8 flex w-full max-w-4xl flex-col items-center">
        <h2 className="mb-20 font-inter text-2xl font-semibold text-base-content/80">Skills</h2>
        <div className="mb-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setFilter(category)} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  filter === category ? "border-base-content/20 bg-base-content text-base-100" : "border-base-content/10 bg-base-200/40 text-base-content/50 hover:border-base-content/20 hover:text-base-content"
              }`}>
                {category}
              </button>
            ))}
          </div>

          <select value={sort} onChange={(e) => setSort(e.target.value)} className="w-full rounded-full border border-base-content/10 bg-base-200/40 px-4 py-2 text-xs font-medium text-base-content/60 outline-none transition-colors hover:border-base-content/20 sm:w-auto">
            <option value="default">Sort: Default</option>
            <option value="name">Sort: Name</option>
            <option value="level">Sort: Skill Level</option>
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
          </select>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map((skill) => (<SkillCard key={skill.name} skill={skill} />))}
        </div>

        {displayedSkills.length > 6 && (
          <div className="mt-6 flex justify-center">
            <button onClick={() => setShowAll((prev) => !prev)} className="rounded-full border border-base-content/10 bg-base-200/40 px-5 py-2 text-xs font-medium text-base-content/60 transition-all duration-200 hover:border-base-content/20 hover:bg-base-200 hover:text-base-content">
              {showAll ? "Show Less" : `View All (${displayedSkills.length})`}
            </button>
          </div>
        )}

        {displayedSkills.length === 0 && (
          <div className="py-20 text-sm text-base-content/40">No skills found.</div>
        )}
      </div>
    </section>
  );
}

export default Skills;
