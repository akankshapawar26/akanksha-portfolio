import React from 'react';

export const CategoryTicker: React.FC = () => {
  const items = [
    'USER RESEARCH',
    'UX DESIGN',
    'UI DESIGN',
    'VISUAL DESIGN',
    'BRAND IDENTITY',
    'PROTOTYPING',
  ];

  // Authentic in-between sparkle/diamond shape matching Rectangle 695.png
  const StarShape = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      className="shrink-0 mx-6 sm:mx-8 inline-block select-none"
      aria-hidden="true"
    >
      <path
        d="M0.24385 8.48456C-0.0784474 8.28275 -0.0803963 7.80375 0.240439 7.59963C1.25293 6.95547 3.10509 5.71857 4.24553 4.60458C5.50871 3.37068 6.90002 1.30948 7.58823 0.238511C7.79051 -0.076272 8.25929 -0.0792065 8.46405 0.233969C9.12937 1.25155 10.4363 3.16199 11.5987 4.33474C12.8062 5.55299 14.7923 6.91825 15.8351 7.60292C16.1478 7.80826 16.145 8.27682 15.8299 8.47852C14.7843 9.14781 12.7993 10.4816 11.5987 11.6879C10.4289 12.8632 9.13412 14.7911 8.47016 15.8293C8.26532 16.1496 7.78657 16.1466 7.58549 15.8239C6.93695 14.7832 5.67292 12.8569 4.51537 11.6879C3.31296 10.4736 1.31049 9.15243 0.24385 8.48456Z"
        fill="#222121"
      />
    </svg>
  );

  return (
    <div
      className="w-full flex items-center overflow-hidden select-none"
      style={{
        height: '72px',
        padding: '22px 0 21px 0',
        background: '#D4E2FD',
      }}
    >
      <div className="flex shrink-0 animate-marquee items-center will-change-transform">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex shrink-0 items-center">
            {items.map((text, idx) => (
              <React.Fragment key={idx}>
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    color: '#000',
                  }}
                  className="whitespace-nowrap tracking-normal"
                >
                  {text}
                </span>
                <StarShape />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
