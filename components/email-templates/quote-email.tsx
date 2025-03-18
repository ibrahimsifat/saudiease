import type { QuoteFormData } from "@/lib/email";
import type * as React from "react";

interface QuoteEmailTemplateProps extends QuoteFormData {}

export const QuoteEmailTemplate: React.FC<QuoteEmailTemplateProps> = ({
  name,
  email,
  phone,
  company,
  projectType,
  complexity,
  features,
  estimatedPrice,
  estimatedTimeWeeks,
  message,
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
            New Quote Request
          </h1>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            You have received a new quote request from your website.
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
            <h3 style={{ margin: "0 0 10px 0", color: "#006064" }}>
              Project Details:
            </h3>

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
                  Project Type:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {projectType}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Complexity:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {complexity}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                    verticalAlign: "top",
                  }}
                >
                  Features:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  <ul style={{ margin: "0", paddingLeft: "20px" }}>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Estimated Price:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {new Intl.NumberFormat("en-SA", {
                    style: "currency",
                    currency: "SAR",
                  }).format(estimatedPrice)}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Estimated Timeline:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {estimatedTimeWeeks} weeks
                </td>
              </tr>
            </table>

            {message && (
              <div style={{ marginTop: "20px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#006064" }}>
                  Additional Information:
                </h4>
                <p
                  style={{
                    margin: "0",
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.5",
                  }}
                >
                  {message}
                </p>
              </div>
            )}
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
            This email was sent from the quote estimator on your Saudi Ease
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
