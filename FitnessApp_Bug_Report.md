# FitnessApp - QA Bug Report

**Application:** FitnessApp (Fitness & Wellness Mobile App)  
**Testing Mode:** Exploratory Manual Testing  
**Environment:** Android Mobile  
**Date:** August 3, 2026  
**Total Bugs Logged:** 22  

---

## Bug Master Log

| Bug ID | Module / Screen | Summary / Technical Description | Severity | Recommended Fix |
| :--- | :--- | :--- | :--- | :--- |
| **BUG-01** | Water Intake / Today's Intake | **No Undo/Decrement Mechanism:** Once water glasses are logged by tapping, tapping them again does not untap/remove them. No UI control exists to undo an accidental entry. | **Medium** | Implement toggle logic (tap active glass to deselect) or add explicit `+ / -` counter controls. |
| **BUG-02** | Water Intake / Today's Intake | **Hard Cap on Goal Target:** Intake logging is strictly capped at the set daily goal (e.g., 12 glasses). Dynamic grid expansion or floating `+` controls to log excess intake are missing. | **Medium** | Allow intake count and bar chart rendering to scale dynamically above 100% of target. |
| **BUG-03** | Water Intake / Water Trend | **UI Text Overlap on X-Axis:** X-axis day label `"Wed"` wraps incorrectly, spilling the letter `"d"` directly onto the `"Days"` axis title. | **Low** | Adjust container padding/flexbox layout properties on chart axis text elements. |
| **BUG-04** | Water Intake / Goal Completion | **Missing Goal Completion State:** Reaching 100% daily intake goal produces no visual feedback, toast animation, sound, or haptic confirmation. | **Medium** | Add completion trigger (e.g., Lottie animation / victory toast) upon reaching 100% target. |
| **BUG-05** | Qibla Compass | **Incorrect Cardinal Layout & Dial Rotation:** Cardinal directions (N, S, E, W) are misaligned around the dial. Device rotation turns only the needle while the compass housing remains static. | **High** | Recalibrate spatial mapping; ensure background dial rotates relative to magnetometer heading. |
| **BUG-06** | Qibla Compass | **Unanchored Floating UI Element:** A small green icon (prayer mat/book) renders outside compass dial borders without proper layout constraints. | **Medium** | Enforce flexbox/relative constraints on icon position within parent container. |
| **BUG-07** | Qibla Compass | **Missing Alignment Feedback & Calibration:** No visual/haptic indication occurs when aligned with Qibla, nor is there a magnetometer sensor calibration prompt. | **Medium** | Add haptic vibration on target lock; prompt figure-8 calibration on low sensor precision. |
| **BUG-08** | Qibla Compass / Header | **Dark Mode Text Contrast Failure:** Header title text *"Qibla"* has near-zero visual contrast against dark green gradient background. | **Low** | Update text color token to achieve WCAG AAA contrast ratio in dark mode. |
| **BUG-09** | Prayer Time | **Incorrect Hijri Date Calculation:** Gregorian date "3 August" incorrectly calculates to "29-10-1447 (Shawwāl 1447)" instead of 1448 AH. | **High** | Fix backend Hijri converter utility / API response calculation logic. |
| **BUG-10** | Prayer Time | **UX Visual Ambiguity on Active Reminder:** Notification bell state (green for active alarm on Asr) visually conflicts with identifying the upcoming prayer (Dhuhr), as Dhuhr lacks a distinct active-card state. | **Low** | Add distinct visual highlight/card border to the active "Next Prayer" row. |
| **BUG-11** | Prayer Time | **Unformatted Time String Output:** Displays raw seconds (`12:31:00`) instead of localized 12h/24h standard formatting (`12:31 PM`). | **Low** | Format time objects using standard localized time formatter (`hh:mm a`). |
| **BUG-12** | Prayer Time | **Missing Juristic & Calculation Settings:** App lacks configuration menus for Islamic Calculation Methods or Asr Juristic (Hanafi/Shafi'i) shadow ratios. | **Medium** | Add settings modal for calculation method (MWL, ISNA, UIC Karachi) and Asr juristic toggle. |
| **BUG-13** | Fasting Tracker | **Calendar Grid Selection State Mismatch:** Selecting a date in the input modal (`04-Aug-2026`) fails to update the active highlight state on the top calendar grid. | **Medium** | Bind active calendar grid state to date picker selection variable. |
| **BUG-14** | Fasting Tracker / Header | **Dark Mode Text Contrast Failure:** Header text *"Fasting"* lacks proper contrast against dark green gradient top bar. | **Low** | Apply higher contrast color token for header title components in dark mode. |
| **BUG-15** | Fasting Tracker / Calendar | **False Active State & Unresponsive Date:** Unlogged dates (e.g., Aug 10) render as solid green active states, blocking user tap interactions and modal trigger. | **High** | Fix calendar state mapping to check valid log array before rendering active green style. |
| **BUG-16** | Fasting Tracker / Logging Logic | **Missing Duration Validation Logic:** System permits logging non-Islamic / invalid fast durations (e.g., 8:00 PM to 12:00 AM, 4 hours) without warning or validation. | **Medium** | Implement duration/time window validation rules prior to submitting fast entries. |
| **BUG-17** | QuickFit / Modal | **Missing Input Type & Length Validation:** Category inputs accept numeric test strings (`2123...`) and uncapped lengths without validation. | **High** | Implement string validation (`alpha-only`, `max_length <= 20`) on category tag inputs. |
| **BUG-18** | QuickFit / Modal | **Unsanitized Input & Modal Text Overflow:** Unsanitized string injection repeats dynamically inside modal titles, overflowing container boundaries and truncating words (`communit Categories`). | **High** | Sanitize modal interpolation variables; apply CSS overflow `text-overflow: ellipsis`. |
| **BUG-19** | QuickFit / Formatting | **Missing String Normalization:** Category and subcategory strings lack casing normalization (`toTitleCase()`), rendering mixed casing (`"back"`, `"forearm"` vs. `"Biceps"`). | **Low** | Enforce standard capitalization helper (`toTitleCase()`) on all category tag renders. |
| **BUG-20** | QuickFit / Modal | **Missing Empty-State Handling:** Opening categories with zero available exercises (**Abdominals**, **Neck**, **back**) renders a completely blank modal sheet without feedback or loader graphics. | **Medium** | Add fallback UI graphic/message (*"No exercises found for this target zone"*). |
| **BUG-21** | QuickFit / Modal Header | **Unsanitized String Interpolation in Headers:** Dynamic modal titles append `" Categories"` to raw string variables without validation, producing grammatically broken headers (e.g., `back Categories`). | **Low** | Normalize string headers before appending template literals (`${capitalize(category)} Categories`). |
| **BUG-22** | QuickFit / Data Integrity | **Missing Subcategory Deduplication / Array Overlap:** Selecting overlapping body zones (e.g., `Lower Body` vs `Legs`) returns duplicate subcategories (like `Hamstrings`) rather than pulling from a single-source normalized taxonomy. | **High** | Implement array deduplication logic (`Array.from(new Set(...))`) across taxonomy endpoints. |
