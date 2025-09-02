import { NavLink } from 'react-router-dom';

function Sidebar() {
  const base = 'font-bold text-base w-fit px-2 py-1 rounded-lg';
  const hover = 'hover:bg-secondary hover:text-black';
  const active = 'bg-secondary text-black';

  return (
    <div className="w-[300px] h-screen overflow-hidden">
      <nav>
        <ul className="list-none flex flex-col justify-center gap-10 overflow-hidden">
          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Follow for updates</p>
            <a href="https://github.com/Alaalawara" target="_blank" rel="noreferrer"
               className={`${base} ${hover}`}>
              Github
            </a>
            <a href="https://x.com/loops_infinity" target="_blank" rel="noreferrer"
               className={`${base} ${hover}`}>
              Twitter / X
            </a>
          </li>

          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Buttons</p>
             <NavLink
              to="/components/buttons/button"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
              button
            </NavLink>

            <NavLink
              to="/components/buttons/3d-button"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
              end
            >
              3d button
            </NavLink>

            <NavLink
              to="/components/buttons/ontapbutton"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Ontap button
            </NavLink>
          </li>

          <li className="flex flex-col gap-2">
            <p className="text-foreground font-bold text-xl px-2">Cards</p>
            <NavLink
              to="/cards-1"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Cards 1
            </NavLink>

            <NavLink
              to="/components/cards/hovercard"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Hover Card
            </NavLink>
            <NavLink
              to="/components/cards/BlockTextCard"
              className={({ isActive }) =>
                `${base} ${isActive ? active : hover}`
              }
            >
              Block Text Card
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/createuser"
              className={({ isActive }) =>
                `${isActive ? 'font-bold' : 'font-bold'}`
              }
              style={{ color: 'var(--dark)', textDecoration: 'none' }}
            >
              Create user
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
