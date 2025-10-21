# UTM Generator React

A modern, clean UTM parameter generator built with React, TypeScript, Vite, and shadcn/ui components.

## Live Demo

🚀 **[Try it live on GitHub Pages](https://gangadhar02.github.io/utm-generator-react/)**

## Features

- **Modern UI**: Built with shadcn/ui components for a polished, professional look
- **Dark Mode Support**: Automatically adapts to system color scheme preferences
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Type-Safe**: Written in TypeScript for better development experience
- **Fast Development**: Powered by Vite for lightning-fast HMR

## UTM Parameters Supported

- **Source** (`utm_source`): Identifies which site sent the traffic (e.g., google, newsletter, facebook)
- **Medium** (`utm_medium`): Identifies what type of link was used (e.g., cpc, email, social)
- **Campaign** (`utm_campaign`): Identifies a specific product promotion or strategic campaign (e.g., spring_sale)
- **Term** (`utm_term`): Identifies search terms (optional)
- **Content** (`utm_content`): Identifies what specifically was clicked to bring the user to the site (optional)

## Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### UI Components (shadcn/ui)
- **Button** - Interactive button component with multiple variants
- **Input** - Text input fields with consistent styling
- **Label** - Form labels with accessibility support
- **Textarea** - Multi-line text input for generated URLs
- **Card** - Container components for organized layout

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **lucide-react** - Beautiful icon set

### Component Architecture
- **class-variance-authority** - For component variant management
- **clsx & tailwind-merge** - For efficient class name handling

## Project Structure

```
src/
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   └── utm-generator.tsx # Main UTM generator component
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
├── App.tsx               # Root application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and theme
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd utm-generator-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. Enter your **Website URL** (required)
2. Fill in the UTM parameters:
   - **Campaign Source**: Where the traffic comes from
   - **Campaign Medium**: The marketing medium
   - **Campaign Name**: The specific campaign
   - **Campaign Term** (optional): Paid keywords
   - **Campaign Content** (optional): To differentiate similar content
3. Click **Generate URL**
4. Copy the generated URL with the **Copy to Clipboard** button

## Component Analysis

### shadcn/ui Components Used

1. **Button (`@/components/ui/button.tsx`)**
   - Variants: default, destructive, outline, secondary, ghost, link
   - Sizes: default, sm, lg, icon
   - Used for: Generate URL, Reset, Copy to Clipboard actions

2. **Input (`@/components/ui/input.tsx`)**
   - Accessible text input with consistent styling
   - Used for: All UTM parameter inputs

3. **Label (`@/components/ui/label.tsx`)**
   - Built on @radix-ui/react-label for accessibility
   - Used for: Form field labels

4. **Textarea (`@/components/ui/textarea.tsx`)**
   - Multi-line text input
   - Used for: Displaying the generated URL

5. **Card (`@/components/ui/card.tsx`)**
   - Includes: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
   - Used for: Organizing the form and output sections

### Design Decisions

- **Color Scheme**: Uses Tailwind v4's new @theme system with oklch colors for better color accuracy
- **Responsive**: Mobile-first approach with responsive grid layouts
- **Accessibility**: Built with Radix UI primitives for better a11y
- **User Experience**: Immediate visual feedback with copy confirmation

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
