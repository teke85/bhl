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

## 3. Important Notes
- **GraphQL Field Names**: Make sure the "GraphQL Field Name" in ACF settings matches exactly what is listed above (e.g. `partnerFields`, `aboutPageFields`).
- **Images**: Ensure you install a plugin like **WPType** or similar if you need to expose deeper image nodes, but standard WPGraphQL with ACF works fine.
