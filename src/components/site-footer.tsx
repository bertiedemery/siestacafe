import { Link } from "@tanstack/react-router";

type SiteFooterProps = {
  showHomeLink?: boolean;
};

/**
 * Shared site footer: company details, privacy notice, and a build credit.
 * Company details reflect Siesta Bistro Ltd (company no. 17283942) as
 * discussed for the client handoff. No personal data is collected by this site.
 */
export function SiteFooter({ showHomeLink = false }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-prose py-12 text-sm text-muted-foreground">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company details */}
          <div>
            <h3 className="font-display text-base font-semibold text-foreground">
              Siesta Café, Windsor
            </h3>
            <p className="mt-3 leading-relaxed">
              13 High St
              <br />
              Windsor SL4 1LD
              <br />
              +44 0755 767 2909
            </p>
            <p className="mt-3 leading-relaxed">
              Siesta Bistro Ltd
              <br />
              Company no. 17283942 (England & Wales)
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col gap-2">
            <h3 className="font-display text-base font-semibold text-foreground">
              Explore
            </h3>
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/menu" className="hover:text-foreground">
              Menu
            </Link>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
          </nav>

          {/* Privacy notice */}
          <div>
            <h3 className="font-display text-base font-semibold text-foreground">
              Privacy
            </h3>
            <p className="mt-3 leading-relaxed">
              This website does not collect any personal data. Contact is by
              phone only, so no personal information is stored or shared
              online. No cookies or tracking tools are used.
            </p>
            <p className="mt-3 leading-relaxed">
              Menu and opening times are provided for guidance and may change.
              Please ask staff about allergens before ordering.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <span>
            © {year} Siesta Café, Windsor. All rights reserved.
          </span>
          {showHomeLink ? (
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-foreground/50 px-5 py-2 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              ← Back to home
            </Link>
          ) : (
            <span>
              Website by B & C Demery
            </span>
          )}
        </div>
        {showHomeLink ? (
          <div className="mt-3 text-center">
            <span>Website by B & C Demery</span>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
