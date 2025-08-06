# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the master template repository for creating high-converting ebooks following the Accrue brand guidelines. The repository contains comprehensive tools, assets, and guidelines for producing professional ebooks that position Accrue as the solution to back-office burnout for small businesses.

## Project Structure

- **ebook_template/**: Main template directory containing all resources
  - **assets/**: Brand assets, logos, and style guides
  - **examples/**: Sample ebooks and reference materials (ignore PDF conversions)
  - **public/**: Output directory for generated ebooks and landing pages
  - **master-prompt-guide.md**: Comprehensive prompt framework for ebook creation
  - **detailed-content-structures.md**: Detailed chapter-by-chapter content templates
  - **b2b_ebook_guide.md**: B2B-specific guidance and strategies
  - **functional_requirements.md**: System functionality requirements
  - **technical_requirements.md**: Technical specifications and standards
  - **rules.md**: Content creation rules and best practices
  - **landpages.md**: Landing page specifications and requirements
  - **pdf-generation-guide.md**: PDF output formatting and generation guide

## Accrue Brand Framework (MANDATORY)

All ebooks MUST follow this core positioning:

### **Core Message**
> "In a world where you can spend forever on payroll and HR and still not know if you did everything correctly, Accrue gives small businesses a way to get it done and done right."

### **Tagline**
**"Now you know it's right"™** - Must appear 3+ times per ebook

### **Villain**
**Back-office burnout** - The overwhelming stress of paperwork, deadlines, and the real risk of costly mistakes

### **Solution Framework (The Three Pillars)**
1. **Eliminate the Errors** - Prevent mistakes and correct discrepancies
2. **Crush the Complexity** - Simplify time-consuming back-office tasks
3. **Call on an Expert** - Access to human specialists who know your business

### **Rally Cry**
**"A huge sigh of relief"** - The emotional outcome readers should feel

## Target Audiences

### **Primary Audiences** (Choose ONE per ebook)

1. **THE OWNER** (Business owners and operators)
   - Mindset: "Sorry. Can't talk. Got a business to run."
   - Pain focus: Time scarcity, growth limitations, financial impact
   - Tone: Direct, ROI-focused, time-conscious

2. **THE ADMIN** (Office managers and administrators) 
   - Mindset: "Is your solution better? Maybe. Is it worth the hassle of switching? Not in a million years."
   - Pain focus: Manual processes, being the go-to person, change management
   - Tone: Supportive, detailed, change-management focused

3. **THE EXPERT** (Full-time finance and HR professionals)
   - Mindset: "Thanks, but heard it all before. You guys are all the same."
   - Pain focus: Complex compliance, multi-state issues, strategic HR needs
   - Tone: Professional, compliance-focused, strategic

4. **THE ADVISOR** (Brokers, CPAs, and bookkeepers)
   - Mindset: "Yeah, I've already got a go-to for that."
   - Pain focus: Client referrals, partnership benefits, avoiding conflicts
   - Tone: Partnership-oriented, professional, mutual benefit focused

## Content Structure Requirements

### **Choose ONE Structure Per Ebook:**

#### **Problem-Solution Structure (15-25 pages)**
- Chapter 1: The Hidden Cost of [Specific Problem] (3-4 pages)
- Chapter 2: Why Traditional Solutions Fall Short (3-4 pages)
- Chapter 3: The "Now You Know It's Right" Approach (4-5 pages)
- Chapter 4: Implementation Roadmap (3-4 pages)
- Chapter 5: Your Next Step (2-3 pages)

#### **Educational/How-To Structure (12-20 pages)**
- Introduction: The Stakes Are Higher Than You Think (2-3 pages)
- Section 1: [Topic] Fundamentals (3-4 pages)
- Section 2: Advanced Strategies (4-5 pages)
- Section 3: Implementation Guide (3-4 pages)
- Conclusion: Your Path Forward (2-3 pages)

## Brand Compliance Requirements (MANDATORY)

When creating or modifying ebooks, ALWAYS ensure:

### **Messaging Requirements**
- [ ] "Now you know it's right"™ appears 3+ times
- [ ] Back-office burnout addressed within first 2 pages
- [ ] Three pillars (Eliminate, Crush, Call) clearly explained
- [ ] "Huge sigh of relief" emotional outcome evident
- [ ] Human-first approach emphasized over technology

### **Content Requirements**
- [ ] Specific pain point scenarios from burnout list
- [ ] Real client examples or testimonials
- [ ] Concrete numbers and financial impact data
- [ ] Clear, specific call to action with Accrue contact
- [ ] 3-year price lock guarantee mentioned
- [ ] Dedicated specialist relationship highlighted

### **Voice and Tone**
- [ ] Conversational yet authoritative
- [ ] Empathetic to pain points without being condescending
- [ ] Confident without being boastful
- [ ] Solution-focused rather than feature-focused
- [ ] Human relationships emphasized over automation

## Key Commands

### **Content Generation**
```bash
# Generate ebook using master prompt
claude --template="master-prompt-guide.md" --audience="[owner|admin|expert|advisor]" --topic="[specific topic]"

# Apply detailed content structure
claude --template="detailed-content-structures.md" --structure="[problem-solution|educational]"

# Validate brand compliance
claude --check="brand-compliance" --file="output.md"
```

### **Format Conversion**
```bash
# Generate PDF
pandoc input.md -o output.pdf --template="accrue-template" --pdf-engine=xelatex

# Create landing page
pandoc input.md -o landing-page.html --template="accrue-landing-template"

# Validate output
claude --validate="output.pdf" --brand="accrue"
```

## Content Requirements by Audience

### **Business Owners**
- Financial impact focus (penalties, time cost, opportunity cost)
- "Home for dinner" messaging about work-life balance
- ROI calculations and concrete savings examples
- Quick decision-making frameworks
- Growth enablement positioning

### **Office Managers/Administrators**
- Process improvement and efficiency gains
- Transition support and change management
- Day-to-day operational benefits
- "Hero to the boss" positioning
- Detailed implementation guidance

### **HR Professionals**
- Compliance expertise and risk mitigation
- Advanced HR features and capabilities
- Integration with existing systems
- Strategic workforce management
- Professional development and certification support

### **Advisors (CPAs/Brokers)**
- Client referral benefits and processes
- Partnership program details
- White-glove client experience emphasis
- Non-competitive positioning
- Mutual success metrics

## Quality Assurance Checklist

### **Content Quality (MANDATORY)**
- [ ] Opens with relatable stress scenario (Thursday night payroll, IRS letter, etc.)
- [ ] Addresses specific audience pain points within first page
- [ ] Includes concrete examples from Accrue client base
- [ ] Financial impact quantified with real numbers
- [ ] Three pillars clearly explained with specific examples
- [ ] Competitor problems addressed without naming names
- [ ] Implementation roadmap provides clear next steps
- [ ] Call to action is specific and low-pressure

### **Brand Compliance (MANDATORY)**
- [ ] "Now you know it's right"™ tagline used correctly
- [ ] Back-office burnout villain clearly established
- [ ] Human-first service model emphasized
- [ ] Dedicated specialist relationship highlighted
- [ ] US-based support mentioned
- [ ] 3-year price lock featured
- [ ] Residual compensation model benefits explained

### **Technical Standards**
- [ ] Mobile-responsive formatting
- [ ] Clear heading hierarchy (H1, H2, H3)
- [ ] Proper internal linking structure
- [ ] Call-to-action buttons prominently placed
- [ ] Contact information easily accessible
- [ ] Loading time under 3 seconds for web versions

## Success Metrics

### **Content Effectiveness Targets**
- Emotional engagement: Reader should feel "huge sigh of relief"
- Pain point resonance: 80%+ of target audience relate to scenarios
- Solution clarity: Three pillars clearly understood
- Next step clarity: Specific action is obvious
- Brand differentiation: Human service vs. technology focus is clear

### **Conversion Targets**
- Email capture rate: Minimum 25%
- Primary CTA click-through: Minimum 15%
- Completion rate: Minimum 60%
- Lead quality: Qualified prospects for Accrue sales team

## Content Length Guidelines

Based on target audience and attention spans:
- **Business Owners**: 8-15 pages (time-conscious)
- **Office Managers**: 12-20 pages (detail-oriented)
- **HR Professionals**: 15-25 pages (comprehensive information needs)
- **Advisors**: 10-18 pages (partnership-focused)

## Prohibited Content

### **DO NOT Include:**
- Direct competitor comparisons with company names
- Technology-first messaging (AI, automation, cutting-edge)
- Generic "save time and money" claims without specifics
- Overwhelming feature lists or technical specifications
- Corporate jargon without emotional connection
- Pressure-heavy sales language

### **DO NOT Ignore:**
- Switching hesitation and change management concerns
- Brand recognition challenges (acknowledge honestly)
- Price sensitivity (address with value positioning)
- Existing provider relationships (respect and redirect)

## Emergency Scenarios

### **If Content Doesn't Meet Standards:**
1. Check against brand compliance checklist
2. Verify target audience alignment
3. Ensure emotional resonance (relief/confidence outcome)
4. Confirm three pillars are clearly presented
5. Validate call to action specificity

### **If Audience Unclear:**
Default to **Business Owner** audience with these characteristics:
- Time-pressed and results-focused
- Concerned about financial impact of mistakes
- Values human relationships over automation
- Needs confidence and peace of mind

## Legal and Compliance Notes

### **Required Disclaimers**
- Results testimonials: "Results not typical, individual results may vary"
- Educational content: "For educational purposes only, consult professionals"
- Privacy: Include privacy policy link for lead capture
- Copyright: Proper attribution for external content

### **GDPR/CCPA Compliance**
- Clear data collection disclosure
- Opt-in language for email communications
- Easy unsubscribe mechanisms
- Data retention and deletion policies

## Repository Maintenance

### **Regular Updates Required:**
- Client testimonials and case studies (quarterly)
- Industry statistics and compliance changes (as needed)
- Competitor landscape analysis (bi-annually)
- Brand messaging refinements (as directed by marketing)

### **Version Control:**
- Tag releases with version numbers
- Maintain changelog for template updates
- Test all formats after template changes
- Archive previous versions for reference

---

**Remember: Every ebook should leave the reader with the confident feeling that "Now you know it's right" - both about their payroll situation and about choosing Accrue as their solution.**