import useActiveSection from "../hooks/useActiveSection";
import profile from "../assets/profile.jpg";

const NavItem = ({ id, label, active }) => {
  const isActive = active === id;
  return (
    <a
      href={`#${id}`}
      aria-current={isActive ? "page" : undefined}
      className={
        "px-3 py-2 rounded-lg flex items-center gap-3 transition-colors " +
        (isActive
          ? "bg-gray-100 text-gray-900 border-l-4 border-gray-900"
          : "text-gray-600 hover:bg-gray-50")
      }
    >
      <span className="text-sm">{label}</span>
    </a>
  );
};

export default function Sidebar() {
  const ids = ["hero", "about", "skill","projects"];
  const active = useActiveSection(ids);

  return (
    <aside className="hidden md:flex flex-col justify-between w-72 h-screen fixed left-0 top-0 border-r border-gray-200 bg-gray-50 px-6 py-8">
      <div>
        <div className="flex flex-col items-center text-center">
          <img
            src={profile}
            alt="프로필 사진"
            className="h-24 w-24 rounded-2xl object-cover ring-1 ring-gray-200 shadow-inner"
            loading="lazy"
            draggable={false}
          />          
          {/* <div className="h-24 w-24 rounded-2xl bg-gray-200 shadow-inner" /> */}
          <h1 className="mt-4 text-xl font-bold tracking-tight">Sxxngii</h1>
          <p className="text-xs tracking-widest text-gray-500">Developer Portfolio</p>
        </div>

        <hr className="my-6 border-gray-200" />

        <nav className="flex flex-col space-y-2">
          <NavItem id="hero" label="홈" active={active} />
          <NavItem id="about" label="소개" active={active} />
          <NavItem id="skill" label="스킬" active={active} />
          <NavItem id="projects" label="프로젝트" active={active} />
        </nav>
      </div>
    </aside>
  );
}