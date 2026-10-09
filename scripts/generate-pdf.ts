import fs from 'fs';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  // Standard A4 dimensions: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors matching the user's resume design
  const dark = rgb(0.08, 0.08, 0.08); // Primary dark charcoal
  const bodyText = rgb(0.14, 0.14, 0.14); // Body dark
  const mutedText = rgb(0.42, 0.42, 0.42); // Gray subtitle
  const blueLink = rgb(0.08, 0.45, 0.78); // Blue links
  const subMetaBlue = rgb(0.28, 0.48, 0.65); // Muted slate/blue for subheadings
  const dateColor = rgb(0.45, 0.58, 0.7); // Soft slate blue for dates
  const dividerLineColor = rgb(0.15, 0.15, 0.15); // Thin divider
  const blueDividerColor = rgb(0.24, 0.48, 0.72); // Accent blue divider for leadership

  const marginX = 42;
  const contentWidth = width - marginX * 2;
  let y = height - 44;

  // -------------------------------------------------------------
  // HEADER
  // -------------------------------------------------------------
  // Left: Name & Subtitle
  page.drawText('AKANKSHA PAWAR', {
    x: marginX,
    y: y,
    size: 23,
    font: helveticaBold,
    color: dark,
  });

  // Right: Contact info with icons
  const contactRightX = width - marginX;
  const contactTextX = contactRightX - 120;
  const iconX = contactTextX - 14;

  // 1. Portfolio
  // Portfolio icon
  page.drawRectangle({
    x: iconX,
    y: y + 2,
    width: 9,
    height: 7,
    borderColor: blueLink,
    borderWidth: 0.8,
    color: rgb(0.92, 0.96, 1.0),
  });
  page.drawLine({
    start: { x: iconX + 2.5, y: y + 9 },
    end: { x: iconX + 6.5, y: y + 9 },
    thickness: 0.8,
    color: blueLink,
  });
  page.drawText('Portfolio', {
    x: contactTextX,
    y: y + 2,
    size: 8,
    font: helveticaBold,
    color: blueLink,
  });

  // 2. LinkedIn
  const line2Y = y - 10;
  // 'in' badge icon
  page.drawRectangle({
    x: iconX,
    y: line2Y - 1,
    width: 8.5,
    height: 8.5,
    color: blueLink,
    borderWidth: 0,
  });
  page.drawText('in', {
    x: iconX + 1.5,
    y: line2Y + 0.5,
    size: 6,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  });
  page.drawText('Linkedin', {
    x: contactTextX,
    y: line2Y,
    size: 8,
    font: helveticaBold,
    color: blueLink,
  });

  // 3. Location
  const line3Y = y - 21;
  // Map Pin icon
  page.drawCircle({
    x: iconX + 4,
    y: line3Y + 5,
    size: 3,
    borderColor: dark,
    borderWidth: 0.8,
  });
  page.drawLine({
    start: { x: iconX + 4, y: line3Y + 3 },
    end: { x: iconX + 4, y: line3Y },
    thickness: 0.9,
    color: dark,
  });
  page.drawText('Mumbai/Pune, India', {
    x: contactTextX,
    y: line3Y,
    size: 7.5,
    font: helvetica,
    color: dark,
  });

  // 4. Email
  const line4Y = y - 31;
  // Mail envelope icon
  page.drawRectangle({
    x: iconX - 0.5,
    y: line4Y,
    width: 9,
    height: 6.5,
    borderColor: dark,
    borderWidth: 0.7,
  });
  page.drawLine({
    start: { x: iconX - 0.5, y: line4Y + 6.5 },
    end: { x: iconX + 4, y: line4Y + 3 },
    thickness: 0.7,
    color: dark,
  });
  page.drawLine({
    start: { x: iconX + 8.5, y: line4Y + 6.5 },
    end: { x: iconX + 4, y: line4Y + 3 },
    thickness: 0.7,
    color: dark,
  });
  page.drawText('akankshapuiux01@gmail.com', {
    x: contactTextX,
    y: line4Y,
    size: 7.5,
    font: helvetica,
    color: dark,
  });

  // 5. Phone
  const line5Y = y - 41;
  // Phone receiver icon
  page.drawText('(', { x: iconX, y: line5Y + 1, size: 7.5, font: helveticaBold, color: dark });
  page.drawText('+91 93244 02564', {
    x: contactTextX,
    y: line5Y,
    size: 7.5,
    font: helvetica,
    color: dark,
  });

  // Subtitle
  y -= 15;
  page.drawText('UI/UX Designer  ·  UX Researcher  ·  Interaction Design', {
    x: marginX,
    y: y,
    size: 9.5,
    font: helvetica,
    color: dark,
  });

  y -= 30;

  // Helper for section header
  function drawSectionHeader(title: string, isBlue = false) {
    y -= 12;
    page.drawText(title, {
      x: marginX,
      y: y,
      size: 8.5,
      font: helveticaBold,
      color: dark,
    });
    y -= 3.5;
    page.drawLine({
      start: { x: marginX, y: y },
      end: { x: width - marginX, y: y },
      thickness: isBlue ? 1.0 : 0.6,
      color: isBlue ? blueDividerColor : dividerLineColor,
    });
    y -= 9;
  }

  // -------------------------------------------------------------
  // PROFILE
  // -------------------------------------------------------------
  drawSectionHeader('PROFILE');
  page.drawText(
    'UI/UX designer in my final year at MIT Institute of Design, driven by curiosity about how products fail people. I actively look for friction in everyday apps',
    { x: marginX, y, size: 7.5, font: helvetica, color: bodyText }
  );
  y -= 9.5;
  page.drawText(
    'and flows, then work backward through user interviews, research, and iteration to design screens that genuinely solve the problem. I care about tangible',
    { x: marginX, y, size: 7.5, font: helvetica, color: bodyText }
  );
  y -= 9.5;
  page.drawText('outcomes, not just polished visuals.', {
    x: marginX,
    y,
    size: 7.5,
    font: helvetica,
    color: bodyText,
  });

  // -------------------------------------------------------------
  // CORE SKILLS
  // -------------------------------------------------------------
  drawSectionHeader('CORE SKILLS');
  page.drawText(
    'User interviews · Personas · Surveys · Contextual inquiry · Competitive analysis · Heuristic evaluation · Usability testing · A/B testing · Journey & empathy',
    { x: marginX, y, size: 7.2, font: helvetica, color: bodyText }
  );
  y -= 9;
  page.drawText(
    'mapping · UI design · Information Architecture · User flows & wireframing · Prototyping · Mobile app design · Design systems · Visual design & typography ·',
    { x: marginX, y, size: 7.2, font: helvetica, color: bodyText }
  );
  y -= 9;
  page.drawText('Figma Make · Figma Sites · HTML · CSS', {
    x: marginX,
    y,
    size: 7.2,
    font: helvetica,
    color: bodyText,
  });

  // -------------------------------------------------------------
  // TOOLS
  // -------------------------------------------------------------
  drawSectionHeader('TOOLS');
  page.drawText(
    'Figma · FigJam · Photoshop · Illustrator · Canva · VS Code · Xcode · Android Studio · ChatGPT · Claude',
    { x: marginX, y, size: 7.5, font: helvetica, color: bodyText }
  );

  // -------------------------------------------------------------
  // OTHER SKILLS
  // -------------------------------------------------------------
  drawSectionHeader('OTHER SKILLS');
  page.drawText(
    'Illustration · Branding · Brand strategy · Logo & brand identity design · Layout design · Visual hierarchy · Grid systems · Color palette design · Iconography ·',
    { x: marginX, y, size: 7.2, font: helvetica, color: bodyText }
  );
  y -= 9;
  page.drawText(
    'Photo editing · Dashboard & data UI design · Vibe coding (AI-assisted, to support design work) · Critical thinking · Presentation & communication · Team',
    { x: marginX, y, size: 7.2, font: helvetica, color: bodyText }
  );
  y -= 9;
  page.drawText('collaboration', {
    x: marginX,
    y,
    size: 7.2,
    font: helvetica,
    color: bodyText,
  });

  // -------------------------------------------------------------
  // EXPERIENCE
  // -------------------------------------------------------------
  drawSectionHeader('EXPERIENCE');

  // Job 1
  page.drawText('UI/UX Design Intern — Jio Assurance, Reliance Jio Platforms Ltd.', {
    x: marginX,
    y,
    size: 8,
    font: helveticaBold,
    color: dark,
  });
  const date1 = '(May 2026 – Jul 2026)';
  const date1Width = helvetica.widthOfTextAtSize(date1, 7.5);
  page.drawText(date1, {
    x: width - marginX - date1Width,
    y,
    size: 7.5,
    font: helvetica,
    color: dateColor,
  });

  y -= 9;
  page.drawText(
    'Live product: JioSphere Browser (Web, iOS, Android, STB) · Figma, FigJam · Mumbai',
    { x: marginX, y, size: 7.2, font: helvetica, color: subMetaBlue }
  );

  y -= 9;
  const drawBullet = (text: string) => {
    page.drawCircle({ x: marginX + 4, y: y + 2.5, size: 1.2, color: dark });
    page.drawText(text, { x: marginX + 11, y, size: 7.2, font: helvetica, color: bodyText });
    y -= 9;
  };

  drawBullet(
    'Ran a heuristic evaluation and usability testing of the JioSphere browser across four platforms (Web, iOS, Android, STB) against Nielsen’s heuristics,'
  );
  page.drawText('flagging and ranking issues by severity.', {
    x: marginX + 11,
    y,
    size: 7.2,
    font: helvetica,
    color: bodyText,
  });
  y -= 9;

  drawBullet(
    'Reworked the information architecture and built low- to high-fidelity wireframes for all four platforms based on what the evaluation turned up.'
  );
  drawBullet(
    'Took the Desktop redesign from concept to an interactive Figma prototype, presenting the proposed UX changes to stakeholders.'
  );
  drawBullet(
    'Managed my own timeline and walked my mentor through design decisions in regular check-ins.'
  );

  y -= 3;
  // Job 2
  page.drawText('Freelance UI/UX Designer — Lookout (Driver Safety Monitoring App)', {
    x: marginX,
    y,
    size: 8,
    font: helveticaBold,
    color: dark,
  });
  const date2 = '(2025)';
  const date2Width = helvetica.widthOfTextAtSize(date2, 7.5);
  page.drawText(date2, {
    x: width - marginX - date2Width,
    y,
    size: 7.5,
    font: helvetica,
    color: dateColor,
  });

  y -= 9;
  page.drawText('Funded IoT + ML product · Figma · Pune', {
    x: marginX,
    y,
    size: 7.2,
    font: helvetica,
    color: subMetaBlue,
  });

  y -= 9;
  drawBullet(
    'Sole designer on a funded IoT + ML product, covering everything from brand identity to production-ready screens handed off to engineering.'
  );
  drawBullet(
    'Built the brand identity (logo, name, colour palette) and 15+ screens across light/dark mode and iOS/Android, including onboarding, dashboard, and'
  );
  page.drawText('live monitor flows.', {
    x: marginX + 11,
    y,
    size: 7.2,
    font: helvetica,
    color: bodyText,
  });
  y -= 9;

  drawBullet(
    'Designed a real-time safety analytics dashboard that turns raw IoT sensor data into performance scores, alert breakdowns, and trend graphs.'
  );
  drawBullet(
    'Designed a live monitor screen combining dashcam feed with real-time alert overlays, kept simple enough to read at a glance under pressure; this'
  );
  page.drawText('shipped in the live product.', {
    x: marginX + 11,
    y,
    size: 7.2,
    font: helvetica,
    color: bodyText,
  });
  y -= 9;

  // -------------------------------------------------------------
  // ACADEMIC PROJECTS
  // -------------------------------------------------------------
  drawSectionHeader('ACADEMIC PROJECTS');

  // Project 1
  page.drawText('Design for Special Needs', {
    x: marginX,
    y,
    size: 8,
    font: helveticaBold,
    color: dark,
  });
  y -= 9;
  page.drawText('UX Research & Mobile App Design · MIT ADT University', {
    x: marginX,
    y,
    size: 7.2,
    font: helvetica,
    color: subMetaBlue,
  });
  y -= 9;
  drawBullet(
    'Conducted primary and secondary research on the behavioural, sensory, and learning needs of children on the autism spectrum.'
  );
  drawBullet(
    'Identified key challenges around learning, communication, sensory stimulation, and navigation.'
  );
  drawBullet(
    'Translated research insights into user flows and design opportunities, developing Ishaara, an autism-support mobile app.'
  );
  drawBullet(
    'Designed key features including interactive learning, AR scanning, visual guidance, and community support.'
  );

  y -= 3;
  // Project 2
  page.drawText('Astra – Behavioral Interaction System for Ethical AI', {
    x: marginX,
    y,
    size: 8,
    font: helveticaBold,
    color: dark,
  });
  y -= 9;
  page.drawText('UX Research & Interaction Design · MIT ADT University', {
    x: marginX,
    y,
    size: 7.2,
    font: helvetica,
    color: subMetaBlue,
  });
  y -= 9;
  drawBullet(
    'Researched emotional dependence and parasocial attachment among young adults using AI for emotional support.'
  );
  drawBullet(
    'Identified challenges around AI dependency, emotional validation, avoidance, and reduced real-world interaction.'
  );
  drawBullet(
    'Developed Astra, an AI interaction system designed to help users gain clarity and maintain healthier boundaries with AI.'
  );
  drawBullet(
    'Designed the Mirror -> Reframe -> Redirect framework to encourage self-awareness, autonomy, and real-world connection.'
  );

  // -------------------------------------------------------------
  // LEADERSHIP & CAMPUS INVOLVEMENT
  // -------------------------------------------------------------
  drawSectionHeader('LEADERSHIP & CAMPUS INVOLVEMENT', true);
  page.drawText('Graphic Design Team Member', {
    x: marginX,
    y,
    size: 8,
    font: helveticaBold,
    color: dark,
  });
  y -= 9;
  page.drawText('Natak Bitak Drama Club, MIT Institute of Design', {
    x: marginX,
    y,
    size: 7.2,
    font: helvetica,
    color: rgb(0.35, 0.35, 0.35),
  });
  y -= 9;
  drawBullet(
    'Designed posters and social media creatives for college productions, keeping event branding consistent under tight deadlines.'
  );
  drawBullet(
    'As a senior member, reviewed and approved junior designers’ work, checking layouts and timelines to keep the team on track for event deadlines.'
  );

  // -------------------------------------------------------------
  // EDUCATION
  // -------------------------------------------------------------
  drawSectionHeader('EDUCATION');
  page.drawText('Bachelor of Design (B.Des) in UI/UX Design', {
    x: marginX,
    y,
    size: 8,
    font: helveticaBold,
    color: dark,
  });
  const eduYears = '2023 – 2027';
  const eduYearsWidth = helveticaBold.widthOfTextAtSize(eduYears, 8);
  page.drawText(eduYears, {
    x: width - marginX - eduYearsWidth,
    y,
    size: 8,
    font: helveticaBold,
    color: dark,
  });

  y -= 9;
  page.drawText('MIT ADT University · Loni Kalbhor, Pune', {
    x: marginX,
    y,
    size: 7.2,
    font: helvetica,
    color: subMetaBlue,
  });
  const statusStr = 'Currently in 4th Year';
  const statusWidth = helvetica.widthOfTextAtSize(statusStr, 7.2);
  page.drawText(statusStr, {
    x: width - marginX - statusWidth,
    y,
    size: 7.2,
    font: helvetica,
    color: rgb(0.45, 0.45, 0.45),
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/assets/Akanksha_Pawar_Resume.pdf', pdfBytes);
  console.log('Successfully generated resume PDF at public/assets/Akanksha_Pawar_Resume.pdf');
}

generateResumePdf();
