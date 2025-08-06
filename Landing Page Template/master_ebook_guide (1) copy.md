# Master Ebook Creation Prompt Guide
*Comprehensive prompt framework incorporating 48 conversion rules, brand guidelines, and all GitHub tools*

## GENERAL EBOOK CREATION PROMPT TEMPLATE

```
Create a high-converting ebook following the Accrue brand guidelines and 48-rule framework:

========================================================================
PROJECT CONTEXT & OBJECTIVES
========================================================================

INDUSTRY/NICHE: Payroll & HR Services for SMBs (10-100 employees across retail, restaurant, construction, home services, financial services, healthcare, automotive, wholesale, and franchise operations)

TARGET AUDIENCE: 
- Small Segment (10-25 employees): Local business owners, office managers, bookkeepers seeking simple compliance and time-saving solutions
- Medium Segment (26-50 employees): Regional operators, HR managers, finance leads needing centralized multi-location systems  
- Large Segment (51-100 employees): Multi-location executives, HR directors, finance controllers requiring scalable automation and visibility

**DETAILED CUSTOMER PERSONAS (from Accrue Customer Profiles PDF):**

**SMALL SEGMENT (10-25 Employees):**
- **Champion:** Maggie Hall (Office Manager) - Overwhelmed by manual processes, needs time-saving solutions
- **Decision Maker:** George Hall (Owner) - Wants simple, reliable systems without constant handholding
- **Influencer:** Tyler James (Bookkeeper) - Needs clean data and QuickBooks integration
- **Ratifier:** Shiela Cruz (CPA) - Requires compliance accuracy and transparent reporting
- **User:** Ben Taylor (Employee) - Wants mobile-first, simple clock-in/out functionality

**MEDIUM SEGMENT (26-50 Employees):**
- **Champion:** Tanya Boyd (Office Manager) - Managing multiple locations, needs consistent systems
- **Decision Maker:** David Kim (Owner/CEO) - Wants to delegate without losing visibility
- **Influencer:** Carmen Blake (Insurance Broker) - Needs benefits integration and compliance support
- **Ratifier:** Leo Tran (CPA) - Requires audit trails and multi-state compliance
- **User:** Jada Wells (Employee) - Expects modern, mobile-responsive tools

**LARGE SEGMENT (51-100 Employees):**
- **Champion:** Sara Jordan (HR Manager) - Scaling across locations, needs unified workflows
- **Decision Maker:** Carlos Perez (Owner/CEO) - Focused on risk management and team accountability
- **Influencer:** Dan Price (Insurance Broker) - Requires ACA compliance and benefits sync
- **Ratifier:** Cara Steele (Finance Lead) - Needs audit-ready reporting and GL integration
- **User:** Myles Grant (Field Tech) - Mobile-native, expects consumer-grade app experience

BUSINESS OBJECTIVE: Lead generation for Accrue Payroll & HR suite (Payroll, Time, Talent, Insights, Services) targeting businesses outgrowing manual processes

CONVERSION GOAL: Consultation bookings and demo requests for payroll/HR system implementation

PAGE TARGET: 8-12 for owners/executives, 15-25 for managers/champions, 20-35 for influencers/ratifiers

========================================================================
CORE BRAND FRAMEWORK REFERENCE
========================================================================

**Brand Essence**
- **Tagline:** "Now you know it's right"™
- **Villain:** Back-office burnout
- **Hero Journey:** Eliminate the errors → Crush the complexity → Call on an expert
- **Rally Cry:** A huge sigh of relief

**Voice & Tone**
- **Conversational yet authoritative**
- **Empathetic to pain points**
- **Confident without being boastful**
- **Human-first approach**
- **Solution-focused**

========================================================================
MANDATORY BRAND COMPLIANCE (ACCRUE GUIDELINES)
========================================================================

FONT REQUIREMENTS:
- PRIMARY FONT: Poppins (all headings, body text, CTAs)
- FALLBACK: Sans-serif system fonts
- MINIMUM SIZE: 16px equivalent for accessibility
- IMPLEMENT IN: Pandoc templates, mdBook CSS, EPUB styles, HTML exports

LOGO INTEGRATION:
- FILE: accrue-logo-avatar-64.svg (located in template assets)
- PLACEMENT: Cover page header, document footer minimum
- SIZE: Maintain aspect ratio, scale appropriately for format
- FORMATS: Embed in PDF, EPUB metadata, HTML headers

COLOR PALETTE:
- REFERENCE: Use the colors from the slide decks in 'Assets' folder under 'Master_Documents' folder.
- USE: Primary colors for CTAs, secondary for accents
- ENSURE: 4.5:1 contrast ratio minimum (WCAG AA compliance)
- IMPLEMENT: Consistent across all export formats

VISUAL DESIGN ELEMENTS:

1. Professional Corporate Imagery: Use modern office/workplace photography
   with warm, natural lighting and motion blur effects showing people in
   collaborative work environments

2. Color Palette:
   - Deep navy/teal blues (#2B4C5E range) - Primary brand color
   - Rich charcoal grays (#3A3A3A range) - Professional depth
   - Warm coral/salmon accents (#E07B67 range) - Energy and approachability
   - Warm gold/amber highlights (#D4A574 range) - Premium positioning
   - Light backgrounds with warm beige/cream tones (#F8F6F2 range)
   - Pure white space for breathing room and clarity

3. Typography Style:
   - Mix of bold sans-serif headers with lighter body text
   - Italicized script for emphasis words ("better", "together")
   - Strong contrast between header and body text weights

BRAND MESSAGING FRAMEWORK:

Core Tagline: "Making Everyday Work Better"

Supporting Messages:
- "Let's figure this out together"
- "The Human Expert Next Door" (from CLAUDE.md positioning)

DESIGN PRINCIPLES:

1. Human-Centered Approach: Feature real people, authentic workplace
   scenarios, emphasize relationships and connection
2. Clean Modern Layouts:
   - Generous white space
   - Clear visual hierarchy
   - Rounded corner elements/buttons
   - Icon-based navigation
3. Professional Yet Approachable: Balance corporate credibility with warmth
   and accessibility

CULTURAL VALUES TO REFLECT:

- Do The Right Thing - Lead with integrity
- Make Accountability a Team Sport - Collaborative approach
- Fuel Results with Relationships - Human connection focus
- Say What Matters - Clear, direct communication
- Execute with Intention - Purposeful action

BRAND VOICE (FROM ACCRUE UNCOVERY):
- TONE: Conversational yet authoritative, addressing real fears about payroll/HR mistakes
- EMPATHY: Acknowledge pain points with genuine understanding of back-office burnout
- AUTHORITY: Confident expert problem-solvers without being condescending or boastful
- HUMAN-FIRST: Personal relationships and human connection over technology-only solutions
- SOLUTION-FOCUSED: Relief and certainty rather than feature-focused messaging
- ACCESSIBILITY: Clear explanations that turn complexity into confidence

TEMPLATE DIRECTION:
- REFERENCE: Accrue-template-evolved direction-1 - Read-Only.pdf
- FOLLOW: Layout, spacing, and visual hierarchy guidelines
- MAINTAIN: Brand consistency across all formats

========================================================================
CONTENT STRATEGY (RULES 1-9)
========================================================================

OPENING HOOK (RULE 1):
- Create emotional urgency within 30 seconds
- Use pain-point questions, not feature statements
- Include immediate cost preview (time/money/opportunity)
- Introduce character persona on page 1 (return throughout)

STRUCTURE (RULE 2):
- Maximum 2-3 paragraphs per section
- Bullet points: 1-2 sentences minimum (no single words)
- Visual hierarchy: Headers → Subheaders → Body → Callouts
- Progress indicators every 2-3 pages

PROOF INTEGRATION (RULE 3):
- Every claim needs supporting evidence within 2 paragraphs
- Use specific numbers, not general statements
- Include "What NOT to do" examples alongside positive ones
- Testimonials embedded throughout, not relegated to end

CHARACTER DEVELOPMENT (RULE 8):
- Create 1-2 relatable personas (give them names)
- Show journey: Before → During → After transformation
- Include specific outcomes (time saved, revenue gained, stress reduced)
- Reference personas in each major section

EMOTIONAL ESCALATION (RULE 9):
- Page 1: Back-office burnout recognition/fear of mistakes
- Early sections: Cost of errors/compliance failures  
- Middle: Relief/certainty through expert guidance
- Later: Confidence/"Now you know it's right"
- End: Urgency to eliminate worry and achieve peace of mind

========================================================================
CONTENT FRAMEWORK (CERTAINTY MODEL - RULE 7)
========================================================================

C - CAPTURE the back-office burnout (emotional + compliance fears)
E - EXPOSE the cost of errors (penalties, time, stress, reputation)
R - REVEAL the relief pathway (eliminate errors, crush complexity, call experts)
T - TEACH specific steps (automated processes, expert guidance, proactive support)
A - ASSURE transformation (from worry to "now you know it's right")
I - INVITE to certainty (beyond just information - to peace of mind)
N - NOW activate (specific, confidence-building, immediate)
T - TRUST builders (expert credentials, compliance guarantees, dedicated support)
Y - YOU know it's right (proof, testimonials, risk elimination)

========================================================================
TECHNICAL IMPLEMENTATION REQUIREMENTS
========================================================================

PDF DOWNLOAD SYSTEM (CRITICAL):
- FILENAME CONVENTION: [topic-name]-ebook.pdf (all lowercase, hyphens only)
- LOCATION: Must be in /downloads/ directory
- EXAMPLES: marketing-guide-ebook.pdf, tax-strategies-ebook.pdf
- NEVER USE: spaces, underscores, capitals, or generic names like "ebook.pdf"
- UPDATE: All download links in thank-you.html must match exact filename
- VERIFY: Use downloads/pdf-check.html to confirm setup

LANDING PAGE FLOW:
1. User enters email on index.html
2. Form validates and stores data
3. Redirect to thank-you.html
4. Download button links to exact PDF filename
5. PDF downloads directly (not opens in browser)

SOURCE FORMAT:
- Write in Markdown for maximum flexibility
- Use Pandoc for multi-format conversion
- Structure: YAML frontmatter + markdown content
- Version control: Git with descriptive commits

EXPORT FORMATS & TOOLS:

PDF GENERATION:
- TOOL: Pandoc + Eisvogel LaTeX template (eisvogel/)
- COMMAND: pandoc input.md -o output.pdf --template=eisvogel/eisvogel.tex --pdf-engine=xelatex
- REQUIREMENTS: Poppins font embedded, logo in header/footer
- VALIDATION: Print-ready (CMYK) and screen-optimized (RGB) versions

EPUB CREATION:
- TOOL: Pandoc with custom CSS
- CSS: Blitz CSS framework (blitz-css/) customized with Poppins font
- VALIDATION: EPUBCheck (epubcheck/) - MANDATORY before publishing
- REQUIREMENTS: Kindle compatibility, reflowable text, embedded fonts

INTERACTIVE WEB VERSION:
- TOOL: Docsify (docsify/) for searchable, interactive documentation
- FEATURES: Live search, progress tracking, social sharing
- STYLING: Custom CSS with Poppins font, Accrue colors
- ANALYTICS: Embedded tracking codes for performance monitoring

ALTERNATIVE FORMATS:
- TECHNICAL DOCS: mdBook (mdbook-template/) with custom theme
- PRESENTATIONS: Reveal.js (reveal.js/) integration for embedded slideshows
- DIAGRAMS: Mermaid (mermaid/) for live flowcharts and process maps

VALIDATION TOOLS:
- EPUB: EPUBCheck validation (epubcheck/)
- PERFORMANCE: Lighthouse CI (lighthouse-ci/) for web versions
- ACCESSIBILITY: Built-in WCAG AA compliance checking
- QUALITY: Pandoc filters (pandoc-filters/) for enhanced functionality

========================================================================
CONVERSION ELEMENTS INTEGRATION
========================================================================

EMAIL CAPTURE FORMS:
- LOCATION: conversion-templates/email-capture-forms.html
- TYPES: Exit intent popups, chapter upgrades, content upgrades, quiz captures
- FREQUENCY: Every 3-4 pages maximum (Rule 16)
- STYLING: Brand-consistent with Poppins font, Accrue colors (navy, coral, gold)

SOCIAL SHARING:
- LOCATION: conversion-templates/social-media-buttons.html
- TYPES: Floating bars, click-to-tweet, chapter sharing, social proof
- INTEGRATION: Pre-written copy, brand hashtags, tracking codes

PROGRESS TRACKING:
- LOCATION: conversion-templates/progress-tracking.html
- FEATURES: Reading bars, chapter completion, achievements, streaks
- PURPOSE: Increase engagement and completion rates

CALL-TO-ACTION TEMPLATES:
- LOCATION: conversion-templates/call-to-action-templates.html
- TYPES: Chapter-end upgrades, sticky bars, value stacks, comparisons
- PLACEMENT: Soft CTAs every 3-4 pages, strong CTA after solution presentation

LANDING PAGE:
- LOCATION: conversion-templates/landing-page-template.html
- ELEMENTS: Hero with opt-in, benefits, testimonials, FAQ
- OPTIMIZATION: A/B testable components, mobile-responsive

========================================================================
IMAGE & MEDIA OPTIMIZATION
========================================================================

IMAGE PROCESSING:
- TOOLS: ImageMagick, pngquant, jpegoptim (installed)
- WORKFLOW: Resize to max 800px width, optimize for web
- FORMATS: JPEG for photos, PNG for graphics/screenshots
- GUIDE: image-optimization-guide.md for detailed instructions

LOGO IMPLEMENTATION:
- SOURCE: accrue-logo-avatar-64.svg
- FORMATS: Convert to PNG/JPEG for various platforms
- SIZING: Responsive scaling, maintain aspect ratio
- PLACEMENT: Cover header, footer, social sharing images

BRAND ASSET INTEGRATION:
- CUSTOMER PROFILES: Reference "Accrue Customer Profiles - Final.pdf"
- SOCIAL STRATEGY: Align with "Accrue Social Launch Plan FY25 Draft.pdf"
- VOICE/TONE: Follow "Accrue Voice+Tone strategy.pdf" exactly
- DESIGN DIRECTION: Use "Accrue-template-evolved direction-1 - Read-Only.pdf"
- COLOR PALETTE: Extract from "Natural Color Palette Creator Presentation.pdf" (excluding any green elements)

========================================================================
ENHANCED BRAND PERSONALIZATION SECTION
========================================================================

ACCRUE-SPECIFIC CUSTOMIZATIONS:

Brand Personality Integration:
- EXPERTISE POSITIONING: Position as "The Human Expert Next Door" - knowledgeable but approachable
- RELATIONSHIP FOCUS: Every section should reinforce human connection and collaborative problem-solving
- INTENTIONAL ACTION: Frame all advice as purposeful, strategic decisions rather than quick fixes
- INTEGRITY EMPHASIS: Include ethical considerations and "doing the right thing" perspectives

Content Approach Alignment:
- COLLABORATIVE TONE: Use "let's" and "together" language throughout
- PRACTICAL WISDOM: Balance strategic thinking with actionable implementation
- RELATIONSHIP-DRIVEN: Show how solutions strengthen business relationships and team dynamics
- ACCOUNTABILITY FOCUS: Frame outcomes in terms of shared responsibility and team success

Visual Brand Consistency:
- WARM PROFESSIONAL AESTHETIC: Use the refined navy/coral/gold palette to convey trust and energy
- HUMAN-CENTERED IMAGERY: Feature diverse professionals in collaborative settings
- CLEAN SOPHISTICATION: Maintain generous white space and clear hierarchy
- APPROACHABLE AUTHORITY: Balance professional credibility with warmth and accessibility

========================================================================
CONTENT QUALITY ASSURANCE FRAMEWORK
========================================================================

ACCRUE BRAND VOICE CHECKLIST:
☐ Language reflects "Now You Know It's Right™" philosophy
☐ Tone addresses back-office burnout and provides relief/certainty
☐ Core differentiators evident: Eliminate Errors, Crush Complexity, Call on Expert
☐ Positions against competitor weaknesses: impersonal service, tech-only solutions, complexity
☐ Solutions presented as confidence-builders that eliminate guesswork and worry

VISUAL BRAND COMPLIANCE:
☐ Color palette uses navy/teal, charcoal, coral, gold, beige, white color specifications
☐ Poppins font implemented consistently across all formats
☐ Logo placement follows brand guidelines (header/footer minimum)
☐ Visual hierarchy supports professional yet approachable aesthetic
☐ White space and layout create breathing room and clarity

RELATIONSHIP-FOCUSED CONTENT:
☐ Each solution connects to improved business relationships
☐ Team and collaborative language used throughout
☐ Human impact and connection emphasized over pure efficiency
☐ Accountability framed as shared responsibility
☐ "Together" messaging reinforced in key sections

========================================================================
LEGAL & COMPLIANCE CHECKLIST (RULES 10-12)
========================================================================

COPYRIGHT & ATTRIBUTION:
☐ All images properly licensed or original
☐ All quotes, statistics, research sources attributed
☐ Copyright notice on final page
☐ Fair use compliance (max 10% of source material)
☐ Trademark acknowledgment for mentioned brands

PRIVACY & DATA PROTECTION:
☐ Privacy policy link for lead capture
☐ GDPR compliance statement for EU audiences
☐ CCPA compliance for California residents
☐ Cookie policy for web-based ebooks
☐ Data retention and deletion policies stated

DISCLAIMERS & LIABILITY:
☐ "Educational purposes only" disclaimer
☐ "Results not guaranteed" for case studies
☐ Professional advice disclaimer (legal/medical/financial)
☐ Affiliate link disclosure if applicable
☐ Limitation of liability clause

========================================================================
QUALITY ASSURANCE CHECKLIST (RULE 45)
========================================================================

CONTENT QUALITY:
☐ Hook creates emotional response in first 30 seconds
☐ Character appears in first page and 3+ sections
☐ CTAs spaced every 3-4 pages maximum
☐ Proof points within 2 paragraphs of claims
☐ Visual hierarchy clear for skimmers
☐ Mobile formatting optimized
☐ All links functional and tracked
☐ Grammar/spelling error-free

BRAND COMPLIANCE:
☐ Poppins font used throughout all formats
☐ accrue-logo-avatar-64.svg properly placed and sized
☐ Colors match approved palette (navy, coral, gold, charcoal, beige, white only)
☐ Voice follows Accrue Voice+Tone strategy.pdf guidelines
☐ Design aligns with template-evolved direction document
☐ NO GREEN ELEMENTS present anywhere in design

LEGAL COMPLIANCE:
☐ All required disclaimers included
☐ Copyright attributions complete
☐ Privacy policy linked where required

ACCESSIBILITY & TECHNICAL:
☐ WCAG AA compliance verified (4.5:1 contrast ratio)
☐ Screen reader compatibility tested
☐ Format-specific requirements met
☐ Analytics tracking codes embedded
☐ SEO metadata optimization complete
☐ Conversion path clear and compelling

========================================================================
PERFORMANCE TARGETS (RULES 46-48)
========================================================================

CONVERSION BENCHMARKS:
- Email capture rate: Minimum 25% of readers
- Primary CTA click-through: Minimum 15%
- Completion rate: Minimum 60% read to end
- Share rate: Minimum 10% social sharing
- Return engagement: Minimum 20% return visits

CONTENT PERFORMANCE:
- Average time on page: 2+ minutes per page
- Scroll depth: 80%+ reach final CTA
- Interactive element engagement: 40%+ participation
- Mobile vs desktop parity maintained
- Cross-platform consistency scores high

BUSINESS IMPACT:
- Lead quality: Track conversion rate vs. other sources
- Sales attribution: Revenue from ebook-acquired leads
- Brand awareness: Monitor mentions, shares, discovery
- Customer lifetime value: Long-term ebook lead value
- Cost per acquisition: Total cost ÷ qualified leads

========================================================================
EXAMPLE IMPLEMENTATION PROMPT
========================================================================

Here's a complete example prompt using this framework:

"Create a high-converting ebook for financial services executives about digital transformation ROI, following Accrue brand guidelines:

CONTEXT: B2B financial services, targeting CFOs and CTOs at mid-market banks ($500M-$5B assets), goal is consultation bookings for digital transformation services, 12-page maximum for executive attention spans.

BRAND COMPLIANCE: Use Poppins font throughout, integrate accrue-logo-avatar-64.svg in cover and footer, follow color palette using navy (#2B4C5E), coral (#E07B67), and gold (#D4A574), maintain "Now You Know It's Right™" messaging (certainty-focused, expert-guided, worry-eliminating).

CHARACTER: Introduce 'Sarah Martinez, Office Manager at Regional Construction Corp' on page 1, show her journey from payroll anxiety and compliance fears to confidence with "now I know it's right," reference her in 4+ sections with specific error elimination and time-saving outcomes.

CERTAINTY FRAMEWORK: 
C - Back-office burnout costs (IRS penalties, employee misclassification risks, manual errors)
E - Cost of compliance mistakes (financial penalties, reputation damage, employee trust issues)
R - Relief through expert guidance (eliminate errors, crush complexity, call on experts)
T - Specific certainty steps (automated compliance, dedicated US-based support, proactive notifications)  
A - Assurance of accuracy ("now you know it's right")
I - Invitation to peace of mind partnership
N - NOW get started with confidence
T - Trust through expert credentials and compliance guarantees
Y - YOU achieve payroll/HR certainty

TECHNICAL: Export via Pandoc + Eisvogel template for PDF, validate with EPUBCheck for EPUB, create interactive version with Docsify, embed conversion templates from template folder, optimize images with installed tools.

SUCCESS METRICS: Target 25% email capture, 15% consultation booking rate, 60% completion rate, track with embedded analytics."

========================================================================
TOOLS INTEGRATION COMMANDS
========================================================================

BUILD COMMANDS:
# PDF with Eisvogel template
pandoc input.md -o output.pdf --template=Ebook\ Template/eisvogel/eisvogel.tex --pdf-engine=xelatex

# EPUB with validation
pandoc input.md -o output.epub --css=Ebook\ Template/blitz-css/Blitz_framework/CSS/blitz.css
java -jar Ebook\ Template/epubcheck/target/epubcheck.jar output.epub

# Interactive web version
cd Ebook\ Template/docsify && docsify init ./my-ebook

# Performance testing
cd Ebook\ Template/lighthouse-ci && npm run test

# Image optimization
cd Ebook\ Template && bash image-optimization-guide.md

========================================================================
SUCCESS FORMULA & MASTER EBOOK PROMPT TEMPLATE
========================================================================

High-Converting Ebook = 
(Compelling Hook × Proof-Heavy Content × Character Journey × Strategic CTAs × Brand Consistency × Technical Excellence × Legal Compliance × Performance Optimization × Certainty Framework) 
÷ 
(Cognitive Load + Decision Fatigue + Friction Points)

**MASTER EBOOK PROMPT TEMPLATE**

You are writing an ebook for Accrue, a payroll and HR software company. Use the following brand framework:

**BRAND POSITIONING:** Accrue helps small businesses eliminate back-office burnout by providing payroll and HR solutions where "now you know it's right."

**TARGET AUDIENCE:** [Choose from: Business Owners, Office Managers/Admins, HR Professionals, or Advisors/CPAs]

**AUDIENCE-SPECIFIC MODIFIERS:**

**For Business Owners:**
- **Pain Point Focus:** "How am I supposed to keep up with all this and still make it home for dinner?" Fear of IRS penalties, wearing too many hats, late nights dealing with payroll problems
- **Key Messages:** Time savings for growth focus, financial impact of payroll mistakes, confident delegation, ROI of outsourcing vs. DIY
- **Tone:** Direct, time-conscious, ROI-focused

**For Office Managers/Administrators:**
- **Pain Point Focus:** Manual data entry across multiple systems, chasing missing paperwork, being the go-to person for every payroll question, spreadsheet management nightmares
- **Key Messages:** Step-by-step transition guidance, proof that switching is worth the effort, making jobs easier not harder, ways to look like a hero to their boss
- **Tone:** Supportive, detailed, change-management focused

**For HR Professionals:**
- **Pain Point Focus:** Complex compliance requirements (ACA, FLSA, etc.), multi-state tax issues, benefits administration, employee onboarding at scale
- **Key Messages:** Advanced compliance expertise, integration capabilities, scalability for growing teams, strategic HR support beyond basic payroll
- **Tone:** Professional, compliance-focused, strategic

**For Advisors (CPAs/Brokers):**
- **Pain Point Focus:** Clients calling with payroll problems, finding reliable referral partners, maintaining client relationships, avoiding conflicts of interest
- **Key Messages:** Client referral benefits, how Accrue supports their practice, partnership opportunities, white-glove client experience
- **Tone:** Partnership-oriented, professional, mutual benefit focused

**CORE MESSAGE:** In a world where you can spend forever on payroll and HR and still not know if you did everything correctly, Accrue gives small businesses a way to get it done and done right.

**VILLAIN TO ADDRESS:** Back-office burnout - the overwhelming stress of paperwork, deadlines, and the real risk of costly mistakes.

**SOLUTION FRAMEWORK:**
1. **Eliminate the Errors** - Prevent mistakes and correct discrepancies
2. **Crush the Complexity** - Simplify time-consuming back-office tasks  
3. **Call on an Expert** - Access to human specialists who know your business

**VOICE GUIDELINES:**
- Write conversationally, like talking to a stressed business owner
- Acknowledge their pain points with empathy
- Focus on the relief and confidence Accrue provides
- Use specific, concrete examples over abstract benefits
- Maintain authority without being condescending

**DIFFERENTIATION POINTS TO EMPHASIZE:**
- Dedicated US-based human support (not just chatbots)
- Personal relationships with payroll specialists
- Proactive guidance and notifications
- 3-year price lock guarantee
- Residual-based sales model ensures ongoing service

**PAIN POINTS TO ADDRESS:**
[Reference specific issues from the back-office burnout scenarios: IRS notifications, manual tracking across spreadsheets, missing I-9 signatures, overtime calculation errors, system integration failures, employee misclassification, support call frustrations]

**TOPIC:** [Your specific ebook topic]

**CALL TO ACTION:** [Specific next step for readers]

Write the ebook content following this brand framework.

Use this master prompt as your starting template, customize the specific details for each project, and follow the 48 rules for maximum conversion success while maintaining perfect Accrue brand alignment.

========================================================================
TOPIC-SPECIFIC PROMPT ENHANCEMENTS
========================================================================

**Compliance-Focused Ebooks**

**ADDITIONAL CONTEXT:**
Reference these specific compliance pain points from the Uncovery:
- IRS penalty fears
- Multi-state tax complications
- I-9 documentation issues
- Overtime calculation errors
- Employee classification problems

**KEY MESSAGING:**
- "Now you know the calculation is right"
- "Now you know the documentation is complete"
- "Now you know you're compliant"

**EXPERT POSITIONING:**
Emphasize SHRM-certified professionals and dedicated tax specialists

**Technology/Integration Ebooks**

**ADDITIONAL CONTEXT:**
Acknowledge Accrue's technology challenges while emphasizing:
- Simplicity over cutting-edge features
- Human support compensates for tech gaps
- QuickBooks integration capabilities
- Focus on getting things right vs. flashy features

**KEY MESSAGING:**
- "It's not just easy – it's right"
- "You don't need complicated – you need correct"

**POSITIONING:**
Technology that serves the relationship, not replaces it

**Industry-Specific Ebooks**

**CUSTOMIZATION VARIABLES:**
- Industry-specific compliance requirements
- Common payroll challenges by sector
- Seasonal worker considerations
- Geographic considerations

**EXAMPLES TO INCLUDE:**
- Restaurant industry: tip reporting, high turnover
- Construction: prevailing wage, contractor classification
- Healthcare: shift differentials, compliance complexity
- Retail: seasonal staff, multiple locations

========================================================================
MESSAGING DO'S AND DON'TS
========================================================================

**DO Use These Phrases**
* "Now you know it's right"
* "Eliminate the errors"
* "Crush the complexity"
* "Call on an expert"
* "A huge sigh of relief"
* "Person-to-person service"
* "Dedicated specialist"
* "US-based support"
* "Get it done and done right"

**DON'T Use These Approaches**
* ❌ Tech-first messaging ("cutting edge," "innovative platform")
* ❌ Generic "save time and money" claims
* ❌ Corporate jargon without substance
* ❌ Overwhelming feature lists
* ❌ Comparison charts bashing competitors
* ❌ "AI-powered" or "automated" emphasis

**DO Address These Pain Points**
* IRS penalty fears
* Calculation errors
* Documentation nightmares
* Support phone queues
* System integration issues
* Compliance confusion
* Late-night paperwork
* Employee classification problems

**DON'T Ignore These Realities**
* Switching hesitation
* Brand recognition challenges
* Technology gaps
* Price sensitivity
* Existing relationships with providers
```
