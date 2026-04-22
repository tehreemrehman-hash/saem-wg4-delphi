# WG4 Kickoff Discussion Summary
**Date:** April 22, 2026 · 3:00–3:45 PM ET
**Workgroup:** 4 — Human-AI Interaction & the Perception of Self

## Who was in the room

Tehreem Rehman (co-lead, Mount Sinai), Haeyeon Hong (Brown University Health), Ross Fleischman (Harvard / UCLA), Arwen Declan (Prisma Health; joined late, hopped off for a conflict), Mehrnoosh Samaei (Emory), Sudeep Hegde (Clemson, industrial engineering / human factors), Sayon Dutta (Mass General; joined by phone), Deborah Diercks (UT Southwestern), and Woosuk Seo (Yale, postdoctoral associate in human-computer interaction).

Susan Gaeta checked in via chat but was in and out from the ED. Mark Courtney sent apologies — he was getting crushed on shift.

## Charge for the meeting

Orient the group to the modified Delphi process, walk through the 18 candidate questions, and flag wording or scope issues before Round 1 opens on Monday Apr 27.

We focused discussion on **Domain A (Clinician–AI Interaction & Clinical Reasoning)** because that's where the largest volume of wording concerns surfaced. Domains B, C, and D were not worked through item-by-item — they're in scope for Round 1 as written, with modifications welcome in the comment fields.

## Cross-cutting themes

- **Delphi statements should be single-topic.** Deborah emphasized that compound questions (two ideas joined by "and") are difficult to vote on cleanly. Where a current Q1–18 item bundles two questions, expect to see it split into two separate items after Round 1.
- **Audience framing matters.** Haeyeon and Deborah both noted that our voting pool spans informaticists, bedside clinicians, educators, ethicists, and trainees. Terminology that's natural to one subgroup (e.g., "explainability," "trust calibration") may land as jargon for another. Foundational context in the Evidence Brief and in Round 2 phrasing should close that gap.
- **Frontline ED reality vs. informatics ideal.** Sayon pushed the group repeatedly to ground abstractions in what actually happens at the bedside — providers have fractions of a second during a resuscitation; what "explainability" or "trust" looks like in that moment is different from what it looks like at a design review.
- **Watch for overlap with WG1 (Clinical Practice & Operations) and WG3 (Education).** Several Domain A items brush against clinical workflow and training topics owned by other groups. Overlap is fine when the lens is distinctly human-factors / identity / trust, but Haeyeon flagged items where the framing risks duplicating WG1's work.

## Question-by-question decisions

### Q1 — AI-assisted clinical decision support & diagnostic reasoning

**Current wording:** *"How does AI-assisted clinical decision support affect emergency physicians' diagnostic reasoning, and under what conditions does it enhance versus impair clinical judgment?"*

**Discussed changes:** Ross (echoed by Mark via chat) suggested replacing *clinical decision support* with *clinical decision making* — "CDS" reads as a specific EHR feature category, while the intent is the broader cognitive process. Deborah recommended splitting the item into two single-topic statements: one on the effect on diagnostic reasoning, a second on the conditions that distinguish enhancement from impairment.

**Why it matters:** A cleaner "decision making" framing also makes the item applicable to emerging generative and agentic tools, not just legacy rule-based CDS.

### Q2 — Automation bias

**Current wording:** *"What cognitive and behavioral mechanisms drive automation bias in EM physicians' use of AI, and which interventions effectively mitigate it?"*

**Discussed changes:** Haeyeon proposed simplifying the wording. Deborah again recommended splitting: one statement on *how automation bias manifests* in ED AI use, and a second on *what design or training interventions mitigate it*. Keeping them together forces voters to agree on both halves at once.

**Why it matters:** The mechanisms question is a descriptive research priority; the mitigation question is an interventional one. They draw on different methods and deserve separate consensus.

### Q3 — Explainability in time-critical ED settings

**Current wording:** *"How do varying levels of AI explainability influence trust calibration and decision accuracy in time-critical ED settings?"*

**Discussed changes:** Haeyeon proposed reframing to "What does meaningful AI explainability look like in real-time ED settings?" Mehrnoosh pushed back gently in chat that *practical* may be a sharper word than *meaningful*. Sayon argued that informaticists care about explainability as a system property, while frontline clinicians rarely have the time or training to interrogate an explanation mid-resuscitation — so the research question should be grounded in what's actionable at the bedside, not what satisfies a model-review committee.

**Why it matters:** Explainability research that ignores the 3-second decision window produces tools that look transparent on paper and get ignored in practice.

### Q4 — Alert burden, cognitive load, alert fatigue

**Current wording:** *"What is the relationship between AI-generated alert burden, cognitive load, alert fatigue, and patient safety outcomes?"*

**Discussed changes:** Haeyeon suggested a more actionable framing — "How can we maximize usability of AI-assisted alert tools for physicians in the ED?" — or "How do we optimize AI-generated alert tools in the ED?" (chat). Sayon invoked the *five rights of CDS* (right information, right person, right format, right channel, right point in workflow) as the scaffolding this question should sit on. Haeyeon also flagged that alert optimization overlaps with WG1's operations remit and the group should be explicit about which part belongs to WG4.

**Why it matters:** WG4's distinct contribution is the human-factors / cognitive-load / trust lens on alerts — not the operational "how many fires the tool catches." The wording should make that cut clear.

### Q5 — Calibrated trust over time

**Current wording:** *"How do EM physicians develop and maintain calibrated trust in AI systems over time?"*

**Discussed changes:** Sayon flagged that "maintain trust" assumes trust is the goal — the prior question is *should they trust it at all?* and under what conditions. Sudeep raised recalibration: trust has to move up and down as model performance, drift, and context change, so the wording should capture that dynamism rather than implying a one-time calibration event. Ross cautioned against the word *cultivate* (used in an earlier draft) because it sneaks in a value judgment that more trust is better. Haeyeon proposed a plainer alternative: "What factors influence physician trust in AI?"

**Why it matters:** The consensus item should frame trust as a calibrated, updatable judgment — not a virtue to maximize.
