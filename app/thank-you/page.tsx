export default function ThankYouPage() {
  return (
    <main className="thank-you">
      <section className="thank-you-panel">
        <img className="thank-you-logo" src="/assets/p2d-logo.jpg" alt="P2D Refinishing - You can count on us" width="1024" height="209" />
        <p className="eyebrow">Quote request received</p>
        <h1>
          Thanks. P2D will <span>follow up soon.</span>
        </h1>
        <p>
          Your kitchen cabinet refinishing request has been sent. A member of the P2D team will review the details and contact you with the next step.
        </p>
        <a className="pill-button" href="/">
          Back to landing page
        </a>
      </section>
    </main>
  );
}
