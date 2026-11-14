"use client";

// The reviewed offline presentation is served unchanged as a static asset.
// The iframe preserves presentation keyboard controls, fullscreen mode,
// animations, interactive graphs and dropdown behaviour.
export default function Page() {
  return (
    <main aria-label="Hybrid QML Research Explorer" style={{width:"100vw",height:"100dvh",margin:0,overflow:"hidden"}}>
      <iframe
        src="/viewer/index.html"
        title="Hybrid QML Research Explorer — интегрирано научно представяне"
        allowFullScreen
        style={{width:"100%",height:"100%",display:"block",border:0,background:"#08090B"}}
      />
    </main>
  );
}
