import fs from 'fs';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  // A4 size: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  const dark = rgb(0.1, 0.1, 0.1);
  const muted = rgb(0.35, 0.35, 0.35);
  const blue = rgb(0.08, 0.42, 0.74);

  let y = height - 42;

  // Header
  page.drawText('AKANKSHA PAWAR', {
    x: 45,
    y: y,
    size: 24,
    font: timesBold,
    color: dark,
  });

  // Right Links & Contact
  page.drawText('Portfolio', { x: width - 150, y: y + 2, size: 8.5, font: helveticaBold, color: blue });
  page.drawText('Mumbai / Pune, India', { x: width - 150, y: y - 10, size: 8, font: helvetica, color: muted });
  page.drawText('akankshapuiux01@gmail.com', { x: width - 150, y: y - 20, size: 8, font: helvetica, color: muted });
  page.drawText('+91 93244 02564', { x: width - 150, y: y - 30, size: 8, font: helvetica, color: muted });

  y -= 14;
  page.drawText('UI/UX Designer  *  UX Researcher  *  Interaction Design', {
    x: 45,
    y: y,
    size: 9.5,
    font: helveticaBold,
    color: muted,
  });

  y -= 24;
  // PROFILE
  page.drawText('PROFILE', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  y -= 12;
  page.drawText(
    'UI/UX designer in my final year at MIT Institute of Design, driven by curiosity about how products fail people. I actively look for friction in everyday apps',
    { x: 45, y, size: 8, font: helvetica, color: dark }
  );
  y -= 10;
  page.drawText(
    'and flows, then work backward through user interviews, research, and iteration to design screens that genuinely solve the problem. I care about tangible',
    { x: 45, y, size: 8, font: helvetica, color: dark }
  );
  y -= 10;
  page.drawText(
    'outcomes, not just polished visuals.',
    { x: 45, y, size: 8, font: helvetica, color: dark }
  );

  // CORE SKILLS
  y -= 16;
  page.drawText('CORE SKILLS', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  y -= 11;
  page.drawText(
    'User interviews * Personas * Surveys * Contextual inquiry * Competitive analysis * Heuristic evaluation * Usability testing * A/B testing * Journey & empathy',
    { x: 45, y, size: 7.5, font: helvetica, color: dark }
  );
  y -= 9.5;
  page.drawText(
    'mapping * UI design * Information Architecture * User flows & wireframing * Prototyping * Mobile app design * Design systems * Visual design & typography *',
    { x: 45, y, size: 7.5, font: helvetica, color: dark }
  );
  y -= 9.5;
  page.drawText('Figma Make * Figma Sites * HTML * CSS', { x: 45, y, size: 7.5, font: helvetica, color: dark });

  // TOOLS
  y -= 14;
  page.drawText('TOOLS', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  y -= 11;
  page.drawText('Figma * FigJam * Photoshop * Illustrator * Canva * VS Code * Xcode * Android Studio * ChatGPT * Claude', {
    x: 45,
    y,
    size: 7.5,
    font: helvetica,
    color: dark,
  });

  // OTHER SKILLS
  y -= 14;
  page.drawText('OTHER SKILLS', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  y -= 11;
  page.drawText(
    'Illustration * Branding * Brand strategy * Logo & brand identity design * Layout design * Visual hierarchy * Grid systems * Color palette design * Iconography *',
    { x: 45, y, size: 7.5, font: helvetica, color: dark }
  );
  y -= 9.5;
  page.drawText(
    'Photo editing * Dashboard & data UI design * Vibe coding (AI-assisted) * Critical thinking * Presentation & communication * Team collaboration',
    { x: 45, y, size: 7.5, font: helvetica, color: dark }
  );

  // EXPERIENCE
  y -= 16;
  page.drawText('EXPERIENCE', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  // Job 1
  y -= 12;
  page.drawText('UI/UX Design Intern -- Jio Assurance, Reliance Jio Platforms Ltd.', { x: 45, y, size: 8.5, font: helveticaBold, color: dark });
  page.drawText('(May 2026 - Jul 2026)', { x: width - 135, y, size: 8, font: helvetica, color: muted });
  y -= 9;
  page.drawText('Live product: JioSphere Browser (Web, iOS, Android, STB) -- Figma, FigJam -- Mumbai', { x: 45, y, size: 7.5, font: helveticaOblique, color: blue });
  y -= 9.5;
  page.drawText('- Ran a heuristic evaluation and usability testing of JioSphere browser across 4 platforms against Nielsen heuristics.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Reworked the information architecture and built low- to high-fidelity wireframes for all four platforms.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Took the Desktop redesign from concept to an interactive Figma prototype, presenting proposed UX changes to stakeholders.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Managed own timeline and walked mentor through design decisions in regular check-ins.', { x: 52, y, size: 7.5, font: helvetica, color: dark });

  // Job 2
  y -= 13;
  page.drawText('Freelance UI/UX Designer -- Lookout (Driver Safety Monitoring App)', { x: 45, y, size: 8.5, font: helveticaBold, color: dark });
  page.drawText('(2025)', { x: width - 75, y, size: 8, font: helvetica, color: muted });
  y -= 9;
  page.drawText('Funded IoT + ML product -- Figma -- Pune', { x: 45, y, size: 7.5, font: helveticaOblique, color: blue });
  y -= 9.5;
  page.drawText('- Sole designer on a funded IoT + ML product, covering brand identity to production-ready screens handed off to engineering.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Built brand identity (logo, name, colour palette) and 15+ screens across light/dark mode and iOS/Android.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Designed real-time safety analytics dashboard converting raw IoT sensor data into scores, alert breakdowns, and trend graphs.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Designed live monitor combining dashcam feed with real-time alert overlays, readable at a glance under pressure.', { x: 52, y, size: 7.5, font: helvetica, color: dark });

  // ACADEMIC PROJECTS
  y -= 15;
  page.drawText('ACADEMIC PROJECTS', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  // Project 1
  y -= 12;
  page.drawText('Design for Special Needs', { x: 45, y, size: 8.5, font: helveticaBold, color: dark });
  y -= 9;
  page.drawText('UX Research & Mobile App Design -- MIT ADT University', { x: 45, y, size: 7.5, font: helveticaOblique, color: blue });
  y -= 9.5;
  page.drawText('- Conducted primary and secondary research on behavioural, sensory, and learning needs of children on autism spectrum.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Translated research insights into user flows and design opportunities, developing Ishaara, an autism-support mobile app.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Designed key features including interactive learning, AR scanning, visual guidance, and community support.', { x: 52, y, size: 7.5, font: helvetica, color: dark });

  // Project 2
  y -= 13;
  page.drawText('Astra - Behavioral Interaction System for Ethical AI', { x: 45, y, size: 8.5, font: helveticaBold, color: dark });
  y -= 9;
  page.drawText('UX Research & Interaction Design -- MIT ADT University', { x: 45, y, size: 7.5, font: helveticaOblique, color: blue });
  y -= 9.5;
  page.drawText('- Researched emotional dependence and parasocial attachment among young adults using AI for emotional support.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Developed Astra, an AI interaction system designed to help users gain clarity and maintain healthier boundaries with AI.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Designed the Mirror -> Reframe -> Redirect framework to encourage self-awareness, autonomy, and real-world connection.', { x: 52, y, size: 7.5, font: helvetica, color: dark });

  // LEADERSHIP
  y -= 15;
  page.drawText('LEADERSHIP & CAMPUS INVOLVEMENT', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  y -= 12;
  page.drawText('Graphic Design Team Member -- Natak Bitak Drama Club, MIT Institute of Design', { x: 45, y, size: 8, font: helveticaBold, color: dark });
  y -= 9;
  page.drawText('- Designed posters and social media creatives for college productions, keeping branding consistent under tight deadlines.', { x: 52, y, size: 7.5, font: helvetica, color: dark });
  y -= 9;
  page.drawText('- Reviewed and approved junior designers work, checking layouts and timelines to keep team on track.', { x: 52, y, size: 7.5, font: helvetica, color: dark });

  // EDUCATION
  y -= 15;
  page.drawText('EDUCATION', { x: 45, y: y, size: 9, font: helveticaBold, color: dark });
  y -= 4;
  page.drawLine({ start: { x: 45, y }, end: { x: width - 45, y }, thickness: 0.75, color: dark });

  y -= 12;
  page.drawText('Bachelor of Design (B.Des) in UI/UX Design', { x: 45, y, size: 8.5, font: helveticaBold, color: dark });
  page.drawText('2023 - 2027 (Currently in 4th Year)', { x: width - 180, y, size: 8, font: helveticaBold, color: dark });
  y -= 9;
  page.drawText('MIT ADT University -- Loni Kalbhor, Pune', { x: 45, y, size: 7.5, font: helvetica, color: blue });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/assets/Akanksha_Pawar_Resume.pdf', pdfBytes);
  console.log('Valid resume PDF generated at public/assets/Akanksha_Pawar_Resume.pdf');
}

generateResumePdf();
