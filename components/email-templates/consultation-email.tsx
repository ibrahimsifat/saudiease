import type * as React from "react";
import type { ConsultationFormData } from "@/lib/email";
import { format } from "date-fns";

interface ConsultationEmailTemplateProps extends ConsultationFormData {}

export const ConsultationEmailTemplate: React.FC<
  ConsultationEmailTemplateProps
> = ({
  name,
  email,
  phone,
  companyName,
  companySize,
  industry,
  serviceInterest,
  consultationDate,
  consultationTime,
  consultationType,
  projectDescription,
  hearAboutUs,
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
            New Consultation Request
          </h1>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            You have received a new consultation request from your website.
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
            {companyName && (
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
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {companyName}
                </td>
              </tr>
            )}
            {companySize && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Company Size:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {companySize}
                </td>
              </tr>
            )}
            {industry && (
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Industry:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {industry}
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
            <h3 style={{ margin: "0 0 10px 0", color: "#006064" }}>
              Consultation Details:
            </h3>

            <table
              width="100%"
              cellPadding="10"
              cellSpacing="0"
              style={{ borderCollapse: "collapse" }}
            >
              {serviceInterest && (
                <tr>
                  <td
                    style={{
                      borderBottom: "1px solid #eeeeee",
                      width: "30%",
                      fontWeight: "bold",
                    }}
                  >
                    Service Interest:
                  </td>
                  <td style={{ borderBottom: "1px solid #eeeeee" }}>
                    {serviceInterest}
                  </td>
                </tr>
              )}
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #eeeeee",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Date:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {format(new Date(consultationDate), "MMMM d, yyyy")}
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
                  Time:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {consultationTime}
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
                  Type:
                </td>
                <td style={{ borderBottom: "1px solid #eeeeee" }}>
                  {consultationType === "virtual"
                    ? "Virtual Meeting"
                    : "In-Person Meeting"}
                </td>
              </tr>
              {hearAboutUs && (
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
                    {hearAboutUs}
                  </td>
                </tr>
              )}
            </table>

            {projectDescription && (
              <div style={{ marginTop: "20px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#006064" }}>
                  Project Description:
                </h4>
                <p
                  style={{
                    margin: "0",
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.5",
                  }}
                >
                  {projectDescription}
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
            This email was sent from the consultation scheduler on your Saudi
            Ease website.
          </p>
          <p style={{ margin: "0" }}>
            &copy; {new Date().getFullYear()} Saudi Ease. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>
);
