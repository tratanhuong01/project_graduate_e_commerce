import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";
import routes from "../../../routes";

const LevelUrl = ({ breadcrumbs }) => (
  <div className="w-full flex xl:w-4/5 mx-auto p-4 dark:text-white font-semibold">
    {breadcrumbs.map(({ match, breadcrumb }) => (
      <span
        key={match.url}
        className="px-2 border-r-2 border-solid border-gray-500 dark:border-gay-300"
      >
        <NavLink  to={match.url}>{breadcrumb}</NavLink>
      </span>
    ))}
  </div>
);

export default withBreadcrumbs(routes)(LevelUrl);
