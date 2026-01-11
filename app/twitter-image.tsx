import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "OpenSploit - The Open Source Offensive Security Agent";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0908",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1614 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1a0a0a 0%, transparent 50%)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <svg
            width="500"
            height="72"
            viewBox="0 0 279 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* OPEN - Gray */}
            <path d="M18 30H6V18H18V30Z" fill="#656363" />
            <path d="M18 12H6V30H18V12ZM24 36H0V6H24V36Z" fill="#CFCECD" />
            <path d="M48 30H36V18H48V30Z" fill="#656363" />
            <path d="M36 30H48V12H36V30ZM54 36H36V42H30V6H54V36Z" fill="#CFCECD" />
            <path d="M84 24V30H66V24H84Z" fill="#656363" />
            <path d="M84 24H66V30H84V36H60V6H84V24ZM66 18H78V12H66V18Z" fill="#CFCECD" />
            <path d="M108 30H96V12H108V30Z" fill="#656363" />
            <path d="M114 36H108V12H114V36ZM108 12H96V36H90V6H108V12Z" fill="#CFCECD" />
            {/* SPLOIT - Red */}
            <path d="M132 18H144V24H132V18Z" fill="#EF9A9A" />
            <path
              d="M120 6H150V12H120V6ZM120 12H126V18H120V12ZM120 18H150V24H120V18ZM144 24H150V30H144V24ZM120 30H150V36H120V30Z"
              fill="#FF5252"
            />
            <path d="M174 30H162V18H174V30Z" fill="#EF9A9A" />
            <path d="M162 30H174V12H162V30ZM180 36H162V42H156V6H180V36Z" fill="#FF5252" />
            <path d="M204 30H192V36H204V30Z" fill="#EF9A9A" />
            <path d="M210 36H186V6H192V30H210V36Z" fill="#FF5252" />
            <path d="M234 30H222V18H234V30Z" fill="#EF9A9A" />
            <path d="M234 12H222V30H234V12ZM240 36H216V6H240V36Z" fill="#FF5252" />
            <path d="M252 36H246V6H252V36Z" fill="#FF5252" />
            <path d="M276 12H264V36H270V12H276Z" fill="#EF9A9A" />
            <path d="M279 12H256V6H279V12ZM270 36H264V12H270V36Z" fill="#FF5252" />
          </svg>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontFamily: "system-ui, sans-serif",
            color: "#a8a4a4",
            marginBottom: 40,
            letterSpacing: "-0.02em",
          }}
        >
          The open source offensive security agent
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 18,
            fontFamily: "system-ui, sans-serif",
            color: "#686464",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 6,
                height: 6,
                backgroundColor: "#FF5252",
                borderRadius: 3,
              }}
            />
            <span>25+ Security Tools</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 6,
                height: 6,
                backgroundColor: "#FF5252",
                borderRadius: 3,
              }}
            />
            <span>AI-Powered</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 6,
                height: 6,
                backgroundColor: "#FF5252",
                borderRadius: 3,
              }}
            />
            <span>Local-First</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 6,
                height: 6,
                backgroundColor: "#FF5252",
                borderRadius: 3,
              }}
            />
            <span>Open Source</span>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            fontSize: 16,
            fontFamily: "system-ui, monospace",
            color: "#4a4646",
          }}
        >
          opensploit.ai
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
