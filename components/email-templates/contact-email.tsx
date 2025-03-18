import type { ContactFormData } from "@/lib/email";
import type * as React from "react";

interface ContactEmailTemplateProps extends ContactFormData {}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
  name,
  email,
  phone,
  company,
  service,
  budget,
  timeframe,
  message,
  hearAbout,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      color: "#333333",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{ borderCollapse: "collapse" }}
    >
      <tr>
        <td
          style={{
            padding: "20px",
            backgroundColor: "#006064",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white", margin: "0", fontSize: "24px" }}>
            New Contact Form Submission
          </h1>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            You have received a new contact form submission from your website.
          </p>

          <table
            width="100%"
            cellPadding="10"
            cellSpacing="0"
            style={{ borderCollapse: "collapse" }}
          >
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #eeeeee",
                  width: "30%",
                  fontWeight: "bold",
                }}
              >
                Name:
              </td>
              <td style={{ borderBottom: "1px solid #eeeeee" }}>{name}</td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #eeeeee",
                  width: "30%",
                  fontWeight: "bold",
                }}
              >
                Email:
              </td>
              <td style={{ borderBottom: "1px solid #eeeeee" }}>
                <a
                  href={`mailto:${email}`}
                  style={{ color: "#006064", textDecoration: "none" }}
                >
                  {email}
                </a>
              </td>
            </tr>
            {phone && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Phone:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>{phone}</td>
              </tr>
            )}
            {company && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Company:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>{company}</td>
              </tr>
            )}
            {service && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Service:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>{service}</td>
              </tr>
            )}
            {budget && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Budget:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>{budget}</td>
              </tr>
            )}
            {timeframe && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Timeframe:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {timeframe}
                </td>
              </tr>
            )}
            {hearAbout && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Heard About Us:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {hearAbout}
                </td>
              </tr>
            )}
          </table>

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "4px",
              border: "1px solid #eeeeee",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#006064" }}>Message:</h3>
            <p
              style={{ margin: "0", whiteSpace: "pre-wrap", lineHeight: "1.5" }}
            >
              {message}
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td
          style={{
            padding: "20px",
            backgroundColor: "#f1f1f1",
            textAlign: "center",
            fontSize: "14px",
            color: "#666666",
          }}
        >
          <p style={{ margin: "0 0 10px 0" }}>
            This email was sent from the contact form on your Saudi Ease
            website.
          </p>
          <p style={{ margin: "0" }}>
            &copy; {new Date().getFullYear()} Saudi Ease. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>
);
