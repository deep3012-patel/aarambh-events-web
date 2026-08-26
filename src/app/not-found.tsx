import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="shell"><p className="eyebrow">404</p><h1>This page has left the guest list.</h1><p>Let&apos;s take you back to the celebrations.</p><Link className="button" href="/">Back to home</Link></div></section>;
}
