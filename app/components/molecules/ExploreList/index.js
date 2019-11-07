import Link from "next/link";
import { withTranslation } from "../../../i18n";

const ExploreList = ({ t }) => (
  <ul>
    <li>
      <Link href="/community">
        <a>{t("community")}</a>
      </Link>
    </li>
    <li>
      <Link href="/groups">
        <a>{t("all-groups")}</a>
      </Link>
    </li>
    <li>
      <Link href="/events">
        <a>{t("all-events")}</a>
      </Link>
    </li>
    <li>
      <Link href="/topics">
        <a>{t("all-topics")}</a>
      </Link>
    </li>
    <li>
      <Link href="/members">
        <a>{t("all-members")}</a>
      </Link>
    </li>
  </ul>
);

export default withTranslation("header")(ExploreList);
