const levelStyles = {
  Beginner: {
    dot: "bg-amber-400",
    text: "text-amber-400",
  },
  Intermediate: {
    dot: "bg-sky-400",
    text: "text-sky-400",
  },
  Advanced: {
    dot: "bg-emerald-400",
    text: "text-emerald-400",
  },
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function SkillCard({ skill }) {
  const level = levelStyles[skill.level] ?? levelStyles.Beginner;

  return (
    <div className="hover-3d">
      <div className="group relative flex min-h-55 flex-col w-full overflow-hidden rounded-2xl border border-base-content/10 bg-base-200/40 p-6 transition-all duration-300 hover:border-base-content/20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-base-content/5 blur-3xl transition-all duration-500 group-hover:bg-base-content/10" />

        <div className="relative flex items-start justify-between">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-base-content/10 bg-base-100 text-2xl transition-transform duration-300 group-hover:scale-105">
            {skill.icon ? (
              <i className={skill.icon} aria-hidden="true" />
            ) : (
              <span className="text-sm font-medium text-base-content/40">
                {skill.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <span className="rounded-full border border-base-content/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-base-content/50">
            {skill.category}
          </span>
        </div>

        <div className="relative mt-6">
          <h3 className="text-lg font-semibold tracking-tight text-base-content">
            {skill.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <span className={`text-sm font-medium ${level.text}`}>
              {skill.level}
            </span>
          </div>
        </div>

        <div className="relative mt-auto pt-6">
          <div className="h-px w-full bg-base-content/10" />
          <div className="mt-4 flex items-center justify-between text-xs text-base-content/45">
              <span>Learning since {formatDate(skill.started)}</span>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    
  );
}

export default SkillCard;