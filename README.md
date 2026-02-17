# Landing Page App

A device dashboard landing page built with **Angular 20** and **Angular Material**. Displays devices organized into groups, each rendered as an expandable card showing its name, status, description, and a quick-launch link.

## Features

- **Device groups** — Devices are organized into named groups, configured via a JSON file.
- **Expandable device cards** — Each device uses a Material accordion panel that reveals a description and action buttons when expanded.
- **Status indicators** — Devices show an active/inactive status with corresponding Material icons.
- **Server-side rendering** — Supports SSR via Angular SSR and Express.
- **Configurable** — Device data is driven by [`src/config/devices.json`](src/config/devices.json), making it easy to add or modify devices and groups without changing code.

## Tech Stack

- Angular 20 with standalone components
- Angular Material & CDK
- Tailwind CSS (PostCSS plugin) + SCSS
- Express (SSR)
- Karma & Jasmine (testing)

## Project Structure

```
src/
├── config/
│   └── devices.json          # Device/group configuration
├── app/
│   ├── app.ts                # Root component
│   ├── app.routes.ts         # Route definitions
│   ├── main-page/            # Main dashboard page
│   │   ├── main-page.ts
│   │   ├── main-page.html
│   │   └── main-page.scss
│   └── device/
│       ├── device-1/         # Expandable device card component
│       └── device-2/         # Alternate device component (placeholder)
└── styles.scss               # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v20+)
- Angular CLI v20

### Install dependencies

```bash
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on source changes.

### Build

```bash
ng build
```

Build artifacts are written to `dist/`.

### Run with SSR

```bash
npm run serve:ssr:landing-page-app
```

### Run tests

```bash
ng test
```

## Configuration

Edit [`src/config/devices.json`](src/config/devices.json) to define device groups and devices:

```json
{
  "device_groups": [
    {
      "name": "group1",
      "devices": [
        {
          "name": "Device 1",
          "description": "This is the first device.",
          "url": "http://device-1",
          "status": true
        }
      ]
    }
  ]
}
```

| Field         | Type    | Description                          |
| ------------- | ------- | ------------------------------------ |
| `name`        | string  | Display name for the device          |
| `description` | string  | Description shown in the card body   |
| `url`         | string  | Link opened by the "GO!" button      |
| `status`      | boolean | `true` = Active, `false` = Inactive  |
