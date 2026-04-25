import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SaudiEase - Professional IT & Digital Solutions in Al Jubail, Eastern Province";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gradient circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(230,62,101,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-60px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top bar accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #e63e65 0%, #3b82f6 50%, #10b981 100%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            textAlign: "center",
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-2px",
              marginBottom: "8px",
              display: "flex",
            }}
          >
            SaudiEase
          </div>

          {/* Divider line */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #e63e65, #3b82f6)",
              borderRadius: "2px",
              marginBottom: "24px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#a0aec0",
              fontWeight: 500,
              marginBottom: "40px",
              maxWidth: "700px",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Professional IT & Digital Solutions for Saudi Businesses
          </div>

          {/* Service badges */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Web Development", "Mobile Apps", "E-Invoicing", "Branding", "Digital Marketing"].map(
              (service) => (
                <div
                  key={service}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#cbd5e1",
                    fontSize: 14,
                    fontWeight: 500,
                    display: "flex",
                  }}
                >
                  {service}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#64748b",
            fontSize: 14,
          }}
        >
          <span>🇸🇦</span>
          <span>Al Jubail • Eastern Province • Saudi Arabia</span>
          <span style={{ margin: "0 8px" }}>|</span>
          <span>saudiease.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
