import { site } from "@/lib/site";

export async function Footer() {
  "use cache";
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <ul className="flex gap-5">
          <li>
            <a className="hover:text-foreground" href={site.links.github} rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={site.links.linkedin} rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={site.links.agency} rel="noopener noreferrer" target="_blank">
              Travel agency
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
