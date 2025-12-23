# WordPress Setup Guide for Western Corridor

This guide details the Post Types (CPT) and Custom Fields (ACF) required to power the dynamic pages on the website.

## 1. Custom Post Types (CPT)

You need to register the following Post Types. You can use the **CPT UI** plugin.

### A. Partners
- **Slug**: `partners`
- **Singular**: Partner
- **Plural**: Partners
- **Supports**: Title, Featured Image, Page Attributes (Order)

### B. Timeline Events
- **Slug**: `timeline-events`
- **Singular**: Timeline Event
- **Plural**: Timeline Events
- **Supports**: Title, Date (published date used for sorting)

### C. Job Openings
- **Slug**: `jobs`
- **Singular**: Job
- **Plural**: Jobs
- **Supports**: Title, Date

---

## 2. Advanced Custom Fields (ACF)

Create the following Field Groups. Ensure "Show in GraphQL" is ENABLED for all groups and fields.

### A. Partner Fields
**Location**: Post Type is equal to `Partner`
**GraphQL Field Name**: `partnerFields`

| Field Label | Field Name | Type | Instructions |
| :--- | :--- | :--- | :--- |
| Role | `role` | Text | e.g. "Lead Project Manager" |
| Category | `category` | Select/Text | e.g. "Project Management", "Engineering" |
| Description | `description` | Text Area | Brief description of the partner |
| Expertise | `expertise` | Text Area | Comma separated or new lines |
| Responsibilities | `responsibilities` | Text Area | Comma separated or new lines |
| Website URL | `websiteUrl` | Url | Link to their website |

### B. Timeline Fields
**Location**: Post Type is equal to `Timeline Event`
**GraphQL Field Name**: `timelineFields`

| Field Label | Field Name | Type | Instructions |
| :--- | :--- | :--- | :--- |
| Description | `description` | Text Area | Details of the event |
| Year | `year` | Text | Display year (e.g. "2024") |
| Phase | `phase` | Text | e.g. "Phase 1" |
| Status | `status` | Select | "Completed", "In Progress", "Planned" |

### C. Job Fields
**Location**: Post Type is equal to `Job`
**GraphQL Field Name**: `jobFields`

| Field Label | Field Name | Type | Instructions |
| :--- | :--- | :--- | :--- |
| Location | `location` | Text | e.g. "Lusaka, Zambia" |
| Type | `type` | Select | "Full Time", "Contract" |
| Department | `department` | Text | e.g. "Engineering" |
| Description | `description` | WYSIWYG | Full job description |
| Requirements | `requirements` | WYSIWYG | Job requirements |
| Application Link | `applicationLink` | Url | Link to apply or email mailto: |

### D. About Page Fields
**Location**: Page Template is equal to `About Page` (or Page is equal to `About`)
**GraphQL Field Name**: `aboutPageFields`

| Field Label | Field Name | Type |
| :--- | :--- | :--- |
| Hero Title | `heroTitle` | Text |
| Hero Subtitle | `heroSubtitle` | Text Area |
| Hero Image | `heroImage` | Image |
| Story Title | `storyTitle` | Text |
| Story Content | `storyContent` | WYSIWYG |
| Story Image | `storyImage` | Image |
| Mission Title | `missionTitle` | Text |
| Mission Content | `missionContent` | Text Area |
| Values Title | `valuesTitle` | Text |
| Values List | `valuesList` | Text Area (CSV) |

### E. Contact Page Fields
**Location**: Page Template is equal to `Contact Page`
**GraphQL Field Name**: `contactPageFields`

| Field Label | Field Name | Type |
| :--- | :--- | :--- |
| Hero Title | `heroTitle` | Text |
| Hero Subtitle | `heroSubtitle` | Text Area |
| Hero Image | `heroImage` | Image |
| Address | `address` | Text Area |
| Email | `email` | Text |
| Phone | `phone` | Text |
| Working Hours | `workingHours` | Text |
| Map Embed URL | `mapEmbedUrl` | Url |

---

## 3. Pods Configuration (For Careers Page)

Since you are using the **Pods** plugin, please create the following Pods (Custom Post Types) to power the Careers Page.

### A. Careers Page (Pod)
*   **Label**: Careers Page
*   **Name (Slug)**: `careers_page` (Singular), `careers_pages` (Plural)
*   **Pod Type**: Custom Post Type
*   **GraphQL Single Name**: `careersPage`
*   **GraphQL Plural Name**: `careersPages`

**Fields**:
| Label | Name | Type | Description |
| :--- | :--- | :--- | :--- |
| Hero Title | `heroTitle` | Text | Main title on the banner |
| Hero Description | `heroDescription` | WYSIWYG / Text Area | Subtitle text |
| Hero Background Image | `heroBackgroundImage` | File / Image | Background image |
| Commitment Title | `commitmentTitle` | Text | Title for "Our Commitment" section |
| Commitment Description | `commitmentDescription` | WYSIWYG | Description paragraph |
| Commitment Items | `commitmentItems` | Paragraph Text | Enter one item per line. These will be the bullet points. |

### B. Career FAQs (Fields in Careers Page Pod)
**Note**: The user requested 4 specific dropdowns. Add these items to the **Careers Page** Pod (not a separate pod) to match the query.

**Fields**:
| Label | Name | Type | Description |
| :--- | :--- | :--- | :--- |
| Question | `question` | Text | The FAQ question |
| Answer | `answer` | WYSIWYG | The answer |
| Question 2 | `question2` | Text | Second FAQ question |
| Answer 2 | `answer2` | WYSIWYG | Second FAQ answer |
| Question 3 | `question3` | Text | Third FAQ question |
| Answer 3 | `answer3` | WYSIWYG | Third FAQ answer |
| Question 4 | `question4` | Text | Fourth FAQ question |
| Answer 4 | `answer4` | WYSIWYG | Fourth FAQ answer |
| Question 5 | `question5` | Text | Fifth FAQ question |
| Answer 5 | `answer5` | WYSIWYG | Fifth FAQ answer |
| Question 6 | `question6` | Text | Sixth FAQ question |
| Answer 6 | `answer6` | WYSIWYG | Sixth FAQ answer |




---

### C. Gallery Page (Pod)
*   **Label**: Gallery Page
*   **Name (Slug)**: `gallery_data` (Singular), `gallerydatas` (Plural)
*   **Pod Type**: Custom Post Type
*   **GraphQL Single Name**: `gallerydata`
*   **GraphQL Plural Name**: `gallerydatas`

**Fields**:
| Label | Name | Type | Description |
| :--- | :--- | :--- | :--- |
| Hero Title | `herotitle` | Text | Main title on the banner |
| Hero Description | `heroDescription` | WYSIWYG / Text Area | Subtitle text |
| Hero Background Image | `heroBackgroundImage` | File / Image | Background image |
| Project Gallery Details | `projectGalleryDetails` | WYSIWYG | Description above the grid |

---

## 4. Important Notes
- **GraphQL Field Names**: Ensure the field names match exactly as listed above.
- **Images**: When using Pods, ensuring "File / Image" fields are set to "Single File" usually works best for these queries.
- **Populating Data**:
    -   Create **ONE** post in "Careers Page" with your content.
    -   Create multiple posts in "Career FAQs" for each question you want to display.

